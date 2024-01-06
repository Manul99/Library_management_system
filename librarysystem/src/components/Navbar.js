import React from 'react'
import './styles.css'
import image1 from '../Images/Vector.svg'
import image2 from '../Images/Vector2.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
export default function Navbar() {
  return (
    <nav className="navbar navigate">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <div className='images'>
          <img src={image1} alt="" width="80" height="80" className="d-inline-block align-text-top" />
          <img src={image2} alt="" width="62" height="62" className="d-inline-block align-text-top image2" />
        </div>
        <h2 className='heading1'> Public</h2>
        <h2 className='heading2'>LIBRARIA</h2>
      </a>
    </div>

    <div className='contentss'>
      <ul class="navbar-nav">
        <li class="nav-item1">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item2">
          <a class="nav-link active" href="#">About Us</a>
        </li>
        <li class="nav-item3">
          <a class="nav-link active" href="/about">Contact Us</a>
        </li>
        <li class="nav-item4">
          <a class="nav-link active" href="#">Services</a>
        </li>
        <li class="nav-item5">
          <a class="nav-link active" href="/feedack">Feedback</a>
        </li>
       
        </ul>
      </div>
      
  </nav>
  )
}
