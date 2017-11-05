import { call, put, take, fork } from 'redux-saga/effects'
import * as Api from '../services/quoteApi'
import * as Types from '../constants/ActionTypes'

const fetchHistoricals = function* fetchCompany(quoteInput) {
   try {
      const companyDetails = yield call(Api.tryGetStockHistoricals, quoteInput);
      yield put({type: Types.QUOTE_SEARCH_FOUND , quoteSearchResult: companyDetails});
   } catch (e) {
      yield put({type: Types.QUOTE_SEARCH_ERROR , errorMessage: e.message});
   }
}

const quoteSearchSaga = function* quoteSearchSaga() {
  while(true){
    const {quoteInput} = yield take(Types.QUOTE_SEARCH_START);
    yield fork(fetchHistoricals, quoteInput, true)
  }
}

export default quoteSearchSaga;
