import { createReducer } from 'utils/helpers';


const toggleSummary = (action, state) => pipe(
  x => !!state.toggleSummary
)

const setInput = (action, state) =>
  set(lensProp(action.type), action.value)

export default createReducer({
  toggleSummary: false,
  searchInput: '',
  budgetInput: 0,
  relationInput: ''
}, {
  TOGGLE_SUMMARY: toggleSummary,
  SET_INPUT: setInput,
  SET_SLIDER: setInput,
  SET_RELATION: setInput
})
