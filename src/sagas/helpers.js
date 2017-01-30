import { call as _call, put, select } from 'redux-saga/effects';
import { fetch, interestToQuery, formatBalance, getBalance } from 'utils';
import { concat } from 'ramda'
import Const from 'utils/constants'

const apiUrl = concat(`${Const.api.API_URL}/search`)

export function* search({ router: { push, location } }) {
	try {
		const interests = yield select(state => state.interests)
		yield push({ ...location, query: interestToQuery(interests) })
		const { data: { Items } } = yield _call(fetch, apiUrl(window.location.search))
		yield put({ type: 'SET_RESULTS', item: 'searchResults', value: Items })
	} catch (err) {
		yield console.log(err)
	}
}

export function* updateBudget() {
	try {
		const { budgetInput, cart } = yield select(state => state)
		yield put({ type: 'SET_BUDGET', item: 'remainingBudget', value: formatBalance(budgetInput, cart) })
		yield put({ type: 'SET_TOTAL', item: 'total', value: getBalance(cart)})
	} catch (err) {
		yield console.log(err)
	}
}
