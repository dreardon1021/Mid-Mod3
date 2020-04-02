import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';

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



  render() {
    return (
      <main>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <ReservationsContainer reservations={this.state.reservations}/>
      </main> 
    )
  }
}

export default App;
