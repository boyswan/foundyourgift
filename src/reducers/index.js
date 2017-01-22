import { set, lensProp, over, adjust, assoc, append } from 'ramda';
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


const init = {
  interests: setInteretsFromParams(Const.interests),
  cart: [],
  searchResults: [],
  searchInput: '',
  budgetInput: 50
}

export default createReducer(init, {
  TOGGLE_INTEREST: _toggle,
  SET_INPUT: _set,
  SET_SLIDER: _set,
  SET_RESULTS: _set,
  SELECT_ITEM: _append
})
