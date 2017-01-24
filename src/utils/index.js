import store from "./store";
import { connect as _connect } from 'react-redux';
import axios from 'axios';
import Const from 'utils/constants';
import { reduce, curry, assoc, addIndex, map, pipe, head, tail, split,
  uncurryN, replace, toLower, toUpper, identity, add } from 'ramda';

const getConfig = url => ({
  method: 'GET',
  url,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": Const.api.API_KEY
  }
})

export const mapIndex = addIndex(map);

export const fetch = url => axios(getConfig(url))
  .then(identity)
  .catch(console.log)

export const toSnakeCaseUpper = pipe(
  replace(/([A-Z])/g, str => `_${toLower(str)}`),
  toUpper
);

export const interestToQuery = reduce((acc, val) => val.active
  ? assoc(val.type, true, acc)
  : acc, {})

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


export const totalPrice = reduce((acc, { price }) => add(acc, price), 0)

// Push last argument into pipe, curry other arguments
export const last = pipe(uncurryN(arguments.length), curry)
