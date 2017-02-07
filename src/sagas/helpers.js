import { call as _call, put, select } from 'redux-saga/effects';
import {
  fetch,
  interestToQuery,
  formatBalance,
  getBalance,
  filterResults,
  getCartQuery
} from 'utils';
import { concat, splitEvery, identity, dropLast } from 'ramda';
import Const from 'utils/constants';

const searchUrl = concat(`${Const.api.API_URL}/search`);
const cartUrl = concat(`${Const.api.API_URL}/cart`);

const removeLastRowForSafety = (budgetInput, cart, searchResults) =>
  dropLast(1, splitEvery(3, filterResults(budgetInput, cart, searchResults)));

export function* search({ router: { push, location } }) {
  try {
    const { interests, budgetInput, cart } = yield select(identity);

    yield push({ ...location, query: interestToQuery(interests) });
    const { data: { Items } } = yield _call(fetch, searchUrl(window.location.search));
    yield put({ type: 'SET_RESULTS', item: 'searchResults', value: Items });
    yield put({
      type: 'AVAILABLE_PRODUCTS',
      item: 'availableProducts',
      value: removeLastRowForSafety(budgetInput, cart, Items)
    });
  } catch (err) {
    yield console.log(err);
  }
}

export function* updateBudget() {
  try {
    const { budgetInput, cart, searchResults, availableProducts } = yield select(identity);

    yield put({
      type: 'SET_BUDGET',
      item: 'remainingBudget',
      value: formatBalance(budgetInput, cart)
    });
    yield put({ type: 'SET_TOTAL', item: 'total', value: getBalance(cart) });

    yield put({
      type: 'AVAILABLE_PRODUCTS',
      item: 'availableProducts',
      value: removeLastRowForSafety(budgetInput, cart, searchResults)
    });
    yield put;
  } catch (err) {
    yield console.log(err);
  }
}

export function* checkout() {
  try {
    const { cart } = yield select(identity);
    const { data } = yield _call(fetch, cartUrl(getCartQuery(cart)));
    yield console.log(data);
  } catch (err) {
    yield console.log(err);
  }
}
