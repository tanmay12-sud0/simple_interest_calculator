import React, { useEffect } from 'react'
import './App.css';
import db from './firebase'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,  Form, Jumbotron} from 'react-bootstrap'
import { useState } from 'react';
import History from './History'
function App() {
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [amount, setAmount] = useState()
  const [rate, setRate] = useState(2)
  const [result, setResult] = useState(null)
  const [days, setDays] = useState(null)
  const [Todos , setTodos] = useState([]); 


  useEffect(() => {
    db.collection('data').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>( doc.data())))
    })
    
  }, [])

  console.log(Todos)
  
  const Calcu = (event) => {
    event.preventDefault()
    var date1 = new Date(start); 
    var date2 = new Date(end); 
      
    // To calculate the time difference of two dates 
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
      
    // To calculate the no. of days between two dates 
    var Days = Difference_In_Time / (1000 * 3600 * 24); 
    setDays(Days)

    var result = ((amount*Days*2)/3000)
    setResult(result)
    
    db.collection('data').add({
      
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      result: result,
      amount: amount,
      starting_date : start,
      Ending_date: end,
      rate: rate,
      Days: days 
    })
    


  }

  const reset = (event) => {
    event.preventDefault()
    setStart("")
    setEnd("")
    setAmount()
    setRate()

  }



  return (
    <div className="ml-auto app">
        <div style={{alignItems: "center", justifyContent: "center", display: "flex", fontFamily:"cursive", color:"red"}}>
        <h1>Welcome in calculator</h1>
        <p>Created by Tanmay</p>
        </div>
        <div>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Starting Date</Form.Label>
    <Form.Control value={start} onChange={e => setStart(e.target.value)} type="date" placeholder="Enter Date here" />
    <Form.Label>Ending Date</Form.Label>
    <Form.Control value={end} onChange={e => setEnd(e.target.value)} type="date" placeholder="Enter Date here" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>amount</Form.Label>
    <Form.Control value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Enter amount here" />
    <Form.Label>interest rate</Form.Label>
    <Form.Control value={rate} onChange={e => setRate(e.target.value)} type="number" placeholder="enter rate here" />
  </Form.Group>
  
  <Button onClick={Calcu} style={{marginRight:"60px"}} variant="primary" type="submit">
    Calculate
  </Button>
  <Button onClick={reset} variant="primary" type="reset">
    reset
  </Button>
  <br />
  <br />
 
</Form>
        </div>
        <br />
        <br />
        <div>

        <Jumbotron>
        <h1>Result ---   {result}</h1>
      <h6>Amount --- {amount}</h6>
      <h6>Interest rate --- {rate}</h6>
      <h6>Starting Date (MM/DD/YYYY)  ---   {start}</h6>
      <h6>Ending Date (MM/DD/YYYY)  ---  {end}</h6>
      <h6>Number of Days --- {days}</h6>
</Jumbotron>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
        <h1>History</h1>
        <form>
      <ul>
       {Todos.map(todos => (
         
         <History result={todos.result} start={todos.starting_date} end={todos.Ending_date} amount={todos.amount} rate={todos.rate} />
       ))}
      </ul>
</form>
        </div>
    </div>
  );
}

export default App;
