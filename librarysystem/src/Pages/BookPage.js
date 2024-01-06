import React from 'react'
import './login.css'
import Navbar1 from '../components/Navbar1'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import light from '../Images/light.png'
import Footer1 from '../components/Footer1'
export default function BookPage() {
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
        <div className='content2'>
            <br></br><br></br>
            <h1 className='content2-heading1'>The Lighting Theif</h1>
            <h2 className='content2-heading2'>By:<div className='author'><h2 className='content2-heading3'>Ridordan Rick</h2></div></h2>
            <p className='medium'>Medium <p className='medium2'>English</p></p>
            <p className='publisher'>Publisher <p className='publisher2'>Miramax Books</p></p>
            <p className='year1'>Year <p className='year2'>2005</p></p>
            <div className='note'>
                <p>Note</p>
                <p>Percy Jackson and the Olympians: The Lightning Thief is a story about a troubled young boy who finds out his father is a Greek god, making him a demigod. He and his friends are given the task of finding and returning Zeus's lightning bolt as monsters from the Underworld attempt to stop them.</p>
            </div>
            <br></br><br></br>
            <p className='keywordss'>Keywords</p><div className='keywords-content'><p className='keywords'>Rick Riordan</p></div>
            <p className='subjectss'>Subject</p><div className='keywords-content1'><p className='subject'>Kids</p></div>
            
        </div>

        <div className='image-content'>
            <img src={light} width={220} height={300}/>
            <div className='book-reserve'>
                <a href="/bookreservation" className='book-reserve2'>Click to Reserve</a>
            </div>
        </div>
        <Footer1/>
    </div>
  )
}
