// src/components/EditProduct.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PatientAPI from "../utils/PatientAPI";
import "../App.css";
function EditPatient() {
  const { id } = useParams();

  const [patient, setPatient] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    // Fetch the product data based on the ID from local storage or your API
    const productData = PatientAPI.getPatientById(id);

    if (productData) {
      setPatient(productData);
    } else {
      // Handle the case where the product is not found
    }
  }, [id]);

  const handleEditProduct = () => {
    // Update the product data in local storage or your API
    PatientAPI.updatePatient(id, patient);
    // window.location.href="/";
    // You can also display a success message or perform other actions here
  };

  return (
    <div className="home" id="home">
      <div className="container my-5 p-5">
        <h2 className="my-5 text-center">Edit Patient</h2>
        <form>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Patient"
              value={patient.name}
              onChange={(e) =>
                setPatient({ ...patient, name: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              className="form-control custom-input"
              placeholder="Description"
              value={patient.description}
              onChange={(e) =>
                setPatient({ ...patient, description: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control custom-input"
              placeholder="Price"
              value={patient.price}
              onChange={(e) =>
                setPatient({ ...patient, price: e.target.value })
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

export default EditPatient;
