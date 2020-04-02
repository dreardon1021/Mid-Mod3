import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReservationCard from "./ReservationCard";
import "@testing-library/jest-dom";

describe('Form', () => {
  it('should display what we expect', () => {
    const { getByText, getByTestId } = render(
      <ReservationCard 
        date='2020-04-22'
        id='2'
        key='3'
        name='Dan'
        number='2'
        time='6:00'
      />
    )

    const cardEl = getByTestId('card')
    const dateEl = getByText('2020-04-22')
    const nameEl = getByText('Dan')
    const numberEl = getByText('Number of guests: 2')
    const timeEl = getByText('6:00 pm')

    expect(cardEl).toBeInTheDocument()
    expect(dateEl).toBeInTheDocument()
    expect(nameEl).toBeInTheDocument()
    expect(numberEl).toBeInTheDocument()
    expect(timeEl).toBeInTheDocument()
  })
})