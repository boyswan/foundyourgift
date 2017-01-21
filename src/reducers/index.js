import { createReducer } from 'utils/helpers';
import Const from 'utils/constants'

// setInput :: (String, a) -> State -> State
const setInput = ({ input, value }, state) =>
  set(lensProp(input), value)


// toggleInterest :: (Number) -> State -> State
const toggleInterest = ({ index }, state) =>
  over(lensProp('interests'), adjust(x => assoc('active', !x.active, x), index))


export default createReducer({
  interests: Const.interests,
  searchInput: '',
  budgetInput: 0
}, {
  TOGGLE_INTEREST: toggleInterest,
  SET_INPUT: setInput,
  SET_SLIDER: setInput

})
