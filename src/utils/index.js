import store from './store';
import { connect as _connect } from 'react-redux';
import axios from 'axios';
import Const from 'utils/constants';
import {
  reduce,
  curry,
  assoc,
  addIndex,
  join,
  map,
  pipe,
  head,
  tail,
  split,
  filter,
  concat,
  propEq,
  gt,
  prop,
  isNil,
  uncurryN,
  replace,
  toLower,
  toUpper,
  identity,
  add,
  clamp
} from 'ramda';

const getConfig = url => ({
  method: 'GET',
  url,
  headers: { 'Content-Type': 'application/json', 'x-api-key': Const.api.API_KEY }
});

export const mapIndex = addIndex(map);

export const fetch = url => axios(getConfig(url)).then(identity).catch(console.log);

export const toSnakeCaseUpper = pipe(replace(/([A-Z])/g, str => `_${toLower(str)}`), toUpper);

export const interestToQuery = reduce((acc, val) => val.active ? assoc(val.type, true, acc) : acc, {
});

export const createActions = reduce(
  (acc, type) =>
    (acc[type] = payload => store.dispatch({ ...payload, type: toSnakeCaseUpper(type) }), acc),
  {}
);

export const createReducer = curry((init, reducers, existingState, action) => {
  const state = existingState ? existingState : init;
  const fn = reducers[action.type] || (x => y => y);
  return typeof fn === 'function' ? fn(action, state)(state) : identity;
});

export const connect = (component, state = identity) => _connect(state)(component);

export const getParams = pipe(tail, split('&'), map(pipe(split('='), head)));

export const setInteretsFromParams = map(
  x => getParams(window.location.search).includes(x.type) ? assoc('active', true, x) : x
);

export const totalPrice = reduce((acc, { price }) => add(acc, price), 0);

export const last = pipe(uncurryN(arguments.length), curry);

export const getBalance = reduce((acc, { price }) => add(acc, price), 0);
export const formatBalance = (budgetInput, cart) =>
  clamp(0, 9999999, budgetInput - getBalance(cart)).toFixed(2);

export const isOverBudget = (budgetInput, cart) =>
  pipe(prop('price'), gt(budgetInput - totalPrice(cart)));

export const filterResults = last((budgetInput, cart) =>
  pipe(filter(isOverBudget(budgetInput, cart)), filter(pipe(prop('length'), isNil))));

export const getCartQuery = pipe(
  map(({ productId }) => `${productId}=${1}`),
  join('&'),
  concat('?')
);

export const activeInterests = filter(propEq('active', 'true'));
