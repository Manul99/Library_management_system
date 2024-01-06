import React from 'react'
import './footer1.css'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import location from '../Images/location.png'
import whatsapp from '../Images/whatsapp.svg'
import green from '../Images/green.png'
import SLA from '../Images/SLA.png'
import IFLA from '../Images/IFLA.png'
import fb from '../Images/fb.svg'
import youtube from '../Images/youtube.svg'
import insta1 from '../Images/insta1.svg'
import insta2 from '../Images/insta2.svg'
import twitter from '../Images/twitter.svg'
import linkld from '../Images/linkld.png'
import google from '../Images/google.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
export default function Footer1() {
  return (
    
<footer className='footer'>

<div className='about'>
   <b><h2 className='about-heading'>About Libraria</h2></b>
   
   <img src={mobile} width={20} height={20} className='logo1'></img> <p className='mobilesss'>+941164739</p>
   <img src={location} width={20} height={20} className='logo3'></img> <p className='location'>23/A,Garden villa,Colombo 07</p>
   <img src={mail} width={20} height={20} className='logo4'></img> <p className='mail'>librariapb@gmail.com</p>
   <img src={green} width={20} height={20} className='logo5'></img> <p className='whatsappno'>077-2223345</p>
   <img src={whatsapp} width={20} height={20} className='logo5'></img>
</div>

<div className='useful'>
    <b><h2 className='useful-heading'>Useful Links</h2></b>

    <img src={SLA} width={20} height={20} className='sla-logo'></img><p className='sla'>Sri Lanka Library Association</p>
    <img src={IFLA} width={20} height={20} className='ifla-logo'></img><p className='ifla'>International Federation of Library</p>
    <p className='ifla-end'> Associations and Institute</p>

</div>

<div className='opening'>
    <b><h2 className='opening-heading'>Opening hours</h2></b>
    <p className='mt'>Monday to Thursday</p>
    <p className='time'>9 am to 9 pm</p>
    <div className='days'>
    <p>Fri -9 am to 8pm</p>
    <p>Sat -9 am to 6pm</p>
    <p>Sun -11 am to 6pm</p>
    </div>
  
</div>

<div className='media'>
    <div className='subscribe'>
    <a href="" className='newsletter'>SUBSCRIBE TO OUR NEWSLETTER</a>
    </div>

    <div className='input'>
        <input type='email' className='emailss'></input>
        <div className='success'>
            <button type="submit" className="btn btn-success">Submit</button>
        </div>
        
    </div>

    <div className='images'>
        <div className='set1'>
            <img src={fb} width={30} height={30} className='fb'></img>
            <img src={youtube} width={30} height={30} className='you'></img>
            <img src={twitter} width={30} height={30} className='twitter'></img>
        </div>
        <div className='set2'>
            <img src={insta1} width={30} height={30} className='insta1'></img>
            <img src={insta2} width={30} height={30} className='insta2'></img>
            <img src={linkld} width={30} height={30} className='link'></img>
            <img src={google} width={30} height={30} className='google'></img>
        </div>
        
    </div>


</div>

<div className='copy1'>
    <small>Copyright © 2022 PLSL » Public Libraria of Sri Lanka. All Rights Reserved</small>
</div>
</footer>
    
  )
}
