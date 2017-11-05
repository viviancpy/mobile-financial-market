import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Image } from 'react-native';
import * as QuoteSearchActions from '../../actions/quoteSearchActions'
import PropTypes from 'prop-types'
import QuoteSearch from '../components/QuoteSearch'

export class StockScreenContainer extends Component {
  render(){
    const {quoteActions, quoteSearch} = this.props;
    return (
      <View>
        <QuoteSearch onSubmitQuoteSearch={quoteActions.searchQuote} quoteSearch={quoteSearch} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});


StockScreenContainer.propTypes = {
  quoteSearch: PropTypes.object.isRequired,
  quoteActions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    quoteSearch: state.quoteSearchReducer
})

const mapDispatchToProps = dispatch => ({
    quoteActions: bindActionCreators(QuoteSearchActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockScreenContainer)
