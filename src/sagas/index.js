import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { updateBudget, search } from 'sagas/helpers'

const Ui = [
	fork(function* () {
		yield* takeLatest('SET_SLIDER', updateBudget)
	}),
	fork(function* () {
		yield* takeLatest('REMOVE_ITEM', updateBudget)
	}),
	fork(function* () {
		yield* takeLatest('SELECT_ITEM', updateBudget)
	}),
	fork(function* () {
		yield* takeLatest('FORCE_UPDATE', updateBudget)
	})
]

const Api = [
	fork(function* () {
		yield* takeLatest('SEARCH', search)
	}),
	fork(function* () {
		yield* takeLatest('TOGGLE_INTEREST', search)
	})
]

export default function* root() {
  yield [ ...Api, ...Ui ]
}
