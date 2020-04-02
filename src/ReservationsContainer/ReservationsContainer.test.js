import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReservationsContainer from "./ReservationsContainer";
import "@testing-library/jest-dom";

describe('Form', () => {
  it('should display what we expect', () => {
    const { getByTestId } = render(<ReservationsContainer reservations={[]}/>)

    const containerEl = getByTestId('container')

    expect(containerEl).toBeInTheDocument()
  })
})