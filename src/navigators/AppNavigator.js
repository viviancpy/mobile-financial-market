import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

import MainScreenContainer from '../android/containers/MainScreenContainer';
import StockScreenContainer from '../android/containers/StockScreenContainer';

export const AppNavigator = StackNavigator({
  Main: {
    screen: MainScreenContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Main'
    })
  },
  Stock: {
    screen: StockScreenContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Stock Quote'
    })
  }
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.navigationReducer,
});

export default connect(mapStateToProps)(AppWithNavigationState);
