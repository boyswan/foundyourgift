import store from "./store";
import { connect as _connect } from "react-redux";
import axios from "axios";
import Const from "utils/constants";
import {
  reduce,
  curry,
  flatten,
  assoc,
  addIndex,
  join,
  map,
  chain,
  groupBy,
  pipe,
  when,
  head,
  equals,
  ifElse,
  any,
  values,
  tail,
  split,
  aperture,
  filter,
  toPairs,
  concat,
  propEq,
  gt,
  allPass,
  prop,
  sortBy,
  cond,
  append,
  over,
  lensProp,
  dec,
  F,
  lt,
  always,
  uniq,
  isNil,
  __,
  uncurryN,
  replace,
  toLower,
  splitEvery,
  tap,
  dropLast,
  T,
  toUpper,
  identity,
  add,
  clamp
} from "ramda";

const log = tap(console.log);

const getConfig = url => ({
  method: "GET",
  url,
  headers: { "Content-Type": "application/json", "x-api-key": Const.api.API_KEY }
});

export const mapIndex = addIndex(map);

export const fetch = url => axios(getConfig(url)).then(identity).catch(console.log);

export const toSnakeCaseUpper = pipe(replace(/([A-Z])/g, str => `_${toLower(str)}`), toUpper);

export const interestToQuery = reduce(
  (acc, val) => val.active ? assoc(val.type, true, acc) : acc,
  {}
);

export const createActions = reduce(
  (acc, type) =>
    (acc[type] = payload => store.dispatch({ ...payload, type: toSnakeCaseUpper(type) }), acc),
  {}
);

export const createReducer = curry((init, reducers, existingState, action) => {
  const state = existingState ? existingState : init;
  const fn = reducers[action.type] || (() => y => y);
  return typeof fn === "function" ? fn(action, state)(state) : identity;
});

export const connect = (component, state = identity) => _connect(state)(component);

export const getParams = pipe(tail, split("&"), map(pipe(split("="), head)));

export const setInteretsFromParams = map(
  x => getParams(window.location.search).includes(x.type) ? assoc("active", true, x) : x
);

export const totalPrice = reduce((acc, { price, quantity }) => add(acc, price * quantity), 0);

export const formatBalance = (budgetInput, cart) =>
  parseInt(clamp(0, 9999999, budgetInput - totalPrice(cart)));

export const isOverBudget = (budgetInput, cart) =>
  pipe(prop("price"), gt(budgetInput - totalPrice(cart)));

export const filterResults = uncurryN(
  2,
  (budgetInput, cart) => pipe(filter(isOverBudget(budgetInput, cart)), sortBy(prop("random")))
);

export const getCartQuery = pipe(map(({ asin }) => `${asin}=${1}`), join("&"), concat("?"));

export const formatPrice = price => `£${(price / 100).toFixed(2)}`;
export const activeInterests = filter(propEq("active", "true"));
export const getBreakpoint = cond([
  [ gt(__, 1550), always(3) ],
  [ allPass([ lt(__, 1550), gt(__, 768) ]), always(2) ],
  [ T, always(1) ]
]);
export const getColumn = pipe(splitEvery, dropLast(1));
export const updateCacheWithRes = pipe(concat, uniq);
export const checkCache = uncurryN(
  2,
  cache => pipe(tail, split("&"), map(pipe(split("="), head)), filter(x => !cache.includes(x)))
);
export const checkCacheToUrl = uncurryN(
  2,
  cache =>
    pipe(
      tail,
      split("&"),
      map(pipe(split("="), head)),
      filter(x => !cache.includes(x)),
      map(concat(__, "=true")),
      join("&"),
      concat("?")
    )
);
export const addItemToCart = uncurryN(
  2,
  item =>
    ifElse(
      pipe(map(propEq("asin", item.asin)), any(equals(true))),
      map(
        when(propEq("asin", item.asin), x => assoc("quantity", !x.quantity ? 1 : x.quantity + 1, x))
      ),
      append(assoc("quantity", 1, item))
    )
);
export const removeItemFromCart = asin =>
  pipe(
    map(
      when(
        propEq("asin", asin),
        ifElse(pipe(prop("quantity"), gt(__, 1)), over(lensProp("quantity"), dec), F)
      )
    ),
    filter(identity)
  );
