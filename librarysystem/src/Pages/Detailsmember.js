import React from 'react'
import './detailsmember.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Footer1 from '../components/Footer1'

export default function Detailsmember() {
  return (
    <div className='detailsmember-page'>
        <br></br>
        <Navbar/>
         <div className="member-box"> 
    <div className="member-rectangle"> </div>

    <span>

    <div className="member-text"> Member Details</div>

    <div className="member-table">


    <table responsive>
      
      <thead>
        <tr>
          <th>Name</th>
          <th>Birthday</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Mobile No</th>
          <th>NIC</th>
        </tr>
      </thead>
      <thead>
        
          
      </thead>
      <tbody>
        
        
      </tbody>
   
      <tbody>
        <tr>
          <td>H.M.Maria Alex</td>
          <td>2003.02.02</td>
          <td>Female</td>
          <td>maria03@gmail.com</td>
          <td>+94 713783792</td>
          <td>GA/03/0289</td>
          
        
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

        </tr>
        
      </tbody>
      
    </table>

    </div>



    <div className="member-box1">
<div className="member-rectangle1" />
</div>
<div className="member-text1"><a href="/bookform" className='adminli-heading1'>Member Form</a></div>
<br/>

<div className="member-box2">
<div className="member-rectangle2" />
</div>
<div className="member-tex2"><a href="/staffform" className='adminli-heading1'>Library Staff Form</a></div>
<br/>

<div className="member-box3">
<div className="member-rectangle3" />
</div>
<div className="member-text3"><a href="/bookform" className='adminli-heading1'>Feedbacks from Members</a></div>
<br/>

<div className="member-box4">
<div className="member-rectangle4" />
</div>
<div className="member-text4"><a href="/bookform" className='adminli-heading1'>User Details</a></div>
<br/>
<div className="member-box4">
<div className="member-rectangle4" />
</div>
<div className="member-text4"><a href="/adminListaffdetail" className='adminli-heading1'>Library Staff Details</a></div>
<br/>


    </span>  
       
            

          </div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <Footer1/>
    </div>
  )
}
