import React, { useEffect, useState } from "react";
import { ContextProvider } from "./components/context/ShopContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./Nav";
import Aside from "./Aside";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./components/NotFound";

import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import PatientList from "./components/PatientList";
import PatientForm from "./components/PatientForm";
import PatientDetail from "./components/PatientDetail";
import EditPatient from "./components/EditPatient";

import DeletePatient from "./components/DeletePatient";



import DoctorList from "./components/DoctorList";
import DoctorForm from "./components/DoctorForm";
import DoctorDetail from "./components/DoctorDetail";
import EditDoctor from "./components/EditDoctor";

import DeleteDoctor from "./components/DeleteDoctor";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUsername, setLoggedInUsername] = useState(null);

  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      const { email, username } = JSON.parse(loggedInUserData);
      setLoggedInUser(email);
      setLoggedInUsername(username);
    }
  }, []);

  const handleLogin = (userEmail, userUsername) => {
    setLoggedInUser(userEmail);
    setLoggedInUsername(userUsername);
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ email: userEmail, username: userUsername })
    );
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setLoggedInUsername(null);
    localStorage.removeItem("loggedInUser");
  };
  return (
    <ContextProvider>
      <>
  <Nav />
                   
  <Aside  handleLogout={handleLogout}  username={loggedInUsername} loggedInUser={loggedInUser} />
  <Routes>
  <Route index path="/" exact element={<Home username={loggedInUsername}/>} />
  <Route  path="/about" exact element={<About />} />
  <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
         

              <Route
                path="/profile"
                exact
                element={
                  <UserProfile
                    email={loggedInUser}
                    username={loggedInUsername}
                  />
                }
              />
              <Route path="/patients" element={<PatientList />} />

<Route path="/patients/add" element={<PatientForm />} />
<Route path="/patients/:id" element={<PatientDetail />} />
<Route path="/patients/edit/:id" element={<EditPatient />} />
<Route path="/patients/delete/:id" element={<DeletePatient />} />


<Route path="/doctors" element={<DoctorList />} />

<Route path="/doctors/add" element={<DoctorForm />} />
<Route path="/doctors/:id" element={<DoctorDetail />} />
<Route path="/doctors/edit/:id" element={<EditDoctor />} />
<Route path="/doctors/delete/:id" element={<DeleteDoctor />} />
        <Route path="*" element={<NotFound/>}/>

  </Routes>
  </>  
    </ContextProvider>

  );
}

export default App;
