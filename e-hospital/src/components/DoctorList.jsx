// src/components/ProductList.js
import React ,{useState,useEffect}from "react";
import DoctorAPI from "../utils/DoctorAPI";

// import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import "../App.css"
function DoctorList() {
  // const products = ProductAPI.getAllProducts();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const storedProducts = DoctorAPI.getAllDoctors();
    setDoctors(storedProducts);
  }, []);

  // const handleProductAdded = () => {
  //   setProducts(ProductAPI.getAllProducts());
  // };

  // const handleDeleteProduct = (id) => {
  //   ProductAPI.deleteProduct(id);
  //   setProducts(ProductAPI.getAllProducts());
  // };

 
  return (
   <div className="home" id="home">
      <div className="container mt-5 pt-5">
    <h2 className="my-5 text-center">Doctors List</h2>
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="img-fluid"
                  style={{ maxWidth: '100px' }}
                />
              </td>
              <td>{doctor.name}</td>
              <td>${doctor.price}</td>
            
              <td>
                <a href={`/doctors/${doctor.id}`} className="btn btn-primary me-2 ">
                  <FaEye />
                </a>
                <a href={`/doctors/edit/${doctor.id}`} className="btn btn-warning me-2 ">
                  <FaEdit /> 
                </a>
                <a href={`/doctors/delete/${doctor.id}`} className="btn btn-danger ">
                  <FaTrash /> 
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div> 
   </div>
 
  );
}

export default DoctorList;
