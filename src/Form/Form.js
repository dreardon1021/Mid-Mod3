import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor({addReservation}) {
    super({addReservation});
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  updateFormState = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitForm = (event) => {
    event.preventDefault()
    let newReservation = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: parseInt(this.state.number)
    }
    console.log(newReservation)
    this.props.addReservation(newReservation)
  }

  render() {
    return(
      <form data-testid="form">
        <input onChange={this.updateFormState} name="name" type="text" placeholder="Name"></input>
        <input onChange={this.updateFormState} name="date" type="date" placeholder="Date"></input>
        <input onChange={this.updateFormState} name="time"type="text" placeholder="Time"></input>
        <input onChange={this.updateFormState} name="number" type="number" placeholder="Number Of Guests"></input>
        <button onClick={this.submitForm} className="rez-btn">Make Reservation</button>
      </form>
    )
  }
}

export default Form