import { fork, all, spawn } from 'redux-saga/effects'
import quoteSearchSaga from './quoteSearchSaga'
import initialSaga from './initialSaga'
import fetchNewsSaga from './fetchNewsSaga'

const rootSaga = function * rootSaga () {
  yield all([
    fork(quoteSearchSaga),
    fork(fetchNewsSaga)
  ]);

  yield spawn(initialSaga);
}

export default rootSaga;
