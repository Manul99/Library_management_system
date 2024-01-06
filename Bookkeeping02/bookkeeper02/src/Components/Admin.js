import React from 'react'
import './admin.css'
import Table from 'react-bootstrap/Table'; 


export default function Admin() {
  return (
    <div>
      
      <div className="admin-box"> 
    <div className="admin-rectangle"> </div>

    <span>

    <div className="admin-text"> Library Staff Details</div>

    <div className="admin-table">


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
          <td>+94 77 467 2983</td>
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



    <div className="admin-box1">
<div className="admin-rectangle1" />
</div>
<div className="admin-text1">Member Form</div>
<br/>

<div className="admin-box2">
<div className="admin-rectangle2" />
</div>
<div className="admin-tex2">Library Staff Form</div>
<br/>

<div className="admin-box3">
<div className="admin-rectangle3" />
</div>
<div className="admin-text3">Library Staff Details</div>
<br/>

<div className="admin-box4">
<div className="admin-rectangle4" />
</div>
<div className="admin-text4">Feedbacks from Members</div>
<br/>
<div className="admin-box5">
<div className="admin-rectangle5" />
</div>
<div className="admin-text5">User Details</div>
<br/>


    </span>

</div>
 
    </div>
  );
};