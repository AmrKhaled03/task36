// src/components/ProductForm.js
import React, { useState } from "react";
import DoctorAPI from "../utils/DoctorAPI";

import "../App.css"
function DoctorForm() {
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
  const handleAddDoctor = () => {
    const newProduct = {
      id: Date.now().toString(),
      name,
      description,
      price,
      image,
   
    };

    DoctorAPI.addDoctor(newProduct);
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
      <h2 className="my-5 text-center ">Add Doctor</h2>
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
            onClick={handleAddDoctor}
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>   
  </div>
   
  );
}

export default DoctorForm;
