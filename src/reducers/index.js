import { set, lensProp, over, adjust, reject, propEq, assoc, append } from 'ramda'
import { createReducer, setInteretsFromParams } from 'utils';
import Const from 'utils/constants'


// _set :: (String, a) -> State -> State
const _set = ({ item, value }, state) =>
  set(lensProp(item), value)


// _toggle :: (Number) -> State -> State
const _toggle = ({ index }, state) =>
  over(lensProp('interests'), adjust(x => assoc('active', !x.active, x), index))


// _append :: (Object) -> State -> State
const _append = ({ item }, state) =>
  over(lensProp('cart'), append(item))


// _remove :: (Number) -> State -> State
const _remove = ({ id }, state) =>
  over(lensProp('cart'), reject(propEq('id', id)))


  // var cart = {
  //   'Item.1.ASIN': itemId,
  //   'Item.1.Quantity': quantity
  // }

const init = {
  interests: setInteretsFromParams(Const.interests),
  cart: [],
  searchResults: [],
  searchInput: '',
  filterInput: 0,
  budgetInput: 125
}

export default createReducer(init, {
  TOGGLE_INTEREST: _toggle,
  SET_INPUT: _set,
  SET_SLIDER: _set,
  SET_RESULTS: _set,
  SELECT_ITEM: _append,
  REMOVE_ITEM: _remove
})
