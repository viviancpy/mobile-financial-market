import React from 'react';
import { StyleSheet, View } from 'react-native';
import QuoteSearchContainer from './containers/QuoteSearchContainer';

export default class AndroidApp extends React.Component {
  render() {
    return (
      <View>
        <QuoteSearchContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
