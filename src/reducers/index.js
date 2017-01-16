import { createReducer } from 'utils/helpers';



const toggleSummary = (action, state) => console.log(state) ||
  complement(prop(action.type))

const setInput = (action, state) => console.log('action', action) ||
  set(lensProp(action.type), action.value)

export default createReducer({
  toggleSummary: false,
  searchInput: '',
  budgetInput: 0,
  relationInput: '',
  interestsInput: []
}, {
  TOGGLE_SUMMARY: toggleSummary,
  SET_INPUT: setInput,
  SET_SLIDER: setInput,
  SET_RELATION: setInput,
  SET_INTERESTS: setInput

})
