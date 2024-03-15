// src/utils/ProductAPI.js
const STORAGE_KEY = "patients";
const initializeLocalStorage = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  } 
};
const PatientAPI = {
  getAllPatients: () => {
    initializeLocalStorage();
    const patients = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return  patients;
  },
  getPatientById: (id) => {
    const  patients = PatientAPI.getAllPatients();
    return  patients.find((patient) => patient.id === id);
  },
  addPatient: (patient) => {
    const  patients = PatientAPI.getAllPatients();
    patients.push(patient);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
  },
  updatePatient: (id, updatedPatient) => {
    const  patients = PatientAPI.getAllPatients();
    const index =  patients.findIndex((patient) => patient.id === id);
    if (index !== -1) {
      patients[index] = { ...updatedPatient, id };
      localStorage.setItem(STORAGE_KEY, JSON.stringify( patients));
    }
  },
  deletePatient: (id) => {
    const  patients = PatientAPI.getAllPatients();
    const updatedPatients =  patients.filter((patient) => patient.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPatients));
  },
};

export default PatientAPI;
