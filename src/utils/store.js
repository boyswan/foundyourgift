import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import sagas from "sagas";
import reducers from "reducers";
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);
