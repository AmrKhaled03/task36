// src/components/ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import DoctorAPI from "../utils/DoctorAPI";

import "../App.css"
function DoctorDetail() {
  const { id } = useParams();
  const doctor = DoctorAPI.getDoctorById(id);

  if (!doctor) {
    return <div className="container mt-4">doctor not found</div>;
  }

  return (
  <div className="home" id="home">
     <div className="container my-5 p-5"  >
    <h2 className="my-5 text-center">Doctor Details</h2>
    <div className="card">
      <img src={doctor.image} className="card-img-top" alt={doctor.name} />
      <div className="card-body">
        <h5 className="card-title">{doctor.name}</h5>
        <p className="card-text">Description: {doctor.description}</p>
        <p className="card-text">Price: ${doctor.price}</p>
     

      </div>
    </div>
  </div>  
  </div>
 
  );
}

export default DoctorDetail;
