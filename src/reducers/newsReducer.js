import { NEWS_FETCH_START, NEWS_FETCH_FINISH, NEWS_FETCH_ERROR } from '../constants/ActionTypes'

const initialState = {
    newsAgent: null,
    isNewsFetchStart: false,
    isNewsFetchFinish: false,
    isNewsFetchError: false,
    newsArticles: null
  }

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_FETCH_START:
      return {
        newsAgent: action.newsAgent,
        isNewsFetchStart: true,
        isNewsFetchFinish: false,
        isNewsFetchError: false,
        newsArticles: null
      }
    case NEWS_FETCH_FINISH:
      return {
        ...state,
        isNewsFetchStart: false,
        isNewsFetchFinish: true,
        isNewsFetchError: false,
        newsArticles: action.newsArticles
      }
    case NEWS_FETCH_ERROR:
      return {
        ...state,
        isNewsFetchStart: false,
        isNewsFetchFinish: true,
        isNewsFetchError: false,
        newsArticles: action.errorMessage
      }
    default:
      return state
  }
}
