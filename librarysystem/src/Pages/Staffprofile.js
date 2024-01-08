import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './bookdetails.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../components/Footer';

export default function Staffprofile() {
    const [gender,setGender] = useState('');

    const handleOptionChange = (value) => {
        setGender(value);
      };
  return (
    <div className='bookdetails-page'>
        <br></br>
        <Navbar/>
       <div className='profile-rectangle'>
          <h1 className='profile'>Your Profile</h1>
          <br></br><br></br><br></br>
          <form>
          <b><p className='birthday'>Name*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="birth form-control w-50" id="exampleFormControlInput1"/></p></b><br></br>
                   <b><p className='email'>NIC*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:<input type="email" class="emails form-control w-50" id="exampleFormControlInput1"  /></p></b>
                   <b><p className='mobile'>Gender* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="radio"  checked={gender === 'male'} onChange={() => handleOptionChange('male')} className='option1' /><p className='male'>Male</p><input type="radio"  checked={gender === 'female'} onChange={() => handleOptionChange('female')} className='option2'/><p className='female'>Female</p></p></b>
                   <b><p className='mobile'>Birthday*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="mobiless form-control w-50" id="exampleFormControlInput1"  /></p></b>
                   <b><p className='mobile'>Mobile No*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="mobiless form-control w-50" id="exampleFormControlInput1"  /></p></b>
                   <b><p className='mobile'>Email*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="user form-control w-50" id="exampleFormControlInput1"   /></p></b>


            <div className='profile-buttons'>
        <button type="submit" class="btn btn-warning">Update</button>
        <button type="submit" class="btn btn-success">Delete</button>
      
        </div>  
        </form>   

        <div className="profile-box1">
<div className="profile-rectangle1" />
</div>
<div className="profile-text1">
<a href="/bookform" className='profile-heading1'>Your Profile</a>
</div>
<br/>

<div className="profile-box2">
<div className="User-rectangle2" />
</div>
<div className="profile-tex2">
<a href="/staffdetails" className='profile-heading2'>Staff Details</a>
</div>
<br/>



       </div>
<br></br><br></br>
       <Footer/>
    </div>
  )
}
