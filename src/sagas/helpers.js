import { call as _call, put, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import {
  fetch,
  interestToQuery,
  formatBalance,
  totalPrice,
  filterResults,
  getCartQuery,
  removeLastRowForSafety,
  updateCacheWithRes,
  checkCache,
  checkCacheToUrl
} from "utils";

import { concat, identity, keys, flatten, pipe, pick, values, map, filter, prop } from "ramda";
import Const from "utils/constants";

const searchUrl = concat(`${Const.api.API_URL}/search`);
const cartUrl = concat(`${Const.api.API_URL}/cart`);

export function* hydrate(route) {
  try {
    const cart = yield JSON.parse(localStorage.getItem("cart") || "[]");
    yield put({ type: "SET_CART", item: "cart", value: cart });
    yield updateParams(route);
  } catch (err) {
    yield console.log(err);
  }
}

function* callApi(url) {
  const { cache } = yield select(identity);
  const { data } = yield _call(fetch, searchUrl(url));
  if (data) {
    yield put({ type: "SET_STATUS", item: "status", value: { loading: false } });
    yield put({ type: "SET_CACHE", item: "cache", value: updateCacheWithRes(keys(data), cache) });
    yield put({ type: "SET_RESULTS", item: "searchResults", value: data });
  }
}

export function* updateParams({ router: { push, location } }) {
  try {
    const { cache, interests } = yield select(identity);
    yield push({ ...location, query: interestToQuery(interests) });
    if (window.location.search.length > 0) {
      const cachedUrl = checkCacheToUrl(cache, window.location.search);
      const cachedArr = checkCache(cache, window.location.search);
      yield put({ type: "SET_STATUS", item: "status", value: { loading: true } });
      yield callApi(cachedUrl);
    } else {
      yield updateAvailable();
    }
  } catch (err) {
    yield console.log(err);
  }
}

export function* updateAvailable() {
  try {
    const { interests, budgetInput, cart, cache, searchResults } = yield select(identity);
    const currentSelected = pipe(filter(prop("active")), map(prop("type")));
    const formatAvailable = pipe(pick, values, flatten);
    const available = formatAvailable(currentSelected(interests), searchResults);
    const availableProducts = removeLastRowForSafety(budgetInput, cart, available);
    yield put({ type: "SET_STATUS", item: "status", value: { loading: false } });
    yield put({ type: "AVAILABLE_PRODUCTS", item: "availableProducts", value: availableProducts });
  } catch (err) {
    yield console.log(er);
  }
}

export function* updateBudget() {
  try {
    const { budgetInput, cart } = yield select(identity);
    const remainingBudget = formatBalance(budgetInput, cart);
    const total = totalPrice(cart);
    yield put({ type: "SET_BUDGET", item: "remainingBudget", value: remainingBudget });
    yield put({ type: "SET_TOTAL", item: "total", value: total });
    yield updateAvailable();
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (err) {
    yield console.log(err);
  }
}

export function* checkout() {
  try {
    const { cart } = yield select(identity);
    const { data } = yield _call(fetch, cartUrl(getCartQuery(cart)));
    // yield window.location.assign(data);
    yield console.log(data);
  } catch (err) {
    yield console.log(err);
  }
}
