// src/components/DeleteProduct.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PatientAPI from "../utils/PatientAPI";
import "../App.css"
function DeletePatient() {
  const { id } = useParams();

  useEffect(() => {
    // Fetch the product data based on the ID from local storage or your API
    const productData = PatientAPI.getPatientById(id);

    if (productData) {
      // Delete the product from local storage or your API
      PatientAPI.deletePatient(id);
      // window.location.href="/products";

      // You can display a success message or perform other actions here
      console.log(`Patient with ID ${id} has been deleted.`);
    } else {
      // Handle the case where the product is not found
      console.log(`Patient with ID ${id} not found.`);
    }
  }, [id]);

  return (
    <div className="home" id="home">
      <div className="container mt-5 p-5">
      <h2>Delete Patient</h2>
      <p>Deleting the patient with id : {id}...</p>
    </div>  
    </div>
  
  );
}

export default DeletePatient;
