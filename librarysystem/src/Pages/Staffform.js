import React, { useState } from 'react'
import './staffform.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
export default function Staffform() {
    const [staffname, setStaffname] = useState('');
    const[staffnic,setStaffnic] = useState('');
    const [gender,setGender] = useState('');
    const [birthday,setBirthday] = useState('');
    const[mobile,setMobile]=useState('');
    const [email,setEmail] = useState('');
    const[jobrole,setJobrole] = useState('');
    const[successMessage, setSuccessMessage] = useState('');
    const handleOptionChange = (value) => {
        setGender(value);
      };

    const handleSubmit = (event) =>{
      event.preventDefault();

      const staffData ={
        staffname:staffname,
        staffnic:staffnic,
        gender:gender,
        birthday:birthday,
        mobile:mobile,
        email:email,
        jobrole:jobrole,
      }

      registerStaff(staffData);
    }

    const registerStaff = async(staffData) =>{
      try {
        const response = await axios.post('http://localhost:3001/api/staff',staffData);
        console.log('Data inserted succefully',response.data);
        setSuccessMessage('Data added succefully!');
        setStaffname('');
        setStaffnic('');
        setGender('');
        setBirthday('');
        setMobile('');
        setEmail('');
        setJobrole('');
      } catch (error) {
        console.log('Failed to insert data',error);
      }
    }

  const handleUpdate = async(event) =>{
    event.preventDefault();
    const staffData ={staffname,gender,birthday,mobile,email,jobrole}

    try {
      const response = await axios.put(`http://localhost:3001/api/staff/${staffnic}`,staffData);
      console.log('Data updated successfully',response.data);
      setSuccessMessage('Data updated successfully');
      setStaffname('');
      setStaffnic('');
      setGender('');
      setBirthday('');
      setMobile('');
      setEmail('');
      setJobrole('');
    } catch (error) {
      console.log('Failed to update data');
    }
  }

  const handleDelete = async(event) =>{
    event.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:3001/api/staff/${staffnic}`);
      console.log('Data deleted successfully',response.data);
      setSuccessMessage('Data deleted successfully');
      setStaffname('');
      setStaffnic('');
      setGender('');
      setBirthday('');
      setMobile('');
      setEmail('');
      setJobrole('');
    } catch (error) {
      console.log('Failed to delete data');
    }
  }
  return (
    <div className='staffform-content'>
        <br></br>
        <Navbar/>
        <div className='staffform'>
            <h1 className='staffform-heading11'> Staff Login Form </h1><br></br><br></br>
            <form>
            <b><p className='name'>Name*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="birth form-control w-50" id="exampleFormControlInput1" value={staffname} onChange={(e) => setStaffname(e.target.value)}/></p></b><br></br><br></br>
                   <b><p className='email'>NIC*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:<input type="email" class="emails form-control w-50" id="exampleFormControlInput1"  value={staffnic} onChange={(e) => setStaffnic(e.target.value)}/></p></b><br></br>
                   <b><p className='email'>Gender* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="radio"  checked={gender === 'male'} onChange={() => handleOptionChange('male')} className='option1' /><p className='male'>Male</p><input type="radio"  checked={gender === 'female'} onChange={() => handleOptionChange('female')} className='option2'/><p className='female'>Female</p></p></b>
                   
                   <b><p className='email'>Birthday*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="mobiless form-control w-50" id="exampleFormControlInput1"  value={birthday} onChange={(e) => setBirthday(e.target.value)}/></p></b>
                   <b><p className='email'>Mobile No*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="mobiless form-control w-50" id="exampleFormControlInput1" value={mobile} onChange={(e) => setMobile(e.target.value)} /></p></b>
                   <b><p className='email'>Email*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="user form-control w-50" id="exampleFormControlInput1"  value={email} onChange={(e) => setEmail(e.target.value)} /></p></b>
                   <b><p className='email'>Job role*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="mobiless form-control w-50" id="exampleFormControlInput1" value={jobrole} onChange={(e) => setJobrole(e.target.value)} /></p></b><br></br>
                   <br></br>

                   <div className='staffform-buttonss'>
                   <button type="submit" class="btn btn-warning" onClick={handleSubmit} >Add</button>
                    <button type="submit" class="btn btn-warning" onClick={handleUpdate}>Update</button>
                    <button type="submit" class="btn btn-success" onClick={handleDelete}>Delete</button>
             
                   </div> 
        </form> 
        {successMessage && 
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                             {successMessage}
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>}
        <div className="staffform-box1">
<div className="staffform-rectangle1" />
</div>
<div className="staffform-text1">
<a href="/bookform" className='staffform-heading1'>Member Form</a>
</div>
<br/>

<div className="staffform-box2">
<div className="staffform-rectangle2" />
</div>
<div className="staffform-tex2">
<a href="/staffform" className='staffform-heading2'>Library Staff Form</a>
</div>
<br/>

<div className="staffform-box3">
<div className="staffform-rectangle3" />
</div>
<div className="staffform-text3">
<a href="/detailsmember" className='staffform-heading3'>User Details</a>
</div>
<br/>

        </div>
,<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer/>
    </div>
  )
}
