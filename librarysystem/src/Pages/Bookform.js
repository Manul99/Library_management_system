import React, { useState } from 'react'
import './bookdetails.css'
import Navbar from '../components/Navbar'
import Footer1 from '../components/Footer1'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../components/Footer';
import axios from 'axios';
export default function Bookform() {

  const[formData,setFormData] = useState({
    bookName: '',
    author: '',
    publications: '',
    category: '',
    isbn: '',
    year: '',
    medium: '',
    note: '',
    keywords: '',
  })

  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formDataWithFile = new FormData();
    formDataWithFile.append('file', file);

    for (const key in formData) {
      formDataWithFile.append(key, formData[key]);
    }

    try {
      // Update the API endpoint for file upload and form submission
      await axios.post('http://localhost:3001/books', formDataWithFile);
      // Add logic for form submission if needed
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className='bookdetails-page'>
        <br></br>
        <Navbar/>
       <div className="User-rectangle"> 
       <div className="User-text"> Book Form</div><br></br><br></br>
       <b><p className='name'>Book Name*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="names form-control w-50" id="exampleFormControlInput1"  name="bookName" value={formData.bookName} onChange={handleInputChange}/></p></b>
                   <b></b><br></br><br></br>
                   <b><p className='birthday'>Author*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="birth form-control w-50" id="exampleFormControlInput1"  name="author" value={formData.author} onChange={handleInputChange}/></p></b><br></br>
                   <b><p className='email'>Publications*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:<input type="text" class="emails form-control w-50" id="exampleFormControlInput1"  name="publications" value={formData.publications} onChange={handleInputChange} /></p></b>
                   <b><p className='email'>Category*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="mobiless form-control w-50" id="exampleFormControlInput1"  name="category" value={formData.category} onChange={handleInputChange}/></p></b>
                   <b><p className='email'>ISBN No*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="mobiless form-control w-50" id="exampleFormControlInput1" name="isbn" value={formData.isbn} onChange={handleInputChange} /></p></b>
                   <p className='email'>Year*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="user form-control w-50" id="exampleFormControlInput1" name="year" value={formData.year} onChange={handleInputChange} /></p>

                   <b><p className='email'>Medium*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="user form-control w-50" id="exampleFormControlInput1"  name="medium" value={formData.medium} onChange={handleInputChange} /></p></b>
                   <b><p className='email'>Note*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="user form-control w-50" id="exampleFormControlInput1" name="note" value={formData.note} onChange={handleInputChange}/></p></b>
                   <b><p className='email'>Keywords*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="user form-control w-50" id="exampleFormControlInput1"  name="keywords" value={formData.keywords} onChange={handleInputChange}/></p></b>
                   <b><p className='email'>Image*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="file" class="user form-control w-50" onChange={handleFileUpload}/></p></b>
                   

        <div className='bookForm-buttons'>
        <button type="button" class="btn btn-warning" onClick={handleSubmit}>Submit</button>
        <button type="button" class="btn btn-success">Update</button>
        <button type="button" class="btn btn-success">Delete</button>
        </div>        

    
    

    <>
 
    
    </>

    
    
    <div>
      
      </div> 

      <div className="User-box1">
<div className="User-rectangle1" />
</div>
<div className="User-text1">
<a href="/bookform" className='bookborrowing-heading1'>Book Form</a>
</div>
<br/>

<div className="User-box2">
<div className="User-rectangle2" />
</div>
<div className="User-tex2">
<a href="/bookdetails" className='bookborrowing-heading2'>Book Details</a>
</div>
<br/>

<div className="User-box3">
<div className="User-rectangle3" />
</div>
<div className="User-text3">
<a href="#" className='bookborrowing-heading3'>New arrivals Books</a>
</div>
<br/>



</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Footer/>



    </div>
  )
}
