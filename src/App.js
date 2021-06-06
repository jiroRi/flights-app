import React from "react";
import styled from "styled-components";

import { FlightBoard } from "./components";

const App = () => {
  const flights = [
    {
      destination: "OSAKA",
      departure: "04:30",
      flightNumber: "PAL322",
    },
    {
      destination: "MANILA",
      departure: "12:00",
      flightNumber: "CEB712",
    },
    {
      destination: "TORONTO",
      departure: "08:15",
      flightNumber: "ETH099",
    },
    {
      destination: "HAMBURG",
      departure: "01:15",
      flightNumber: "ETH025",
    },
  ];

  return (
    <Page>
      <Container>
        <h1>DEPARTURES</h1>
        <input type="text" placeholder="search" />
        <button>Q</button>
        <FlightBoard flights={flights} />
      </Container>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #333742;

  * {
    box-sizing: border-box;
  }

  h1 {
    padding: 0;
    margin: 0;

    color: #e0cb5f;
    font-family: "Inter UI", sans-serif;
    font-size: 2rem;
    text-align: center;
    letter-spacing: 0.25rem;
  }
`;

const Container = styled.div`
  display: block;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 768px;

  color: white;
  background-color: #333742;
  box-shadow: -4px 4px 8px rgba(39, 42, 50, 0.2),
    4px -4px 8px rgba(39, 42, 50, 0.2), -4px -4px 8px rgba(63, 68, 82, 0.9),
    4px 4px 10px rgba(39, 42, 50, 0.9), inset 1px 1px 2px rgba(63, 68, 82, 0.3),
    inset -1px -1px 2px rgba(39, 42, 50, 0.5);
`;

export default App;
