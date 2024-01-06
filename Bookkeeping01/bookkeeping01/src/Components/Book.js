import React from 'react'
import './book.css'
import Table from 'react-bootstrap/Table'; 


export default function Book() {
  return (
    
        
    
    <div className="admin-box"> 
    <div className="admin-rectangle"> </div>

    <span>

    <div className="admin-text"> Book Details</div>

    <div className="admin-table">

    <Table responsive>
      
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Gender</th>
          <th>Publications</th>
          <th>ISBN No</th>
          <th>Year</th>
          <th>Medium</th>
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
      
    </Table>

    </div>


    <div className="admin-box1">
<div className="admin-rectangle1" />
</div>
<div className="admin-text1">Book Form</div>
<br/>

<div className="admin-box2">
<div className="admin-rectangle2" />
</div>
<div className="admin-tex2">Books Details</div>
<br/>

<div className="admin-box3">
<div className="admin-rectangle3" />
</div>
<div className="admin-text3">New Arrivals Form</div>
<br/>



    </span>

</div>
    
  );
};