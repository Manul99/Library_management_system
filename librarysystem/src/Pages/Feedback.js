import React, { useState } from 'react'
import './feedback.css'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import axios from 'axios';
export default function Feedback() {
 const[reaction,setReaction] = useState('');
 const[message,setMessage] = useState('');
 const[successMessage, setSuccessMessage] = useState('');
 
 const handleSubmit =(event) =>{
  event.preventDefault();

  const feedbackData = {
     reaction:reaction,
     message:message

  }
  insertfeedback(feedbackData)

 }

 const insertfeedback = async(feedbackData) =>{
  try {
      const response = await axios.post('http://localhost:3001/api/feedback',feedbackData);
      console.log('Data inserted succefully',response.data);
      setSuccessMessage('Data added succefully!');
      setReaction('');
      setMessage('');
    
  } catch (error) {
      console.log('Failed to insert data',error);
  }
}



  return (
    <div className='feedback-pagesss'>
        <br></br>
        <Navbar/>
     <div className='feedback-content'>
        <h1 className='feedback-heading1'>Feedback</h1>
        <form> 
        <div className='feedback-contentss'>
          <form>
        <div class="mb-3">
  <label for="exampleFormControlInput1" className="reaction1 form-label">What do you think of the our library and services?</label><br></br><br></br>
   <input type='text' className='reaction' value={reaction} onChange={(e) => setReaction(e.target.value)}></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="reaction2 form-label">Do you have any thoughts you’d like to share?</label><br></br>
  <textarea value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
</div>
</form>

{successMessage && 
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                             {successMessage}
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>}
  <div className='feeback-submit'>
     <input type='submit' className='feedback' onClick={handleSubmit}></input>
  </div>
  
        </div>
        
        </form>
     </div>
    </div>
  )
}
