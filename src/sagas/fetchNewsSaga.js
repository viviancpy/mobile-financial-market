import { call, put, take, fork } from 'redux-saga/effects'
import * as Api from '../services/newsApi'
import * as Types from '../constants/ActionTypes'

const fetchNews = function* fetchNews(newsAgent) {
   try {
      const newsArticles = yield call(Api.tryGetArticlesFromSource, newsAgent);
      yield put({type: Types.NEWS_FETCH_FINISH , newsArticles: newsArticles});
   } catch (e) {
      yield put({type: Types.NEWS_FETCH_ERROR , errorMessage: e.message});
   }
}

const fetchNewsSaga = function* fetchNewsSaga() {
  while(true) {
    const {newsAgent} = yield take(Types.NEWS_FETCH_START);
    yield fork(fetchNews, newsAgent, true);
  }
}

export default fetchNewsSaga;
