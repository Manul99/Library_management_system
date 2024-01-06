import React from 'react'
import './guest.css'

export default function Guest() {
  return (
    <div>
        <div className='login1'>
          <img src={Login} width={20} height={20} className='login1-image'></img>
          <div className='login1'>Login / Log out<div/>
        </div>
        </div>
        <img src={Call} width={20} height={20} className='call1-image'></img>
        <div className="call1-text">+941164739/</div>
       
        <div className='mail1'><div/>
          <img src={Email} width={20} height={20} className='mail1-image'></img>
          <div className='mail1'>librariapb@gmail.com
<div className="Guest-text"> Admin Dashboard</div>
<div className='guest-box'>
  <div className='guest-rectangle'></div>
  <div className='guest1-rectangle'></div>
  <div className='guest1-text'>Admin Details</div>
  <img src={admin} width={164} height={151} className='admin-image'></img>
</div>
<div className='guest-box1'>
  <div className='guest-rectangle1'></div>
  <div className='guest2-rectangle'></div>
  <div className='guest2-text'>User Details</div>
  <img src={User} width={82} height={110} className='user-image'></img>
</div>
<div className='guest-box2'>
  <div className='guest-rectangle2'></div>
  <div className='guest3-rectangle'></div>
  <div className='guest3-text'>Library Staff Details</div>
  <img src={staff} width={113} height={103} className='staff-image'></img>
</div>
<div className='guest-box3'>
  <div className='guest-rectangle3'></div>
  <div className='guest4-rectangle'></div>
  <div className='guest4-text'>Study Room Details</div>
  <img src={Reserve} width={114} height={108} className='reserve-image'></img>
</div>
<div className='guest-box4'>
  <div className='guest-rectangle4'></div>
  <div className='guest5-rectangle'></div>
  <div className='guest5-text'>Book Reservation</div>
  <img src={book} width={121} height={93} className='book-image'></img>
</div>
<div className='guest-box5'>
  <div className='guest-rectangle5'></div>
  <div className='guest6-rectangle'></div>
  <div className='guest6-text'>Study Room Reservation</div>
  <img src={room} width={114} height={108} className='room-image'></img>
</div>
<div className='guest-box6'>
  <div className='guest-rectangle6'></div>
  <div className='guest7-rectangle'></div>
  <div className='guest7-text'>Book Details</div>
  <img src={study} width={114} height={108} className='study-image'></img>
</div>
</div>
    
  
      </div></div>
  )
}