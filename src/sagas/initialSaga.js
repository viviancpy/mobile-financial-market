import { put } from 'redux-saga/effects'
import * as newsApi from '../services/newsApi'
import * as Types from '../constants/ActionTypes'

const initialSaga = function * initialSaga() {
   yield put({type: Types.NEWS_FETCH_START, newsAgent: 'bloomberg'})
}

export default initialSaga;
