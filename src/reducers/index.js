import createReducer from 'utils/createReducer';
import { formatToRead } from 'utils';
import { questions } from 'utils/data';

const answerLens = lensPath(['answers'])
const currentLens = lensPath(['current'])
const nextQuestion = over(currentLens, inc)
const saveAnswer = answer => over(answerLens, append(answer))

const prevQuestion = (action, state) => pipe(
  over(answerLens, dropLast(1)),
  over(currentLens, dec)
)

const selectItem = (action, state) => pipe(
  saveAnswer(action),
  nextQuestion
)

const selectToggle = (action, state) =>
  merge({ answers: state.answers.push(action)})

const sendQuestion = (action, state) =>
  map(val => merge(val, { question: state.questions[val.question].title }), state.answers)

export default createReducer({
  current: 0,
  answers: [],
  questions
}, {
  SELECT_ITEM: selectItem,
  SELECT_TOGGLE: selectToggle,
  NEXT_QUESTION: nextQuestion,
  PREV_QUESTION: prevQuestion,
  SEND_QUESTION: sendQuestion
})
