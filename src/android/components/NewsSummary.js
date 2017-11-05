import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image} from 'react-native'
import { Button, Icon, Grid } from 'antd-mobile'

export default class NewsSummary extends Component {
  render(){
    const {navigateTo} = this.props;
    const buttonData = [
        {
          icon: require('./images/stockIcon.png'),
          text: 'Stock',
          navDest: 'Stock'
        }, {
          icon: require('./images/currencyIcon.png'),
          text: 'FX',
          navDest: 'FX'
        }, {
          icon: require('./images/commodityIcon.png'),
          text: 'Commodity',
          navDest: 'Commodity'
        }, {
          icon: require('./images/cryptoIcon.png'),
          text: 'Crypto',
          navDest: 'CryptoCurrency'
        }, {
          icon: require('./images/newsIcon.png'),
          text: 'News',
          navDest: 'News'
        }, {
          icon: require('./images/calendarIcon.png'),
          text: 'Calendar',
          navDest: 'Calendar'
        }
    ];
    return (
      <View style={styles.layout}>
        <View style={styles.news}>
          <Text>This is MainLayout New sdfa</Text>
        </View>
        <View style={styles.buttons}>
          <Grid data={buttonData}
            columnNum={3}
            onClick={dataItem => navigateTo({routeName: dataItem.navDest})}
            renderItem={dataItem => (
                <View style={styles.button}>
                    <Image source={dataItem.icon}  style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>{dataItem.text}</Text>
                </View>
              )}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'stretch'
  },
  news: {
    flex: 3,
    justifyContent:'flex-start',
    backgroundColor: '#5e6b7f'
  },
  buttons: {
    flex: 2,
    padding: 10,
    justifyContent:'center',
    backgroundColor: '#5e6b7f',
  },
  button: {
    justifyContent:'center',
    alignItems: 'center',
    padding: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  buttonIcon: {
    width: 50,
    height: 50
  }
});
