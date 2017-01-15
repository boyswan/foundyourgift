import store from "./store";
import { toSnakeCaseUpper } from './index';

export const createActions = reduce(
  (acc, type) =>
    (acc[type] = payload =>
      store.dispatch({ ...payload, type: toSnakeCaseUpper(type) }), acc),
  {}
)

export const createReducer =
  curry((init, reducers, existingState, _action) => {
    const state = existingState ? existingState : init;
    const fn = reducers[_action.type] || (x => y => y);
    const action = omit('type', _action);
    return typeof fn === "function"
      ? isEmpty(_action)
        ? fn(action, state)(state)
        : fn(action, state)(state)
      : identity;
  })
