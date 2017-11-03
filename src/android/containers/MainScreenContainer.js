import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { Grid, InputItem, WhiteSpace, WingBlank, Button, Icon } from 'antd-mobile'
import { NavigationActions } from 'react-navigation';

export class MainScreenContainer extends Component {
  render(){
    return (
        <View>
          <Text>This is Main Screen</Text>
          <Button onClick={() => this.props.navigateTo({ routeName: 'Stock' })}>Stock</Button>
          <Button className="btn">Foreign Exchange</Button>
          <Button className="btn">Commodity</Button>
          <Button className="btn">Crypto Currency</Button>
        </View>
    )
  }
}

const mapStateToProps = state => ({

})

// use dispatch directly
const mapDispatchToProps = dispatch => ({
  navigateTo: (navObject) => {dispatch(NavigationActions.navigate(navObject))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreenContainer)
