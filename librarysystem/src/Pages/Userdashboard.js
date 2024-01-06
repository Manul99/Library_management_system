import React from 'react'
import './userdashboard.css'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar1 from '../components/Navbar1'
import Footer1 from '../components/Footer1'
export default function Userdashboard() {
  return (
    <div className='content'>
      <div className='login'>
          <img src={login} width={20} height={20} className='login-image'></img><a class="logins nav-link active" aria-current="page" href="/">Login/Log out</a>
        </div>
        <div className='mobile'>
          <img src={mobile} width={15} height={15} className='mobile-image'></img><p className='mobiles'>+941164739</p>
        </div>
        <div className='mail'>
          <img src={mail} width={20} height={20} className='mail-image'></img><p className='mails'>librariapb@gmail.com</p>
        </div>
        <br></br><br></br>
        <Navbar1/>

        <br></br>
        <div class="row row-cols-1 row-cols-md-4 g-5">
  <div class="col">
    <div class="">
      <div class="category card-body">
        <a href="/poetry" className='cat-heading'>Poetry</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
   
      <div class="category1 card-body">
      <a href="/romance" className='cat-heading'>Romance</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
     
      <div class="category2 card-body">
      <a href="/kids" className='cat-heading'>Kids</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
 
      <div class="category3 card-body">
      <a href="sci" className='cat-heading1'>Sci-Fi & Fantacy</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
 
      <div class="category card-body">
      <a href="#" className='cat-heading'>Actions</a>
      </div>
    </div>
  </div>
</div>
     <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
     <Footer1/>   
    </div>
  )
}
