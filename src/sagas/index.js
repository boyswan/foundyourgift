import { takeEvery } from 'redux-saga';
import { call as _call, put, fork, select } from 'redux-saga/effects';
import { fetch } from 'utils';

function* search({ search }) {
	try {
		const { data } = yield _call(fetch, `/api/search${search}`)
    yield console.log('data', data)
		yield put({ type: 'SEARCH_RESULTS', item: 'searchResults', value: data })
	} catch (err) {
		yield console.log(err)
	}
}

export default function* root() {
  yield [
		fork(function* () {
			yield* takeEvery('SEARCH', search)
		})
  ]
}
