import React from 'react'
import './login.css'
import Navbar1 from '../components/Navbar1'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import poetry from '../Images/poetry.png'
export default function Poetry() {
  return (
    <div className='login-page'>
        <div className='login'>
          <img src={login} width={20} height={20} className='login-image'></img><a class="logins nav-link active" aria-current="page" href="/login">Login/Log out</a>
        </div>
       
        <div className='mail'>
          <img src={mail} width={20} height={20} className='mail-image'></img><p className='mails'>librariapb@gmail.com</p>
        </div>
        <br></br><br></br>
        <Navbar1/>
        <br></br><br></br><br></br>
        <div className='kids-section'>
            <h1 className='kids-heading1'>Poetry</h1>
            <br></br><br></br><br></br><br></br>
            <div class="row row-cols-1 row-cols-md-5 g-5">
  <div class="col">
    <div class="">
      <div class="kids1  card-body">
        <img src={poetry} width={180} height={220}/>

        <div className='book-content'>
        <a href="#" className='book-heading1'>The Way Forward</a><br></br>
        <a href="#" className='book-heading1'>by Yung Pueblo</a>
        
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
   
      <div class="kids2 card-body">
      <a href="#" className='cat-heading'>Romance</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
     
      <div class="kids3 card-body">
      <a href="kids" className='cat-heading'>Kids</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
 
      <div class="kids4 card-body">
      <a href="#" className='cat-heading1'>Sci-Fi & Fantacy</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
 
      <div class="kids5 card-body">
      <a href="#" className='cat-heading'>Actions</a>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}
