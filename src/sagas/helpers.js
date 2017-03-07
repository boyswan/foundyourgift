import { call as _call, put, select } from "redux-saga/effects";
import moment from "moment";
import {
  fetch,
  interestToQuery,
  formatBalance,
  totalPrice,
  getCartQuery,
  filterResults,
  updateCacheWithRes,
  getColumn,
  getBreakpoint,
  checkCacheToUrl
} from "../utils";

import {
  concat,
  tap,
  identity,
  keys,
  flatten,
  pipe,
  pick,
  values,
  map,
  filter,
  prop,
  take
} from "ramda";
import Const from "../utils/constants";
const log = tap(console.log);
const searchUrl = concat(`${Const.api.API_URL}/search`);
const cartUrl = concat(`${Const.api.API_URL}/cart`);
const extraTime = 1000 * 60 * 60 * 12;
const add12Hours = Date.now() - extraTime;

export function* hydrate(route) {
  try {
    const [ cart, budget ] = [
      yield JSON.parse(localStorage.getItem("cart") || "[]"),
      yield JSON.parse(localStorage.getItem("budget") || Const.ui.defaultBudget)
    ];

    yield put({ type: "SET_CART", value: cart.filter(({ date }) => date < add12Hours) });
    yield put({ type: "SET_SLIDER", value: budget });
    yield updateParams(route);
    yield updateBudget();
  } catch (err) {
    yield log(err);
  }
}

function* callApi(url) {
  const { cache } = yield select(identity);
  const { data } = yield _call(fetch, searchUrl(url));
  if (data) {
    yield put({ type: "SET_STATUS", value: { loading: false } });
    yield put({ type: "SET_CACHE", value: updateCacheWithRes(keys(data), cache) });
    yield put({ type: "SET_RESULTS", value: data });
  }
}

export function* updateParams({ router: { push, location } }) {
  try {
    const { cache, interests } = yield select(identity);
    yield push({ ...location, query: interestToQuery(interests) });
    if (window.location.search.length > 0) {
      const cachedUrl = checkCacheToUrl(cache, window.location.search);
      yield put({ type: "SET_STATUS", value: { loading: true } });
      yield callApi(cachedUrl);
    } else {
      yield put({ type: "SET_STATUS", value: { loading: false } });
      yield updateAvailable();
    }
  } catch (err) {
    yield log(err);
  }
}

export function* updateAvailable() {
  try {
    const { interests, budgetInput, cart, searchResults, breakpoint } = yield select(identity);
    const currentSelected = pipe(filter(prop("active")), map(prop("type")));
    const formatAvailable = pipe(pick, values, flatten);
    const available = formatAvailable(currentSelected(interests), searchResults);
    const availableProducts = filterResults(budgetInput, cart, available);
    const columnProducts = getColumn(breakpoint, availableProducts);
    yield put({ type: "AVAILABLE_PRODUCTS", value: columnProducts });
  } catch (err) {
    yield log(err);
  }
}

export function* updateBudget() {
  try {
    const { budgetInput, cart } = yield select(identity);
    const remainingBudget = formatBalance(budgetInput, cart);
    const total = totalPrice(cart);
    yield put({ type: "SET_BUDGET", value: remainingBudget });
    yield put({ type: "SET_TOTAL", value: total });
    yield updateAvailable();
    localStorage.setItem("cart", JSON.stringify(take(50, cart)));
    localStorage.setItem("budget", JSON.stringify(budgetInput));
  } catch (err) {
    yield log(err);
  }
}

export function* updateDimensionss({ value }) {
  try {
    yield put({ type: "SET_DIMENSIONS", value });
    yield put({ type: "SET_BREAKPOINT", value: getBreakpoint(value.width) });
    yield updateAvailable();
  } catch (err) {
    yield log(err);
  }
}

export function* checkout() {
  try {
    const { cart } = yield select(identity);
    const { data } = yield _call(fetch, cartUrl(getCartQuery(cart)));
    // yield put({ type: "SET_URL", value: data });
    // yield window.open(data, "_blank");
    yield window.location = data;
  } catch (err) {
    yield log(err);
  }
}
