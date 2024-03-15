// src/components/ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import PatientAPI from "../utils/PatientAPI";
import "../App.css"
function PatientDetail() {
  const { id } = useParams();
  const patient = PatientAPI.getPatientById(id);

  if (!patient) {
    return <div className="container mt-4">patient not found</div>;
  }

  return (
  <div className="home" id="home">
     <div className="container my-5 p-5"  >
    <h2 className="my-5 text-center">Patient Details</h2>
    <div className="card">
      <img src={patient.image} className="card-img-top" alt={patient.name} />
      <div className="card-body">
        <h5 className="card-title">{patient.name}</h5>
        <p className="card-text">Description: {patient.description}</p>
        <p className="card-text">Price: ${patient.price}</p>
     

      </div>
    </div>
  </div>  
  </div>
 
  );
}

export default PatientDetail;
