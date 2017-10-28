import { fork } from 'redux-saga/effects'
import quoteSearchSaga from './quoteSearchSaga'

const rootSaga = function * rootSaga () {
  yield all([
    fork(quoteSearchSaga)
  ]);
}

export default rootSaga;
