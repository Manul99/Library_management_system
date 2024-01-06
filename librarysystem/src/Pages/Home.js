import React from 'react'
import '../Pages/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Navbar from '../components/Navbar';
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import poster1 from '../Images/poster1.png'
import poster2 from '../Images/poster2.png'
import poster3 from '../Images/poster3.png'
import book from '../Images/book1.svg'
import Footer from '../components/Footer';
export default function Home() {

  return (
    <div className='content'>
        
        <div className='login'>
          <img src={login} width={20} height={20} className='login-image'></img><a class="logins nav-link active" aria-current="page" href="/login">Login/Log out</a>
        </div>
       
        <div className='mail'>
          <img src={mail} width={20} height={20} className='mail-image'></img><p className='mails'>librariapb@gmail.com</p>
        </div>
        <br></br><br></br>
      <Navbar/>

      <br></br><br></br>
      <center><div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={poster1} class="d-block w-75" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={poster2} class="d-block w-75" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={poster3} class="d-block w-75" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></center>
<br></br><br></br><br></br><br></br>

<div className='content22'>
<div className='member'>
      <a href="/register" className='members'>Become a Library Member</a>
  </div>
<div className='staff'>
      <a href="#" className='staffs'>Library Staff</a>
  </div>
<div className='books'>
      <a href="#" className='book'>Books</a>
  </div>
<div className='rooms'>
      <a href="/login" className='room'>Reserve Study Room</a>
  </div>
<div className='policies'>
      <a href="#" className='policy'>Library Policies</a>
  </div>
<div className='feedback'>
      <a href="" className='feedbacks'>Feedback</a>
  </div>
  
</div>

<br></br><br></br>

<div className='arrivals'>
    <h2 className='head'>New Arrivals</h2>
  
  <div className='image1'>
    <a href="" ><img src={book} width={100} height={100} className='book1'></img></a>
  </div>
  <div className='image3'>
    <a href="" ><img src={book} width={100} height={100} className='book3'></img></a>
  </div>
  <div className='image4'>
    <a href="" ><img src={book} width={100} height={100} className='book4'></img></a>
  </div>
  <div className='image5'>
    <a href="" ><img src={book} width={100} height={100} className='book5'></img></a>
  </div>
  <div className='image6'>
    <a href="" ><img src={book} width={100} height={100} className='book6'></img></a>
  </div>
</div>

<br></br><br></br><br></br>

<Footer/>
    </div>
  )
}
