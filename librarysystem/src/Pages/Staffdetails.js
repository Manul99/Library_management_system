import React from 'react'
import './staffdetails.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Staffdetails() {
  return (
    <div className='staffdetails-page'>
        <br></br>
        <Navbar/>
      <div className="staff-rectangle"> </div>

<span>

<div className="staff-text"> Book Details</div>

<div className="staff-table">

<table responsive>
  
  <thead>
    <tr>
      <th>Name</th>
      <th>Birthday</th>
      <th>Gender</th>
      <th>NIC</th>
      <th>Email</th>
      <th>Mobile No</th>
      <th>Membership ID</th>
    </tr>
  </thead>
  <thead>
    
      
  </thead>
  <tbody>
    
    
  </tbody>

  <tbody>
    <tr>
      <td>It Ends With Us</td>
      <td>Colleen Hoover</td>
      <td>Romance</td>
      <td></td>
      <td>978-1-5011--1036-8</td>
      <td>2016</td>
      <td>English</td>
      
    
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
       
    </tr>
    
  </tbody>
  
</table>

</div>


<div className="staff-box1">
<div className="staff-rectangle1" />
</div>
<div className="staff-text1">
<a href="/staffprofile" className='staff-heading1'>Your Profile</a>
</div>
<br/>

<div className="staff-box2">
<div className="staff-rectangle2" />
</div>
<div className="staff-tex2">
<a href="#" className='staff-heading2'>Staff Details</a>
</div>
<br/>

<br/>



</span>
<Footer/>
    </div>
  )
}
