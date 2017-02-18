import Actions from "actions";
import { call as _call, put, select } from "redux-saga/effects";

import {
  fetch,
  interestToQuery,
  formatBalance,
  totalPrice,
  getCartQuery,
  filterResults,
  updateCacheWithRes,
  getColumn,
  checkCache,
  getBreakpoint,
  checkCacheToUrl
} from "utils";

import { concat, identity, keys, flatten, pipe, pick, values, map, filter, prop } from "ramda";
import Const from "utils/constants";

const searchUrl = concat(`${Const.api.API_URL}/search`);
const cartUrl = concat(`${Const.api.API_URL}/cart`);

export function* hydrate(route) {
  try {
    const cart = yield JSON.parse(localStorage.getItem("cart") || "[]");
    yield put(Actions.setCart({ value: cart }));
    yield updateParams(route);
  } catch (err) {
    yield console.log(err);
  }
}

function* callApi(url) {
  const { cache } = yield select(identity);
  const { data } = yield _call(fetch, searchUrl(url));
  if (data) {
    yield [
      put(Actions.setStatus({ value: { loading: false } })),
      put(Actions.setCache({ value: updateCacheWithRes(keys(data), cache) })),
      put(Actions.setResults({ value: data }))
    ];
  }
}

export function* updateParams({ router: { push, location } }) {
  try {
    const { cache, interests } = yield select(identity);
    yield push({ ...location, query: interestToQuery(interests) });
    if (window.location.search.length > 0) {
      const cachedUrl = checkCacheToUrl(cache, window.location.search);
      yield put(Actions.setStatus({ value: { loading: true } }));
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
    const {
      interests,
      budgetInput,
      cart,
      searchResults,
      breakpoint
    } = yield select(identity);
    const currentSelected = pipe(filter(prop("active")), map(prop("type")));
    const formatAvailable = pipe(pick, values, flatten);
    const available = formatAvailable(currentSelected(interests), searchResults);
    const availableProducts = filterResults(budgetInput, cart, available);
    const columnProducts = getColumn(breakpoint, availableProducts);
    yield [
      put(Actions.availableProducts({ value: columnProducts })),
      put(Actions.setStatus({ value: { loading: false } }))
    ];
  } catch (err) {
    yield console.log(err);
  }
}

export function* updateBudget() {
  try {
    const { budgetInput, cart } = yield select(identity);
    const remainingBudget = formatBalance(budgetInput, cart);
    const total = totalPrice(cart);
    yield [
      put(Actions.setBudget({ value: remainingBudget })),
      put(Actions.setTotal({ value: total })),
      updateAvailable()
    ];
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (err) {
    yield console.log(err);
  }
}

export function* updateDimensionss({ value }) {
  try {
    yield [
      put(Actions.setDimensions({ value })),
      put(Actions.setBreakpoints({ value: getBreakpoint(value.width) })),
      updateAvailable()
    ];
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
