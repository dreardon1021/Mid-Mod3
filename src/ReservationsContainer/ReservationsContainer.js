import React from 'react';
import './ReservationsContainer.css'
import '../ReservationCard/ReservationCard'
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationsContainer = ({ reservations, deleteReservation }) => {
  return(
    <section data-testid="container" className="container">
      {reservations.map(reservation => {
        return <ReservationCard
          date={reservation.date}
          id={reservation.id}
          key={reservation.id}
          name={reservation.name}
          number={reservation.number}
          time={reservation.time}
          deleteReservation={deleteReservation}
        />
      })}
    </section>
  )
}

export default ReservationsContainer