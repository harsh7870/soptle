import React, { useState } from "react";
import Layout from "./Layout";

const AdminDashboard = () => {
  const [bookingCount, setBookingCount] = useState(0);
  const [emptySeats, setEmptySeats] = useState(0);
  const [showFlightListing, setShowFlightListing] = useState(false);
  const [flightListing, setFlightListing] = useState([]);

  const handleBookingCountClick = () => {
    setShowFlightListing(true);
    const dummyFlightListing = [
      { flightNumber: "FL001", availableSeats: 10 },
      { flightNumber: "FL002", availableSeats: 20 },
      { flightNumber: "FL003", availableSeats: 15 },
    ];
    setFlightListing(dummyFlightListing);
  };

  const handleEmptySeatsClick = () => {
    setShowFlightListing(true);
    const dummyFlightListing = [
      { flightNumber: "FL001", availableSeats: 10 },
      { flightNumber: "FL002", availableSeats: 20 },
      { flightNumber: "FL003", availableSeats: 15 },
    ];
    setFlightListing(dummyFlightListing);
  };

  return (
    <Layout>
      <section id="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <div>
          <p>Number of bookings today: {bookingCount}</p>
          <button onClick={handleBookingCountClick}>View Flight Listing</button>
        </div>
        <div>
          <p>Empty seats today: {emptySeats}</p>
          <button onClick={handleEmptySeatsClick}>View Flight Listing</button>
        </div>

        {showFlightListing && (
          <div>
            <h3>Flight Listing</h3>
            {flightListing.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Flight Number</th>
                    <th>Available Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {flightListing.map((flight) => (
                    <tr key={flight.flightNumber}>
                      <td>{flight.flightNumber}</td>
                      <td>{flight.availableSeats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No flights available</p>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default AdminDashboard;
