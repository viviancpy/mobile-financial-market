import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Grid, InputItem, WhiteSpace, WingBlank, Button, Icon } from 'antd-mobile'
import PropTypes from 'prop-types'
import autoBind from 'auto-bind'

export class QuoteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quoteInput: ''
    };
    autoBind(this);
  }

  handleQuoteSearchChanged(value){
      this.setState({
          quoteInput: value
      });
  }

  handleQuoteSearchSubmit(value){
      this.props.onSubmitQuoteSearch(this.state.quoteInput);
  }

  render(){
    const {onSubmitQuoteSearch, quoteSearch} = this.props;
    const status = quoteSearch.isQuoteSearchStart
                      ? 'loading'
                      : quoteSearch.isQuoteSearchError
                        ? 'Error'
                        : quoteSearch.isQuoteSearchFound
                          ? 'OK'
                          : '';
    return (
      <View>
        <WingBlank>
          <InputItem placeholder="Enter Company Ticker" onChange={this.handleQuoteSearchChanged}></InputItem>
        </WingBlank>

        <Button className="btn" icon="check-circle-o" onClick={this.handleQuoteSearchSubmit}>Search</Button>
        <Text>{status}</Text>

        <Text>
           Data:{JSON.stringify(quoteSearch.quoteSearchResult)}
        </Text>
      </View>
    )
  }
}

QuoteSearch.propTypes = {
  onSubmitQuoteSearch: PropTypes.func.isRequired,
  quoteSearch: PropTypes.object
};

export default QuoteSearch;
