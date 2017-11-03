import { NavigationActions } from 'react-navigation';
import { NAV_MAIN_SCREEN, NAV_CCCY_SCREEN, NAV_FX_SCREEN, NAV_EQUITIES_SCREEN } from '../constants/ActionTypes'
import { AppNavigator } from '../navigators/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));

export default function navigationReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
