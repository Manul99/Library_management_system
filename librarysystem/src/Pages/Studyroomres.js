import React, { useEffect, useState } from 'react'
import login from '../Images/login.svg'
import mail from '../Images/mail.svg'
import mobile from '../Images/mobile.svg'
import Navbar1 from '../components/Navbar1'
import './studyroomres.css'
import Footer from '../components/Footer'
import axios from 'axios'
export default function Studyroomres() {
  const[studyroom, setStudyroom] = useState([]);

  useEffect(() => {
    // Fetch reports data from your backend API
    axios.get('http://localhost:3001/api/roomreserve')
      .then((response) => {
        setStudyroom(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className='studyroomres'>
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
      
  <br></br><br></br><br></br>

    <div className="rectangle12">
      
    <div className="text-studyroom">Study Room Reservation Details</div>
<br></br>
<div className="table11">


                <table striped bordered hover>
                <thead>
                  <tr>
                    <th>NIC <br/>ID s</th>
                    <th>Category</th>
                    <th>Capacity</th>
                    <th>zone</th>
                    <th>Date</th>
                    <th>Time</th>
                    
                  </tr>
                </thead>
                {studyroom.length > 0 ? (
        studyroom.map((studyroom) => (
          <tbody key={studyroom.id}>
            <tr>
              <td>{studyroom.nic}<br/></td>
              <td>{studyroom.category}<br/>  </td>
              <td>{studyroom.capacity}</td>
              <td>{studyroom.zone}</td>
              <td>{studyroom.fromDate}</td>
              <td>{studyroom.fromTime} to {studyroom.until}</td>
              <td></td>
            </tr>
           
          </tbody>
        ))
      ) : (
        <p>No reports found.</p>
      )}

      </table>



  
       </div>

    <span>

<div className='buttonCollectionss'>

<div className="rectangle2" />
<div className="text2"><a class="nav-link active" href="#">Study Room Details</a></div>
<br/>

<div className="rectangle3" />

<div className="text3"><a class="nav-link active" href="/">Study Room Resrvation</a></div>
<br/>

<div className="rectangle4" />

<div className="text4"><a class="nav-link active" href="librarianbookdetails">Book Details</a></div>
<br/>

<div className="rectangle5" />

<div className="text5"><a class="nav-link active" href="/bookborrowing">Book Reservation Details</a></div>
</div>
    

<br/>
 










    </span>

</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Footer/>
    </div>
  )
}
