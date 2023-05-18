import React, { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const { userInfo, handleLogout } = useContext(UserContext);

  return (
    <div>
      <header>
        <h1>
          <Link to="/">Airline Booking Web Portal</Link>
        </h1>
        {userInfo && (
          <ul>
            <li>
              <Link to="/">{userInfo.name}</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        )}
      </header>
      {children}
    </div>
  );
};

export default Layout;
