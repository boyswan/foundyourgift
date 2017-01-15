import { createReducer } from 'utils/helpers';


const toggleSummary = (action, state) => pipe(
  x => !!state.toggleSummary
)

export default createReducer({
  toggleSummary: false,
}, {
  TOGGLE_SUMMARY: toggleSummary

})
