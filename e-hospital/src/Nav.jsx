import React, { useContext } from 'react'
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ShoppingContext } from './components/context/ShopContext'
import { Link } from 'react-router-dom'
const Nav = () => {
    const{openAside}=useContext(ShoppingContext);
  return (
    <div className="navbar">

    <div className="container">
       <ul className='d-flex justify-content-between align-items-center  me-auto'>
              <li>

              <FontAwesomeIcon icon={faBars} className='bars'  onClick={openAside}/>
              </li>
             
       </ul>
       <ul className='d-flex justify-content-between align-items-center  ms-auto text-white'>
              <li>
                     <Link className='text-white link' to="/">
            <h2>
       E-HOSPITAL
</h2>         
                     </Link>

              </li>
             
       </ul>
    </div>

    </div>
  )
}

export default Nav
