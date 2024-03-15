// src/components/DeleteProduct.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DoctorAPI from "../utils/DoctorAPI";
import "../App.css"
function DeleteDoctor() {
  const { id } = useParams();

  useEffect(() => {
    // Fetch the product data based on the ID from local storage or your API
    const productData = DoctorAPI.getDoctorById(id);

    if (productData) {
      // Delete the product from local storage or your API
      DoctorAPI.deleteDoctor(id);
      // window.location.href="/products";

      // You can display a success message or perform other actions here
      console.log(`Doctor with ID ${id} has been deleted.`);
    } else {
      // Handle the case where the product is not found
      console.log(`Doctor with ID ${id} not found.`);
    }
  }, [id]);

  return (
    <div className="home" id="home">
      <div className="container mt-5 p-5">
      <h2>Delete Doctor</h2>
      <p>Deleting the doctor with id : {id}...</p>
    </div>  
    </div>
  
  );
}

export default DeleteDoctor;
