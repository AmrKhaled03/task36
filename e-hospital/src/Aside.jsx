import React from 'react'
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRegistered ,faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
const Aside = ({username,loggedInUser,handleLogout}) => {
  return (

    <div className="aside" id='aside'>
   <div className="container">
   <ul>

<h4>
Profile
</h4>

    <li>
      <Link className='text-white link' to="/profile">
       <span>
         {username === null ? <>User Profile</> :<div className=''>{username}</div> } 
       </span>
       
    
      
    
   
    </Link>
      </li>
 
   </ul>
   <hr />
   <ul>
  
      <h4>
        Patients
      </h4>

    <li>
    <NavDropdown title="Patients" id="basic-nav-dropdown" className='text-white '>

         
<NavDropdown.Item  as={Link} to="/patients" className='mainsp'>Patients</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/patients/add" className='mainsp'>Add Patient</NavDropdown.Item>
            </NavDropdown>
    </li>
   </ul>
   <hr />
   <ul>
    
      <h4>
        Doctors
      </h4>
   
    <li>
    <NavDropdown title="Doctors" id="basic-nav-dropdown" className='text-white '>



         
<NavDropdown.Item  as={Link} to="/doctors" className='mainsp'>Doctors</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/doctors/add" className='mainsp'>Add Doctor</NavDropdown.Item>
</NavDropdown>
    </li>
   </ul>
   <hr />

   <ul>
   
      <h4>
Authentication
      </h4>
    
 
      {!loggedInUser ? (
  <>
    <li>
      <Link className='text-white link' to="/register">
        <FontAwesomeIcon icon={faRegistered} />
        <span className='p-2'>
          Register
        </span>
      </Link>
    </li>
    <li>
      <Link className='text-white link' to="/login">
        <FontAwesomeIcon icon={faRightToBracket} />
        <span className='p-2'>
          Login 
        </span>
      </Link>
    </li>
  </>
) : (
  <li>
    <button
      className="btn btn-danger btn-md"
      onClick={handleLogout}
    >
      Logout
    </button>
  </li>
)}

  
   </ul>
   <hr/>
<Link to="/about" className='link'>
   <h4 className='text-center text-white'>
    
    About
    
   </h4>
</Link>
   </div>
    </div>
  )
}

export default Aside