import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppWithNavigationState from './src/navigators/AppNavigator'
import rootReducer from './src/reducers'
import rootSaga from './src/sagas'
import createSagaMiddleware from 'redux-saga'
import { AppRegistry, Text } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ realtime: true, port: 19001 });

const store = createStore(
  rootReducer,
  composeEnhancers(
      applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  render() {
    return (
       <Provider store={store}>
         <AppWithNavigationState />
       </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

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
