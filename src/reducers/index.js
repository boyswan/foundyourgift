import { set, lensProp, over, evolve, adjust, assoc, merge, not, __, curry } from "ramda";
import { createReducer, setInteretsFromParams, addItemToCart, removeItemFromCart } from "../utils";
import Const from "../utils/constants";

const isClient = typeof window !== "undefined";

const _set = curry((lens, { value }) => set(lens, value));
const _overFn = curry((lens, fn, { value }) => over(lens, fn(value)));
const _merge = curry((lens, { value }) => over(lens, merge(__, value)));
const _toggleArray = curry(
  (lens, { index }) => over(lens, adjust(x => assoc("active", not(x.active), x), index))
);
const _toggle = curry((lens, _) => over(lens, not));

const init = {
  status: { loading: false, budgetLoad: false },
  breakpoint: 3,
  filter: false,
  summary: false,
  dimensions: { width: isClient && window.innerWidth, height: isClient && window.innerHeight },
  interests: setInteretsFromParams(Const.interests),
  total: 0,
  cart: [],
  cache: [],
  searchResults: {},
  availableProducts: [],
  url: "",
  searchInput: "",
  currentProduct: {},
  filterInput: 0,
  budgetInput: Const.ui.defaultBudget,
  remainingBudget: Const.ui.defaultBudget
};

export default createReducer(init, {
  TOGGLE_INTEREST: _toggleArray(lensProp("interests")),
  TOGGLE_FILTER: _toggle(lensProp("filter")),
  TOGGLE_SUMMARY: _toggle(lensProp("summary")),
  TOGGLE_BUDGET_LOAD: _toggle(lensProp("budgetLoad")),
  AVAILABLE_PRODUCTS: _set(lensProp("availableProducts")),
  SET_BREAKPOINT: _set(lensProp("breakpoint")),
  SET_DIMENSIONS: _set(lensProp("dimensions")),
  SET_INPUT: _set(lensProp("input")),
  SET_SLIDER: _set(lensProp("budgetInput")),
  SET_BUDGET: _set(lensProp("remainingBudget")),
  SET_TOTAL: _set(lensProp("total")),
  SET_CURRENT: _set(lensProp("currentProduct")),
  SET_CACHE: _set(lensProp("cache")),
  SET_CART: _set(lensProp("cart")),
  SET_URL: _set(lensProp("url")),
  SET_RESULTS: _merge(lensProp("searchResults")),
  SET_STATUS: _merge(lensProp("status")),
  ADD_ITEM: _overFn(lensProp("cart"), addItemToCart),
  REMOVE_ITEM: _overFn(lensProp("cart"), removeItemFromCart),
  REMOVE_CURRENT: _set(lensProp("currentProduct"))
});
