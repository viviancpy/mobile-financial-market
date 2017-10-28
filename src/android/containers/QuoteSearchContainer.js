import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as QuoteSearchActions from '../../actions/quoteSearchActions'
import PropTypes from 'prop-types'
import QuoteSearch from '../components/QuoteSearch'

export class QuoteSearchContainer extends Component {
  render(){
    const {actions, quoteSearch} = this.props;
    return (
      <QuoteSearch onSubmitQuoteSearch={actions.searchQuote} quoteSearch={quoteSearch} />
    )
  }
}

QuoteSearchContainer.propTypes = {
  quoteSearch: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    quoteSearch: state.quoteSearchReducer
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(QuoteSearchActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteSearchContainer)
