// src/components/ProductList.js
import React ,{useState,useEffect}from "react";
import PatientAPI from "../utils/PatientAPI";
// import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import "../App.css"
function PatientList() {
  // const products = ProductAPI.getAllProducts();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const storedProducts = PatientAPI.getAllPatients();
    setPatients(storedProducts);
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
    <h2 className="my-5 text-center">Patients List</h2>
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
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>
                <img
                  src={patient.image}
                  alt={patient.name}
                  className="img-fluid"
                  style={{ maxWidth: '100px' }}
                />
              </td>
              <td>{patient.name}</td>
              <td>${patient.price}</td>
            
              <td >
                <a href={`/patients/${patient.id}`} className="btn btn-primary me-2 ">
                  <FaEye />
                </a>
                <a href={`/patients/edit/${patient.id}`} className="btn btn-warning me-2 ">
                  <FaEdit /> 
                </a>
                <a href={`/patients/delete/${patient.id}`} className="btn btn-danger ">
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

export default PatientList;
