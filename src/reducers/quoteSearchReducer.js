import { QUOTE_SEARCH_START, QUOTE_SEARCH_FOUND, QUOTE_SEARCH_ERROR } from '../constants/ActionTypes'

const initialState = {
    quoteInput: null,
    isQuoteSearchStart: false,
    isQuoteSearchFound: false,
    isQuoteSearchError: false,
    quoteSearchResult: null
  }

export default function quoteSearchReducer(state = initialState, action) {
  switch (action.type) {
    case QUOTE_SEARCH_START:
      return {
        quoteInput: action.quoteInput,
        isQuoteSearchStart: true,
        isQuoteSearchFound: false,
        isQuoteSearchError: false,
        quoteSearchResult: null
      }
    case QUOTE_SEARCH_FOUND:
      return {
        ...state,
        isQuoteSearchStart: false,
        isQuoteSearchFound: true,
        isQuoteSearchError: false,
        quoteSearchResult: action.quoteSearchResult
      }
    case QUOTE_SEARCH_ERROR:
      return {
        ...state,
        isQuoteSearchStart: false,
        isQuoteSearchFound: false,
        isQuoteSearchError: true,
        quoteSearchResult: action.errorMessage
      }
    default:
      return state
  }
}
