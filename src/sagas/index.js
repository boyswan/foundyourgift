import { takeLatest } from "redux-saga";
import { fork, throttle } from "redux-saga/effects";
import {
  updateBudget,
  updateAvailable,
  updateDimensionss,
  updateParams,
  hydrate,
  checkout
} from "sagas/helpers";

const Ui = [
  fork(function*() {
    yield* takeLatest("HYDRATE", hydrate);
  }),
  fork(function*() {
    yield* takeLatest("SET_SLIDER", updateBudget);
  }),
  fork(function*() {
    yield* takeLatest("REMOVE_ITEM", updateBudget);
  }),
  fork(function*() {
    yield* takeLatest("SELECT_ITEM", updateBudget);
  }),
  fork(function*() {
    yield* takeLatest("SET_RESULTS", updateAvailable);
  }),
  fork(function*() {
    yield throttle(500, "GET_DIMENSIONS", updateDimensionss);
  })
];

const Api = [
  fork(function*() {
    yield* takeLatest("CHECKOUT", checkout);
  }),
  fork(function*() {
    yield* takeLatest("TOGGLE_INTEREST", updateParams);
  })
];

export default function* root() {
  yield [...Api, ...Ui];
}
