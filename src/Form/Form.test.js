import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";
import "@testing-library/jest-dom";

describe('Form', () => {
  it('should display what we expect', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<Form />)

    const formEl = getByTestId('form')
    const nameInputEl = getByPlaceholderText("Name")
    const dateInputEl = getByPlaceholderText("Date")
    const timeInputEl = getByPlaceholderText("Time")
    const numberInputEl = getByPlaceholderText("Number Of Guests")
    const rezBtnEL = getByText("Make Reservation")

    expect(formEl).toBeInTheDocument()
    expect(nameInputEl).toBeInTheDocument()
    expect(dateInputEl).toBeInTheDocument()
    expect(timeInputEl).toBeInTheDocument()
    expect(numberInputEl).toBeInTheDocument()
    expect(rezBtnEL).toBeInTheDocument()
  })

  it('should be able to add a new reservation', () => {
    const mockAddReservation = jest.fn()

    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Form
        addReservation={mockAddReservation}
      />)

    fireEvent.change(getByPlaceholderText("Name"), { target: {value: 'Dan'} })  
    fireEvent.change(getByPlaceholderText("Date"), { target: {value: '04/22'} })
    fireEvent.change(getByPlaceholderText("Time"), { target: {value: '6:00'} })
    fireEvent.change(getByPlaceholderText("Number Of Guests"), { target: {value: '2'} })

    fireEvent.click(getByText(""))
  })
})