import { set, lensProp, over, adjust, reject, propEq, assoc, append, merge, __ } from "ramda";
import { createReducer, setInteretsFromParams, formatBalance } from "utils";
import Const from "utils/constants";

// _set :: (String, a) -> State -> State
const _set = ({ item, value }, state) => set(lensProp(item), value);

// _toggle :: (Number) -> State -> State222
const _toggle = ({ index }, state) =>
  over(lensProp("interests"), adjust(x => assoc("active", !x.active, x), index));

// _append :: (Object) -> State -> State
const _append = ({ item }, state) => over(lensProp("cart"), append(item));

// _remove :: (Number) -> State -> State
const _remove = ({ productId }, state) =>
  over(lensProp("cart"), reject(propEq("productId", productId)));

// _remove :: (Number) -> State -> State
const _merge = ({ item, value }, state) => over(lensProp(item), merge(__, value));

const init = {
  status: {
    loading: false
  },
  dimensions: {},
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
  TOGGLE_INTEREST: _toggle,
  AVAILABLE_PRODUCTS: _set,
  SET_DIMENSIONS: _set,
  SET_INPUT: _set,
  SET_SLIDER: _set,
  SET_BUDGET: _set,
  SET_TOTAL: _set,
  SET_CURRENT: _set,
  SET_CACHE: _set,
  SET_CART: _set,
  SET_RESULTS: _merge,
  SET_STATUS: _merge,
  SElECT_SLIDER: _set,
  SELECT_ITEM: _append,
  REMOVE_ITEM: _remove,
  REMOVE_CURRENT: _set
});
