import React from 'react'
import { Jumbotron } from 'react-bootstrap'

function History(props) {
    return (
        <div>
            <Jumbotron>
            
  <h1>Result ====  {props.result}</h1>
  <h5>Amount ==== {props.amount}</h5>
  <h5>Start-date ==== {props.start}</h5>
  <h5>Ending-date ==== {props.end}</h5>
  <h5>Rate ==== {props.rate}</h5>
 
</Jumbotron>
        </div>
    )
}

export default History
