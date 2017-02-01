import { set, lensProp, over, adjust, reject, propEq, assoc, append } from 'ramda';
import { createReducer, setInteretsFromParams, formatBalance } from 'utils';
import Const from 'utils/constants';

// _set :: (String, a) -> State -> State
const _set = ({ item, value }, state) => set(lensProp(item), value);

// _toggle :: (Number) -> State -> State
const _toggle = ({ index }, state) =>
  over(lensProp('interests'), adjust(x => assoc('active', !x.active, x), index));

// _append :: (Object) -> State -> State
const _append = ({ item }, state) => over(lensProp('cart'), append(item));

// _remove :: (Number) -> State -> State
const _remove = ({ productId }, state) =>
  over(lensProp('cart'), reject(propEq('productId', productId)));

// var cart = {
//   'Item.1.ASIN': itemId,
//   'Item.1.Quantity': quantity
// }
const init = {
  interests: setInteretsFromParams(Const.interests),
  total: 0,
  cart: [],
  searchResults: [],
  availableProducts: [],
  searchInput: '',
  filterInput: 0,
  budgetInput: 125,
  remainingBudget: 125
};

export default createReducer(init, {
  TOGGLE_INTEREST: _toggle,
  SET_INPUT: _set,
  SET_SLIDER: _set,
  SET_BUDGET: _set,
  AVAILABLE_PRODUCTS: _set,
  SET_TOTAL: _set,
  SET_RESULTS: _set,
  SELECT_ITEM: _append,
  REMOVE_ITEM: _remove
});
