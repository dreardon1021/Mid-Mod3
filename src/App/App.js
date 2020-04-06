import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import Form from '../Form/Form'
import { getReservations } from '../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      sortType: ''
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({reservations: reservations}))
      .catch(error => console.error(error.message))
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

  setSortState = (event) => {
    this.setState({sortType: event.target.value})
    setTimeout(() => {
      this.sortReservations()
    }, 2000)
  }

  sortReservations = () => {
    if(this.state.sortType === 'Early-Late') {
      let sortedReservations = this.state.reservations.sort(( reservationB, reservationA) => {
        return reservationB.date- reservationA.date
      })
      this.setState({reservations: sortedReservations})
    }
    if (this.state.sortType === 'Late-Early') {
      let sortedReservations = this.state.reservations.sort((reservationA, reservationB) => {
        return reservationA.date - reservationB.date
      })
      this.setState({reservations: sortedReservations})
  }
}

  render() {
    return (
      <main>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <select name="sort" onChange={event => this.setSortState(event)}>
          <option value=''>--Sort--</option>
          <option value='Early-Late'>Date: Earliest to Latest</option>
          <option value='Late-Early'>Date: Latest to Earliest</option>
        </select>
        <ReservationsContainer reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
      </main>
    )
  }
}

export default App;
