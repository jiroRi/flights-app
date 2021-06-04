import React from "react";
import styled from "styled-components";

export const Flight = ({ flightNumber, departure, destination }) => (
  <FlightDetails>
    <span>{flightNumber}</span>
    <span>{destination}</span>
    <span>
      <strong>{departure}</strong>
    </span>
  </FlightDetails>
);

const FlightDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  width: 100%;
  padding: 0.375rem 0;

  & > :nth-child(3),
  & > :nth-child(1) {
    text-align: center;
  }
`;
