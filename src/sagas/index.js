import { takeEvery } from 'redux-saga';
import { call as _call, put, fork, select } from 'redux-saga/effects';
import { fetch, interestToQuery } from 'utils';
import { identity } from 'ramda'


function* search({ router: { push, location } }) {
	try {
		const interests = yield select(state => state.interests)
		yield push({ ...location, query: interestToQuery(interests) })

		const { data } = yield _call(fetch, `/api/search${location.search}`)
		yield put({ type: 'SET_RESULTS', item: 'searchResults', value: data })

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
