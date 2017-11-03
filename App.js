import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppWithNavigationState from './src/navigators/AppNavigator'
import rootReducer from './src/reducers'
import quoteSearchSaga from './src/sagas/quoteSearchSaga';
import createSagaMiddleware from 'redux-saga'
import { AppRegistry, Text } from 'react-native';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(quoteSearchSaga);

export default class App extends React.Component {
  render() {
    return (
       <Provider store={store}>
         <AppWithNavigationState />
       </Provider>
    );
  }
}
//
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Button } from 'antd-mobile';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//           <Button>antd-mobiffle button</Button>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
