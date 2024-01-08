import React from 'react'
import login from '../Images/login.svg'
import mail from '../Images/mail.svg'
import mobile from '../Images/mobile.svg'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './librarianbookdetails.css';
import Footer1 from '../components/Footer1';

export default function Librarianbookdetails() {
  return (
    <div className='librarianbookdetails-page'>
      <div className='login'>
          <img src={login} width={20} height={20} className='login-image'></img><a class="logins nav-link active" aria-current="page" href="/login">Login/Log out</a>
        </div>
       
        <div className='mail'>
          <img src={mail} width={20} height={20} className='mail-image'></img><p className='mails'>librariapb@gmail.com</p>
        </div>

        <div className='mobile'>
          <img src={mobile} width={20} height={20} className='mobile-image'></img><p className='mobile'>+941164739 /</p>
        </div>

        <br></br>

<Navbar/>
 
    <div className="rectangle1"> </div>

    <span>

    <div className="text-bookdetails"> Book Details</div>

    <div className="table-bookdetails">

<table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Genere</th>
          <th>Publications</th>
          <th>ISBN No</th>
          <th>Year</th>
          <th>Medium</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>

        <td>It Ends With Us </td>
          <td>Colleen Hoover </td>
          <td>Romance</td>
          <td>Astria Books</td>
          <td>978-1-5011-1036-8</td>
          <td>2016</td>
          <td>English</td>

  

        </tr>
        <tr>

        <td>Percy Jackson & The Lightning Theif </td>
          <td>Rick Riordan </td>
          <td>Kids</td>
          <td>Miramax Books</td>
          <td>0-7868-5629-7</td>
          <td>2005</td>
          <td>English</td>

        </tr>
        
      </tbody>
    </table>

    </div>


  <div className='liboookdetails'>
  <div className="rectangle2" />

<div className="text2"><a class="nav-link active" href="#">Study Room Details</a></div>
<br/>

<div className="rectangle3" />

<div className="text3"><a class="nav-link active" href="srrd">Study Room Resrvation</a></div>
<br/>

<div className="rectangle4" />

<div className="text4"><a class="nav-link active" href="/">Book Details</a></div>
<br/>

<div className="rectangle5" />

<div className="text5"><a class="nav-link active" href="/bbd">Book Reservation Details</a></div>
<br/>

    </div> 











    </span>

<div/>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Footer1/>
    </div>
  )
}
