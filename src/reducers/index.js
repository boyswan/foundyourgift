import { createReducer } from 'utils/helpers';


const toggleSummary = (action, state) => pipe(
  x => !!state.toggleSummary
)

const setInput = (action, state) =>
  set(lensProp(action.type), action.value)

export default createReducer({
  toggleSummary: false,
  searchInput: ''
}, {
  TOGGLE_SUMMARY: toggleSummary,
  SET_INPUT: setInput
})
