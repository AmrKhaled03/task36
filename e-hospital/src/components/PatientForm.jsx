// src/components/ProductForm.js
import React, { useState } from "react";
import PatientAPI from "../utils/PatientAPI";
import "../App.css"
function PatientForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");


 const handleImageChange = (event) => {
  const selectedImage = event.target.files[0];
  if (selectedImage) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  }
  };
  const handleAddPatient = () => {
    const newProduct = {
      id: Date.now().toString(),
      name,
      description,
      price,
      image,
   
    };

    PatientAPI.addPatient(newProduct);
    setName("");
    setImage("");
    setPrice("");
  
    setDescription("");
    // Redirect or update state as needed after adding the product
// window.location.href="/";

  };
 
  return (
  <div className="home " id="home">
  <div className="container my-5 p-5 ">
      <h2 className="my-5 text-center ">Add Patient</h2>
      <form>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="file"
            className="form-control-file"
            // accept="image/*"
            onChange={handleImageChange}
          />
        </div>
   
   
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleAddPatient}
          >
            Add Patient
          </button>
        </div>
      </form>
    </div>   
  </div>
   
  );
}

export default PatientForm;
