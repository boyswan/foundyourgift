import { createReducer } from 'utils/helpers';


const toggleSummary = (action, state) => pipe(
  x => !!state.toggleSummary
)

const formInput = (action, state) =>
  set(action.value, prop(action.type))

export default createReducer({
  toggleSummary: false,
  searchInput: ''
}, {
  TOGGLE_SUMMARY: toggleSummary,
  FORM_INPUT: formInput
})
