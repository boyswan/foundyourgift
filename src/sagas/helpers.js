import { call as _call, put, select } from 'redux-saga/effects';
import { fetch, interestToQuery, formatBalance, getBalance, filterResults } from 'utils';
import { concat, splitEvery, identity } from 'ramda'
import Const from 'utils/constants'

const apiUrl = concat(`${Const.api.API_URL}/search`)

export function* search({ router: { push, location } }) {
	try {
		const { interests, budgetInput, cart } = yield select(identity);

		yield push({ ...location, query: interestToQuery(interests) })
		const { data: { Items } } = yield _call(fetch, apiUrl(window.location.search))
		yield put({ type: 'SET_RESULTS', item: 'searchResults', value: Items })
		yield put({ type: 'AVAILABLE_PRODUCTS', item: 'availableProducts', value: splitEvery(3, filterResults(budgetInput, cart, Items)) })
	} catch (err) {
		yield console.log(err)
	}
};

export function* updateBudget() {
	try {
		const { budgetInput, cart, searchResults, availableProducts } = yield select(identity)

		yield put({ type: 'SET_BUDGET', item: 'remainingBudget', value: formatBalance(budgetInput, cart) })
		yield put({ type: 'SET_TOTAL', item: 'total', value: getBalance(cart)})
		yield put({ type: 'AVAILABLE_PRODUCTS', item: 'availableProducts', value: splitEvery(3, filterResults(budgetInput, cart, searchResults)) })
		yield put
	} catch (err) {
		yield console.log(err)
	}
}
