import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import Layout from "./Layout";

const CustomerRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleUserInfo } = useContext(UserContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    handleUserInfo({ name, email, password });
    localStorage.setItem("userInfo", JSON.stringify({ name, email, password }));
  };

  return (
    <Layout>
      <div className="card">
        <section id="customer-registration">
          <h2>Customer Registration</h2>
          <form onSubmit={handleRegistration}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Register</button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default CustomerRegistration;
