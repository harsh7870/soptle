import React, { createContext, useEffect, useState } from "react";
import CustomerRegistration from "./components/CustomerRegistration";
import FlightBooking from "./components/FlightBooking";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";

export const UserContext = createContext();

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(data);
  }, []);

  const handleUserInfo = (value) => {
    setUserInfo(value);
  };

  const handleLogout = () => {
    localStorage.clear("userInfo");
    setUserInfo(null);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: userInfo ? <FlightBooking /> : <CustomerRegistration />,
    },
    {
      path: "/admin",
      element: <AdminDashboard />,
    },
  ]);

  return (
    <UserContext.Provider value={{ handleUserInfo, userInfo, handleLogout }}>
      <div>
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
};

export default App;
