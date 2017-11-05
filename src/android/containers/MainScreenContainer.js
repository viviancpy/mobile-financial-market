import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'
import MainLayout from '../components/MainLayout'

export class MainScreenContainer extends Component {
  render(){
    return (
      <MainLayout navigateTo={this.props.navigateTo} newsArticles={this.props.newsArticles} />
    )
  }
}

const mapStateToProps = state => ({
  newsArticles: state.newsReducer.newsArticles
})

// use dispatch directly
const mapDispatchToProps = dispatch => ({
  navigateTo: (navObject) => {dispatch(NavigationActions.navigate(navObject))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreenContainer)
