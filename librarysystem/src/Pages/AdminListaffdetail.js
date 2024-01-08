import React, { useEffect, useState } from 'react'
import './adminlistaffdetails.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
export default function AdminListaffdetail() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    // Fetch staff data from your backend API
    axios.get('http://localhost:3001/api/staff')
      .then((response) => {
        setStaff(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='adminli'>
      <br></br>
      <Navbar />
      <div className="adminli-box">
        <div className="adminli-rectangle"></div>
        <span>
          <div className="adminli-text">Library Staff Details</div>
          <div className="adminli-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Birthday</th>
                  <th>Gender</th>
                  <th>NIC</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Membership No</th>
                </tr>
              </thead>
              <tbody>
                {staff.length > 0 ? (
                  staff.map((staffMember) => (
                    <tr key={staffMember.staffnic}>
                      <td>{staffMember.staffname}</td>
                      <td>{staffMember.birthday}</td>
                      <td>{staffMember.gender}</td>
                      <td>{staffMember.staffnic}</td>
                      <td>{staffMember.email}</td>
                      <td>{staffMember.mobile}</td>
                      <td>{staffMember.membershipNo}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No staff found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </span>
        <div className="adminli-box1">
          <div className="adminli-rectangle1" />
        </div>
        <div className="adminli-text1">
          <a href="/bookform" className='adminli-heading1'>Member Form</a>
        </div>
        <br />
        <div className="adminli-box2">
          <div className="adminli-rectangle2" />
        </div>
        <div className="adminli-text2">
          <a href="/staffform" className='adminli-heading2'>Library Staff Form</a>
        </div>
        <br />
        <div className="adminli-box3">
          <div className="adminli-rectangle3" />
        </div>
        <div className="adminli-text3">
          <a href="/memberdetails" className='adminli-heading3'>User Details</a>
        </div>
        <br />
        <div className="adminli-box3">
          <div className="adminli-rectangle3" />
        </div>
        <div className="adminli-text3">
          <a href="/memberdetails" className='adminli-heading3'>Library Staff Details</a>
        </div>
        <br />
        <div className="adminli-box3">
          <div className="adminli-rectangle3" />
        </div>
        <div className="adminli-text3">
          <a href="/memberdetails" className='adminli-heading3'>Feedback from users</a>
        </div>
        <br />
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />


    </div>
  )
}
