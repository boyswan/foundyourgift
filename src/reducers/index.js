import { set, lensProp, over, adjust, assoc } from 'ramda';
import { createReducer, setInteretsFromParams } from 'utils/helpers';
import Const from 'utils/constants'


// _set :: (String, a) -> State -> State
const _set = ({ item, value }, state) =>
  set(lensProp(item), value)


// _toggle :: (Number) -> State -> State
const _toggle = ({ index }, state) => 
  over(lensProp('interests'), adjust(x => assoc('active', !x.active, x), index))


export default createReducer({
  interests: setInteretsFromParams(Const.interests),
  searchResults: [],
  searchInput: '',
  budgetInput: 0
}, {
  TOGGLE_INTEREST: _toggle,
  SET_INPUT: _set,
  SET_SLIDER: _set,
  SET_RESULTS: _set

})
