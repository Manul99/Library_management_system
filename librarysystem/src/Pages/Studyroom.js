import React from 'react'
import '../Pages/login.css'
import Navbar from '../components/Navbar'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import Navbar1 from '../components/Navbar1'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Footer1 from '../components/Footer1'
export default function Studyroom() {
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
        <br></br><br></br>
        <div className='study-content'>
           <div className='reservation'>
              <h1 className='reservation-heading'>Study Room Reservation</h1>
           </div>
           <h2 className='reservation-heading2'>Please review our study room policies before booking</h2>
            <div className='reservation-list'>
                <ul>
                  <li>Users are allowed to reserve rooms up to 12 hours per week.</li>
                  <li>Rooms may be reserved up to 60 days in advance</li>
                  <li>Reservations may be cancelled and rooms re-assigned if an individual or group has not arrived with 15 minutes of their reservation start time to allow others 
                       an opportunity to use the space.</li>
                  <li>All group members must agree to the reservation. Reservations may be cancelled if a user informs us that they did not agree, or were not made aware of a reservation
                      that includes them..</li>
                  <li>Drink containers must have lids.</li>
                  <li>Rooms are not soundproof, so NO shouting and NO loud audio that may be heard outside the room and disturb others.</li>
                  <li>Do not leave personal belongings unattended; unattended items may be removed by building security upon the request of a group wishing to use the room. 
                      To report unattended items, call 274-0472.</li>
                  <li>All room users are expected to leave the room in the same condition they found it and place all trash in receptacles.</li>
                  <li>Individuals/Groups with fewer members than the minimum specified on the door will be required to relocate if a larger group requests the room. No holding rooms 
                       for group members who step out longer than 10 minutes</li>
                  <li>Students must report to Computer Consultants any defect in equipment or damage to University Library property immediately.</li>
                </ul>


            </div>
            <div className='click-here'>
              <h4 className='click-heading'>Click here to book a study room</h4> 
              <a href="/reserveroom" class="next btn btn-primary btn-success" tabindex="-1" role="button" aria-disabled="true">Next</a>
            </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer1/>
    </div>
  )
}
