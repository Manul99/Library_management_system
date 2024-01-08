
import React from 'react'
import login from '../Images/login.svg'
import mail from '../Images/mail.svg'
import mobile from '../Images/mobile.svg'
import './bookborrowing.css'
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer'
export default function Bookborrowings() {
  return (
    <div className='borrowing-page'>
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

<Navbar1/>

     
    <div className="rectangle1"> </div>

    <div className="text-bookborrowingss">Book Borrowing Details</div>

<div className="table-bookborrowing">

<table striped bordered hover>
    <thead>
      <tr>
        <th>NIC</th>
        <th>User Name</th>
        <th>Book Name</th>
        <th>Author</th>
        <th>Approval</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>xxxx0000 <br/> <br/> <br/> <br/> </td>
        <td>xxxxxxx </td>
        <td>xxxxxxxxx</td>
        <td>xxxxxxxxx</td>
        <td>

      

        

        </td>

      </tr>
      <tr>
      <td>xxxx0000 </td>
        <td>xxxxxxx </td>
        <td>xxxxxxxxx</td>
        <td>xxxxxxxxx</td>
        <td>
        
       
        </td>
      </tr>
      
    </tbody>
  </table>

  

    <span>

   
    

<div className='borrowing-buttons'>
<div className="rectangle2" />

<div className="text2"><a class="nav-link active" href="#">Study Room Details</a></div>
<br/>

<div className="rectangle3" />

<div className="text3"><a class="nav-link active" href="/studyroomres">Study Room Resrvation</a></div>
<br/>

<div className="rectangle4" />

<div className="text4"><a class="nav-link active" href="/librarianbookdetails">Book Details</a></div>
<br/>

<div className="rectangle5" />

<div className="text5"><a class="nav-link active" href="/bbd">Book Reservation Details</a></div>

<br/>
</div>    












    </span>

</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Footer/>
    </div>
  )
}
