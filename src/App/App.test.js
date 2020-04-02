import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe('App', () => {
  it('should be able to add a reservation', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<App />)

    fireEvent.change(getByPlaceholderText("Name"), { target: {value: 'Dan'} })
    fireEvent.change(getByPlaceholderText("Date"), { target: {value: '2020-04-22'} })
    fireEvent.change(getByPlaceholderText("Time"), { target: {value: '6:00'} })
    fireEvent.change(getByPlaceholderText("Number Of Guests"), { target: {value: '2'} })

    fireEvent.click(getByText("Make Reservation"))

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
