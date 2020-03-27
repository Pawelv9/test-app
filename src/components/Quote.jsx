import React from 'react'
import { connect } from 'react-redux'

const Quote = ({ quote }) => {
 
    return (
      quote 
      ? 
      <tr >
        <td>{quote.digits}</td>
        <td>{quote.ask}</td>
        <td>{quote.bid}</td>
        <td>{quote.change}</td>
        <td>{quote.symbol}</td>
      </tr>
      : 
    <></>
    )
  }

const mapStateToProps = (state) => ({
  quote: state.quotes.data
})

export default connect(mapStateToProps)(Quote)