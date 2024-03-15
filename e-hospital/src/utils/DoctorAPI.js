// src/utils/ProductAPI.js
const STORAGE_KEY = "doctors";
const initializeLocalStorage = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  } 
};
const DoctorAPI = {
  getAllDoctors: () => {
    initializeLocalStorage();
    const doctors = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return  doctors;
  },
  getDoctorById: (id) => {
    const  doctors = DoctorAPI.getAllDoctors();
    return  doctors.find((doctor) => doctor.id === id);
  },
  addDoctor: (doctor) => {
    const  doctors = DoctorAPI.getAllDoctors();
    doctors.push(doctor);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(doctors));
  },
  updateDoctor: (id, updatedDoctor) => {
    const  doctors = DoctorAPI.getAllDoctors();
    const index =  doctors.findIndex((doctor) => doctor.id === id);
    if (index !== -1) {
      doctors[index] = { ...updatedDoctor, id };
      localStorage.setItem(STORAGE_KEY, JSON.stringify( doctors));
    }
  },
  deleteDoctor: (id) => {
    const  doctors = DoctorAPI.getAllDoctors();
    const updatedDoctors =  doctors.filter((doctor) => doctor.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDoctors));
  },
};

export default DoctorAPI;
