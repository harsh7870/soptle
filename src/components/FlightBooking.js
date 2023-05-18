import React, { useState } from "react";
import Layout from "./Layout";

const FlightBooking = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const dummyFlights = [
      {
        id: 1,
        departure: "City A",
        arrival: "City B",
        seats: 100,
      },
      {
        id: 2,
        departure: "City A",
        arrival: "City C",
        seats: 150,
      },
      {
        id: 3,
        departure: "City B",
        arrival: "City C",
        seats: 80,
      },
    ];

    setFlights(dummyFlights);
  };

  const handleFlightSelection = (flight) => {
    setSelectedFlight(flight);
  };

  const handleBooking = () => {
    if (selectedFlight) {
      setSelectedFlight(null);
      setDeparture("");
      setArrival("");
    }
  };

  return (
    <Layout>
      <div className="card">
        <section id="flight-booking">
          <h2>Flight Search and Booking</h2>
          <form onSubmit={handleSearch}>
            <label htmlFor="departure">Departure:</label>
            <input
              type="text"
              id="departure"
              name="departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
            />

            <label htmlFor="arrival">Arrival:</label>
            <input
              type="text"
              id="arrival"
              name="arrival"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              required
            />

            <button type="submit">Search</button>
          </form>
        </section>
      </div>

      <div className="available_flights">
        {flights.length > 0 && (
          <div>
            <h3>Available Flights</h3>
            <ul>
              {flights.map((flight) => (
                <li key={flight.id}>
                  <span>{flight.departure}</span> to{" "}
                  <span>{flight.arrival}</span> - Empty Seats: {flight.seats}
                  <button onClick={() => handleFlightSelection(flight)}>
                    Select
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedFlight && (
          <div>
            <h3>Selected Flight</h3>
            <p>
              {selectedFlight.departure} to {selectedFlight.arrival} - Empty
              Seats: {selectedFlight.seats}
            </p>
            <button onClick={handleBooking}>Book Now</button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FlightBooking;
