import React from 'react'
import './admindashboard.css'
import Login from '../Images/login.svg'
import Call from '../Images/mobile.svg'
import Email from '../Images/mail.svg'
import admin from '../Images/admin.png'
import User from '../Images/user.png'
import staff from '../Images/staffs.png'
import Reserve from '../Images/bookreservation.svg'
import book from '../Images/bookdetails.png'
import room from '../Images/studyroomreservation.png'
import study from '../Images/studyRoom.png'
import Navbar from '../components/Navbar'

export default function AdminDashboard() {
  return (
    <div className='admindashboard'>
    
       <div className='login1'>
          <img src={Login} width={20} height={20} className='login1-image'></img>
          <div className='login1'>Login / Log out<div/>
        </div>
        </div>
        <img src={Call} width={20} height={20} className='call1-image'></img>
        <div className="call1-text">+941164739/</div>
       
        <div className='mail1'>
          <div/>
          <img src={Email} width={20} height={20} className='mail1-image'></img>
          <div className='mail1'>librariapb@gmail.com
<div className="Guest-text"> Admin Dashboard</div>
<div className='guest-box'>
  <div className='guest-rectangle'></div>
  <div className='guest1-rectangle'></div>
  <div className='guest1-text'><a href="/staffform" className='adminli-heading2'>Admin</a></div>
  <img src={admin} width={164} height={151} className='admin-image'></img>
</div>
<div className='guest-box1'>
  <div className='guest-rectangle1'></div>
  <div className='guest2-rectangle'></div>
  <div className='guest2-text'><a href="/detailsmember" className='adminli-heading2'>User Details</a></div>
  <img src={User} width={82} height={110} className='user-image'></img>
</div>
<div className='guest-box2'>
  <div className='guest-rectangle2'></div>
  <div className='guest3-rectangle'></div>
  <div className='guest3-text'><a href="/staffform" className='adminli-heading2'>Library Staff Details</a></div>
  <img src={staff} width={113} height={103} className='staff-image'></img>
</div>
<div className='guest-box3'>
  <div className='guest-rectangle3'></div>
  <div className='guest4-rectangle'></div>
  <div className='guest4-text'><a href="/staffform" className='adminli-heading2'>Study Room Details</a></div>
  <img src={study} width={114} height={108} className='reserve-image'></img>
</div>
<div className='guest-box4'>
  <div className='guest-rectangle4'></div>
  <div className='guest5-rectangle'></div>
  <div className='guest5-text'><a href="/staffform" className='adminli-heading2'>Book Reservation</a></div>
  <img src={book} width={121} height={93} className='book-image'></img>
</div>
<div className='guest-box5'>
  <div className='guest-rectangle5'></div>
  <div className='guest6-rectangle'></div>
  <div className='guest6-text'><a href="/staffform" className='adminli-heading2'>Study Room Reservation</a></div>
  <img src={room} width={114} height={108} className='room-image'></img>
</div>
<div className='guest-box6'>
  <div className='guest-rectangle6'></div>
  <div className='guest7-rectangle'></div>
  <div className='guest7-text'><a href="/staffform" className='adminli-heading2'>Book Details</a></div>
  <img src={Reserve} width={120} height={108} className='study-image'></img>
</div>
</div>
    
  
      </div>
    </div>
  )
}
