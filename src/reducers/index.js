import { set, lensProp, over, adjust, reject, propEq, assoc, append, merge, __ } from "ramda";
import { createReducer, setInteretsFromParams } from "utils";
import Const from "utils/constants";

// _set :: (String, a) -> State -> State
const _set = lens => ({ value }) => set(lens, value);

// _toggle :: (Number) -> State -> State222
const _toggle = lens =>
  ({ index }) => over(lens, adjust(x => assoc("active", !x.active, x), index));

// _append :: (Object) -> State -> State
const _append = lens => ({ item }) => over(lens, append(item));

// _remove :: (Number) -> State -> State
const _remove = lens => ({ productId }) => over(lens, reject(propEq("productId", productId)));

// _remove :: (Number) -> State -> State
const _merge = lens => ({ value }) => over(lens, merge(__, value));

const init = {
  status: {
    loading: false
  },
  breakpoint: 3,
  dimensions: { width: window.innerWidth, height: window.innerHeight },
  interests: setInteretsFromParams(Const.interests),
  total: 0,
  cart: [],
  cache: [],
  searchResults: {},
  availableProducts: [],
  searchInput: "",
  currentProduct: {},
  filterInput: 0,
  budgetInput: Const.ui.defaultBudget,
  remainingBudget: Const.ui.defaultBudget
};

export default createReducer(init, {
  TOGGLE_INTEREST: _toggle(lensProp("interests")),
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
  SET_RESULTS: _merge(lensProp("searchResults")),
  SET_STATUS: _merge(lensProp("status")),
  ADD_ITEM: _append(lensProp("cart")),
  REMOVE_ITEM: _remove(lensProp("cart")),
  REMOVE_CURRENT: _set(lensProp("input"))
});
