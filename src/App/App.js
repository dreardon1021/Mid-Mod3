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
  }



  render() {
    return (
      <main>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <ReservationsContainer reservations={this.state.reservations}/>
      </main>
    )
  }
}

export default App;
