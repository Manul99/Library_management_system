import React from 'react'
import './member.css'
import Table from 'react-bootstrap/Table'; 

export default function Member() {
  return (
    <div>
      
      <div className="member-box"> 
    <div className="member-rectangle"> </div>

    <span>

    <div className="member-text"> Member Details</div>

    <div className="member-table">


    <Table responsive>
      
      <thead>
        <tr>
          <th>Name</th>
          <th>Birthday</th>
          <th>Gender</th>
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
      
    </Table>

    </div>



    <div className="member-box1">
<div className="member-rectangle1" />
</div>
<div className="member-text1">Member Form</div>
<br/>

<div className="member-box2">
<div className="member-rectangle2" />
</div>
<div className="member-tex2">Library Staff Form</div>
<br/>

<div className="member-box3">
<div className="member-rectangle3" />
</div>
<div className="member-text3">Feedbacks from Members</div>
<br/>

<div className="member-box4">
<div className="member-rectangle4" />
</div>
<div className="member-text4">User Details</div>
<br/>


    </span>  
       
            

          </div>
        </div>
      
    
  );
};