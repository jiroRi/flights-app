import React from "react";
import styled from "styled-components";

import { Flight } from "./";

export const FlightBoard = ({ flights }) => {
  return (
    <Container>
      <Title>
        <span>
          <strong>Flight Number</strong>
        </span>
        <span>
          <strong>Destination</strong>
        </span>
        <span>
          <strong>Departure</strong>
        </span>
      </Title>
      <Flights>
        {flights.map((flight, i) => (
          <Flight
            key={i}
            destination={flight.destination}
            departure={flight.departure}
            flightNumber={flight.flightNumber}
          />
        ))}
      </Flights>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 24px;

  box-shadow: 1px 1px 2px rgba(63, 68, 82, 0.3),
    -1px -1px 2px rgba(39, 42, 50, 0.5),
    inset -4px 4px 8px rgba(39, 42, 50, 0.2),
    inset 4px -4px 8px rgba(39, 42, 50, 0.2),
    inset -4px -4px 8px rgba(63, 68, 82, 0.9),
    inset 4px 4px 10px rgba(39, 42, 50, 0.9);
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 4px;

  text-transform: uppercase;
  color: #eaeaea;

  box-shadow: -4px 4px 8px rgba(39, 42, 50, 0.2),
    4px -4px 8px rgba(39, 42, 50, 0.2), -4px -4px 8px rgba(63, 68, 82, 0.9),
    4px 4px 10px rgba(39, 42, 50, 0.9), inset 1px 1px 2px rgba(63, 68, 82, 0.3),
    inset -1px -1px 2px rgba(39, 42, 50, 0.5);

  & > :nth-child(3),
  & > :nth-child(1) {
    text-align: center;
  }
`;

const Flights = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  color: #dadada;

  box-shadow: -4px 4px 8px rgba(39, 42, 50, 0.2),
    4px -4px 8px rgba(39, 42, 50, 0.2), -4px -4px 8px rgba(63, 68, 82, 0.9),
    4px 4px 10px rgba(39, 42, 50, 0.9), inset 1px 1px 2px rgba(63, 68, 82, 0.3),
    inset -1px -1px 2px rgba(39, 42, 50, 0.5);
`;
