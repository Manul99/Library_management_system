import React from 'react'
import './staff.css'
import Table from 'react-bootstrap/Table'; 




export default function() {
  return (
    

    <div className="member-box"> 
    <div className="member-rectangle"> </div>

    <span>

    <div className="member-text"> Library Staff Details</div>

    <div className="member-table">

    <Table responsive>
      
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
      <thead>
        
          
      </thead>
      <tbody>
        
        
      </tbody>
   
      <tbody>
        <tr>
          <td>K. Dilan Dias</td>
          <td>1974.19.05</td>
          <td>Male</td>
          <td>74902489320v</td>
          <td>ddias74@gmail.com</td>
          <td>+94774672983</td>
          <td>SM/74/9039</td>
          
        
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
      
    </Table>

    </div>


    

<div className="member-box2">
<div className="member-rectangle2" />
</div>
<div className="member-tex2">Your Profile</div>
<br/>

<div className="member-box3">
<div className="member-rectangle3" />
</div>
<div className="member-text3">Staff Details</div>
<br/>

    </span>

   </div>
    
    
  )
}