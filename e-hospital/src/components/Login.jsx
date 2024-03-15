import React, { useState, useEffect } from "react";
import "../App.css"
function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const { email, username } = JSON.parse(loggedInUser);
      onLogin(email, username);
    }
  });

  const handleLogin = () => {
    const userData = localStorage.getItem(email);

    if (!userData) {
      setError("User with this email does not exist.");
      return;
    }

    const user = JSON.parse(userData);

    if (password === user.password) {
      onLogin(email, user.username);
      localStorage.setItem("loggedInUser", JSON.stringify({ email, username: user.username }));
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="home" id="home">
      <div className="container mt-5 pt-5">
    <div className="row justify-content-center">
      <div className="col-md-12 col-lg-12 mt-5">
        <h2>Login</h2>
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
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  </div>  
    </div>
  
  
  );
}

export default Login;