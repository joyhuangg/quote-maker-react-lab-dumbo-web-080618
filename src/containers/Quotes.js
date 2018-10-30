import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    let quotes;
    this.props.quotes.length > 0 ? quotes = this.props.quotes.map((quote) => <QuoteCard quote={quote} key={quote.id} removeQuote={this.props.removeQuote} downvoteQuote={this.props.downvoteQuote} upvoteQuote={this.props.upvoteQuote}/>) : quotes = null
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    upvoteQuote: (id) => dispatch({type: "UPVOTE_QUOTE", quoteId: id}),
    removeQuote: (id) => dispatch({type: "REMOVE_QUOTE", quoteId: id}),
    downvoteQuote: (id) => dispatch({type: "DOWNVOTE_QUOTE", quoteId: id})
  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
