import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { loadQuotes } from '../actions/loadQuotes'
import Quote from './Quote'

class QuotesTable extends Component {

  componentDidMount() {
    this.props.loadQuotes()
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Digits</th>
              <th>Ask</th>
              <th>Bid</th>
              <th>Change</th>
              <th>Symbol</th>
            </tr>
            {this.props.quote 
            ? 
                  <Quote
                      >
                  </Quote>
            :
              <Fragment></Fragment>
            }
          </thead>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  state.quotes.data 
  ? 
  {
    quote: state.quotes.data,
  }
  : {} 
)

const mapDispatchToProps = dispatch => ({
  loadQuotes: () => dispatch(loadQuotes())
})

export default QuotesTable = connect(mapStateToProps, mapDispatchToProps)(QuotesTable)

