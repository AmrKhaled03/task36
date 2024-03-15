// src/components/EditProduct.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DoctorAPI from "../utils/DoctorAPI";

import "../App.css"
function EditDoctor() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
 
  });

  useEffect(() => {
    // Fetch the product data based on the ID from local storage or your API
    const productData = DoctorAPI.getDoctorById(id);

    if (productData) {
     setDoctor(productData);
    } else {
      // Handle the case where the product is not found
    }
  }, [id]);

  const handleEditProduct = () => {
    // Update the product data in local storage or your API
    DoctorAPI.updateDoctor(id, doctor);
// window.location.href="/";
    // You can also display a success message or perform other actions here
  };

  return (
    
    <div className="home" id="home">
   <div className="container my-5 p-5" >
    <h2 className="my-5 text-center">Edit Doctor</h2>
    <form>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control custom-input"
          placeholder="Doctor"
          value={doctor.name}
          onChange={(e) =>
            setDoctor({ ...doctor, name: e.target.value })
          }
        />
      </div>
      <div className="form-group mb-3">

        <textarea
          className="form-control custom-input"
          placeholder="Description"
          value={doctor.description}
          onChange={(e) =>
           setDoctor({ ...doctor, description: e.target.value })
          }
        />
      </div>
      <div className="form-group mb-3">

        <input
          type="number"
          className="form-control custom-input"
          placeholder="Price"
          value={doctor.price}
          onChange={(e) =>
           setDoctor({ ...doctor, price: e.target.value })
          }
        />
      </div>
     
      
    
      <button
        type="button"
        className="btn btn-primary btn-lg custom-button"
        onClick={handleEditProduct}
      >
        Save Changes
      </button>
    </form>
  </div>    
    </div>
   
  );
}

export default EditDoctor;
