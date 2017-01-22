import store from "./store";
import { connect as _connect } from 'react-redux';
import { toSnakeCaseUpper } from './index';
import { reduce, curry, identity, pipe, tail, map, head, split, assoc } from 'ramda';

export const createActions = reduce(
  (acc, type) =>
    (acc[type] = payload =>
      store.dispatch({ ...payload, type: toSnakeCaseUpper(type) }), acc),
  {}
)

export const createReducer =
  curry((init, reducers, existingState, action) => {
    const state = existingState ? existingState : init;
    const fn = reducers[action.type] || (x => y => y);
    return typeof fn === "function"
      ? fn(action, state)(state)
      : identity;
  })

export const connect = (component, state = identity) =>
  _connect(state)(component)


export const getParams = pipe(
  tail,
  split('&'),
  map(pipe(split('='), head))
)(window.location.search);

// setInteretsFromParams :: [Object] -> [Object]
export const setInteretsFromParams = map(x =>
  getParams.includes(x.type) ? assoc('active', true, x) : x
)
