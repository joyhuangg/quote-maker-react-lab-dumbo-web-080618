import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    id: uuid(),
    author: "",
    content: ""
  }

  handleOnChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleOnSubmit = event => {

    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state

    let quoteObj = {...this.state}
    quoteObj.votes = 0
    // Pass quote object to action creator
    this.props.addQuote(quoteObj)
    // Update component state to return to default state
    this.setState({ author: "", content: ""})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea onChange={this.handleOnChange}
                        className="form-control"
                        name="content"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addQuote: (state) => {dispatch(addQuote(state))}
//   }
// }

//add arguments to connect as needed
// export default connect(null, mapDispatchToProps)(QuoteForm);
export default connect(null, {addQuote})(QuoteForm);
