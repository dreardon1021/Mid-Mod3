import React from 'react';
import './ReservationCard.css'

const ReservationCard = ({ date, id, key, name, number, time, deleteReservation }) => {
  return(
    <article data-testid="card" className="reservation-card" id={id} key={key}>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => deleteReservation(id)}>Cancel</button>
    </article>
  )
}

export default ReservationCard