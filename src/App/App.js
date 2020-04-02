import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }


  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => this.setState({reservations: reservations}))
  }

  addReservation = (newReservation) => {
    const updatedReservations = this.state.reservations.concat([newReservation])
    this.setState({reservations: updatedReservations})
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReservation)
    })
    .then(resonse => resonse.json())
    .catch(err => console.error(err.message))
  }

  deleteReservation = (id) => {
    let updatedReservations = this.state.reservations.filter(reservation => reservation.id !== id)
    console.log(updatedReservations)
    this.setState({reservations: updatedReservations})
    fetch('http://localhost:3001/api/v1/reservations/' + id, {
      method: 'DELETE',
    })
    .then(resonse => resonse.json())
    .catch(err => console.error(err.message))
  }

  render() {
    return (
      <main>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <ReservationsContainer reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
      </main>
    )
  }
}

export default App;
