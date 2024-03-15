// src/components/NotFound.js
import React from 'react';
import { Link } from "react-router-dom";
import "../App.css"
const NotFound = () => {
  return (
    <div className="home" id="home">
      <div className='m-5 p-5'>
    <div className="container ">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-4">404 - Page Not Found</h1>
          <p className="lead">The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary rounded">Go to Home</Link>
        </div>
      </div>
    </div>

    </div>  
    </div>
  

  );
};

export default NotFound;