import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image} from 'react-native'
import { Button, Icon, Grid, Card } from 'antd-mobile'

export default class MainLayout extends Component {
  render(){
    const {navigateTo, newsArticles} = this.props;
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
          {
             newsArticles && newsArticles.data && newsArticles.data.status==='ok' && newsArticles.data.articles
             ? newsArticles.data.articles.slice(0, 2).map((a, i) => (
                <Card full key={`newsSummary${i}`}>
                   <Card.Header
                     title={a.title}
                     thumb={a.urlToImage}
                     thumbStyle={{width: 50, height: 50}}
                   />
                 <Card.Body style={{padding: 10}}>
                     <Text>{a.description.length > 200? `${a.description.substring(0, 200)} ...read more` : a.description }</Text>
                   </Card.Body>
                 </Card>
             )): <Text>News Loading...</Text>
          }
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
