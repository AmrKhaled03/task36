// Register.js
import React, { useState } from "react";
import "../App.css";
function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleRegister = () => {
    // Check if any of the fields are empty
    if (!email || !username || !password) {
      alert("Please enter all fields.");
      return;
    }
    const user = {
        email,
        username,
password,
        // Add other user properties here
      };
  
    // Check if the email is already registered
    if (localStorage.getItem(email)) {
        setError("Email already exists.");
        return;
      }

    // Save user data to localStorage as JSON
    localStorage.setItem(email, JSON.stringify(user));

    // Call the onRegister callback to handle login

    setEmail("");
    setUsername("");
    setPassword("");

    // Optionally, you can display a success message or navigate to a different page
    alert("Registration successful!");

  };

  return (
    <div className="home" id="home">
       <div className="container mt-5 pt-5">
    <div className="row justify-content-center">
      <div className="col-md-12 col-lg-12 mt-5">
        <h2>Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  </div> 
    </div>
  
  );
}

export default Register;