import React from 'react'
import '../Pages/login.css'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import Navbar1 from '../components/Navbar1'
import small from '../Images/small.png'
import large from '../Images/large.png'
import tech from '../Images/tech.png'
import Footer1 from '../components/Footer1'
export default function Reserveroom() {
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
        <div className='study-content1'>
            <h1 className='reserveroom-heading'>Study Room Option</h1>
            <h2 className='reserveroom-heading2'>Choose of variety of room types</h2>

            <div className='small'>
            <img src={small} className='small-image'></img>
        <div className='small-heading'>
                <h4 className='small-heading2'>Small Group Study Rooms</h4><br></br>
                <ul className='small-list'>
                  <li>Fit 3-4 people and including a small table.</li>
                  <br></br>
                  <li>Chairs and a whiteboard</li>
                </ul>
                <a href="/makereservation" class="reserves btn btn-primary btn-success" tabindex="-1" role="button" aria-disabled="true">Reserve</a>
            </div>
            <div className='line'>

            </div>
            <div className='large'>
            <img src={large} className='large-image'></img>
                <div className='large-heading'>
                <h4 className='large-heading2'>Large Group Study Rooms</h4><br></br>
                </div>
               
                <ul className='large-list'>
                  <li>Generally fit 6-10 people.</li>
                  <br></br>
                  <li><p>Two larger rooms are also available or
                  </p> <p>group 12-15 people</p></li><br></br>
                    <li>All include whiteboard .</li>
                </ul>
                <a href="/makereservation" class="reserve1 btn btn-primary btn-success" tabindex="-1" role="button" aria-disabled="true">Reserve</a>
            </div>
            <div className='line2'>

            </div>

            <div className='tech'>
            <img src={tech} className='tech-image'></img>
                <div className='tech-heading'>
                <h4 className='tech-heading2'>Tech Coops</h4><br></br>
                </div>
              
                <ul className='tech-list'>
                
                  <li>Fit 3-5 people.</li>
                  <br></br>
                  <li>Include a display screen and  whiteboard</li>
                </ul>
                <a href="/makereservation" class="reserve2 btn btn-primary btn-success" tabindex="-1" role="button" aria-disabled="true">Reserve</a>
            </div>
        </div>
        </div>

        <Footer1/>
     
    </div>
  )
}
