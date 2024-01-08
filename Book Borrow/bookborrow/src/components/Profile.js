import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function Profile() {
  return (
    
    <div className="User-box"> 
    <div className="User-rectangle"> 
    <div className='text-user1'>Name* :</div>
    <div className='text-user2'>NIC* :</div>
    <div className='text-user3'>Gender* :</div>
    <div className='text-user4'>Birthday* :</div>
    <div className='text-user5'>Mobile No* :</div>
    <div className='text-user6'>Email :</div>
    <div className='text-user7'>Male</div>
    <div className='text-user8'>Female</div>

    <>
 
    
      <Button as="input" type="submit" value="Update" />{' '}
      <Button as="input" type="reset" value="Remove" />
    </>

    
    <div className="User-text"> Your Profile</div>
    <div>
      
      </div> 

    <div className="User-box1">
<div className="User-rectangle1" />
</div>
<div className="User-text1">Your Profile</div>
<br/>

<div className="User-box2">
<div className="User-rectangle2" />
</div>
<div className="User-tex2"> Staff Details</div>
<br/>



<div className='box1-User'>
<div className='rectangle1-User'/>
</div>
<div className='box2-User'>
</div>
<div className='recangle2-User'>
</div>
<div className='box3-User'>
<div className='ellipse-1U'/>
<div className='ellipse-2U'/>
</div>
<div className='box4-User'>
<div className='recangle4-User'/>
</div>
<div className='box5-User'>
<div className='recangle5-User'/>
</div>
<div className='box6-User'>
<div className='recangle6-User'/>
</div>
<div className='box7-User'>
<div className='recangle7-User'/>
</div>

<nav className="navbar navigate-p">
    <div className="container-fluid-p">
      <a className="navbar-brand-p" href="#">
      <div className='images-p-1'>
          <img src={Image} alt="" width={80} height={80} className="d-inline-block align-text-top" />
        </div>
        <h2 className='heading1-p'> Public</h2>
        <h2 className='heading2-p'>LIBRARIA</h2>
      </a>
    </div>

    
        
    <div className='contentss'>
      
        
      <li class="nav-item1-p">
            <a class="nav-link active" aria-current="page" href="user">HOME</a>
          </li>
          <li class="nav-item2-p">
            <a class="nav-link active" href="about">ABOUT US</a>
          </li>
          <li class="nav-item3-p">
            <a class="nav-link active" href="">CONTACT US</a>
          </li>
          <li class="nav-item4-p">
            <a class="nav-link active" href="/userdashboard">SERVICES</a>
          </li>
          <li class="nav-item5-p">
            <a class="nav-link active" href="#">FEEDBACK</a>
          </li>
         
         
        </div>
        
    </nav>
 
    <footer className='footer2-p'>

<div className='about2-p'>
   <b><h2 className='about-heading2-p'>About Libraria</h2></b>
   
   <img src={mobile2} width={20} height={20} className='logo1-2-p'></img> <p className='mobile2-p'>+941164739</p>
   <img src={location2} width={20} height={20} className='logo2-2-p'></img> <p className='location2-p'>23/A,Garden villa,Colombo 07</p>
   <img src={mail2} width={20} height={20} className='logo3-2-p'></img> <p className='mail2-p'>librariapb@gmail.com</p>
   <img src={whatsapp} width={20} height={20} className='logo4-2-p'></img> <p className='whatsappno2-p'>077-2223345</p>
   
</div>
<div className='useful-p'>
            <b><h2 className='useful-heading-p'>Useful Links</h2></b>

            <img src={SLA} width={20} height={20} className='sla-logo-p'></img><p className='sla-p'>Sri Lanka Library Association</p>
            <img src={IFLA} width={20} height={20} className='ifla-logo-p'></img><p className='ifla-p'>International Federation of Library</p>
            <p className='ifla-end-p'> Associations and Institute</p>

        </div>

        <div className='opening-p'>
            <b><h2 className='opening-heading-p'>Opening hours</h2></b>
            <p className='mt-p'>Monday to Thursday</p>
            <p className='time-p'>9 am to 9 pm</p>
            <div className='days-p'>
            <p>Fri -9 am to 8pm</p>
            <p>Sat -9 am to 6pm</p>
            <p>Sun -11 am to 6pm</p>
            </div>
          
        </div>
        <div className='media-p'>
            <div className='subscribe-p'>
            <a href="" className='newsletter-p'>SUBSCRIBE TO OUR NEWSLETTER</a>
            </div>
         </div>
         <div className='rectangle-p'>
              <input type='email-p' className='emailsr-p'></input>
              <div className='text-mail-p'>Enter your Email</div> 
                <div className='submits-p'>
                <Button type="submit-p" class=" btn btn-success-p">Subscribe</Button>
                </div>
                
            </div>
            <div className='images-p'>
                <div className='set1-p'>
                    <img src={fb} width={30} height={30} className='fb-p'></img>
                    <img src={youtube} width={30} height={30} className='you-p'></img>
                    <img src={twitter} width={30} height={30} className='twitter-p'></img>
                </div>
                </div>
                <div className='set2-p'>
                    <img src={insta1} width={30} height={30} className='insta1-p'></img>
                    <img src={linkdln} width={30} height={30} className='link-p'></img>
                    <img src={google} width={30} height={30} className='google-p'></img>
                </div>
                <div className='copy-p'>
            <small>Copyright © 2022 PLSL » Public Libraria of Sri Lanka. All Rights Reserved</small>
        </div>

</footer> 
    </div>
   </div>
  
  )
}