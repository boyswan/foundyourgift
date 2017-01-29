import { takeEvery } from 'redux-saga';
import { call as _call, put, fork, select } from 'redux-saga/effects';
import { fetch, interestToQuery } from 'utils';
import { identity, concat } from 'ramda'
import Const from 'utils/constants'

const api = concat(`${Const.api.API_URL}/search`)

function* search({ router: { push, location } }) {
	try {
		const interests = yield select(state => state.interests)
		yield push({ ...location, query: interestToQuery(interests) })

		const { data: { Items } } = yield _call(fetch, api(location.search))
		yield put({ type: 'SET_RESULTS', item: 'searchResults', value: Items })

	} catch (err) {
		yield console.log(err)
	}
}

export default function* root() {
  yield [
		fork(function* () {
			yield* takeEvery('SEARCH', search)
		}),
		fork(function* () {
			yield* takeEvery('TOGGLE_INTEREST', search)
		})
  ]
}
