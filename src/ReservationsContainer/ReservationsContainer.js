import React from 'react';
import './ReservationsContainer.css'

const ReservationsContainer = ({ reservations }) => {
  return(
    <section className="container">
      {reservations.map(reservation => {
        return <article className="reservation-card" id={reservation.id}>
          date={reservation.date}
          id={reservation.id}
          key={reservation.id}
          name={reservation.name}
          number={reservation.number}
          time={reservation.time}
        </article>
      })}
    </section>
  )
}

export default ReservationsContainer