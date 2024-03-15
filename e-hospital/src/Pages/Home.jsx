// Home.js
import React from "react";
import "../App.css";

const Home = ({ username }) => {
  return (
    <div
      className="home d-flex justify-content-center text-center align-items-center"
      id="home"
    >
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-12">
            {username === null ? (
              <>
                <h1 className="w-100" id="welcome">
                  Welcome to{" "}
                  <strong style={{ color: "#395886" }}> E-HOSPITAL</strong>{" "}
                  Dashboard
                </h1>
              </>
            ) : (
              <>
                <h1 className="w-100" id="welcome">
                  Welcome{" "}
                  <strong style={{ color: "#395886" }}> {username}</strong>{" "}
                  Dashboard
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
