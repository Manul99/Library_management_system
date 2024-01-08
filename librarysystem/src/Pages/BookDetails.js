import React from 'react'
import './bookdetails.css'
import Navbar from '../components/Navbar'
import Footer1 from '../components/Footer1'
export default function BookDetails() {
  return (
    <div className='bookdetails-page'>
        <br></br>
        <Navbar/>
      <div className="admin-rectangle"> </div>

<span>

<div className="admin-text"> Book Details</div>

<div className="admin-table">

<table responsive>
  
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
  
</table>

</div>


<div className="admin-box1">
<div className="admin-rectangle1" />
</div>
<div className="admin-text1">
<a href="/bookform" className='bookborrowing-heading1'>Book Form</a>
</div>
<br/>

<div className="admin-box2">
<div className="admin-rectangle2" />
</div>
<div className="admin-tex2">
<a href="#" className='bookborrowing-heading2'>Book Details</a>
</div>
<br/>

<div className="admin-box3">
<div className="admin-rectangle3" />
</div>
<div className="admin-text3">
<a href="#" className='bookborrowing-heading3'>New arrivals Books</a>
</div>
<br/>



</span>

<Footer1/>
    </div>
  )
}
