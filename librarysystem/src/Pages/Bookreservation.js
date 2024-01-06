import React, { useState } from 'react'
import './register.css'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import Navbar1 from '../components/Navbar1'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Footer1 from '../components/Footer1'

export default function Bookreservation() {
  const [selectedFromDate, setSelectedFromDate] = useState('');
  const [selectedToDate, setSelectedToDate] = useState('');

  const handleFromDateChange = (event) =>{
    const fromDate = event.target.value;
    setSelectedFromDate(fromDate);

    // Calculate 21 days from the selected date
    const toDate = new Date(fromDate);
    toDate.setDate(toDate.getDate() + 21);
    const formattedToDate = toDate.toISOString().split('T')[0];
    setSelectedToDate(formattedToDate);
  }
  return (
    <div className='register-content'>
        <div className='login'>
          <img src={login} width={20} height={20} className='login-image'></img><a class="logins nav-link active" aria-current="page" href="/login">Login/Log out</a>
        </div>
       
        <div className='mail'>
          <img src={mail} width={20} height={20} className='mail-image'></img><p className='mails'>librariapb@gmail.com</p>
        </div>
        <br></br><br></br>
        <Navbar1/>
        <br></br><br></br>

        <div className='book-reservation'>
            <h1 className='bookreservation-head1'>Book Reservations</h1>
            <div className='borrowing-details'>
                <h1 className='borrowing-head'>Book Borrowing Details</h1>
                <div className='borrwoing-details2'>
                    <div className='books21'>
                    <form>
                        <br></br>
                       <p>Book Category</p> 
                       <select name='category' id='category' className='cate'>
                            <option className='show'>Show all</option>
                            <option value='kids'>Kids</option>
                            <option value='poetry'>Poetry</option>
                            <option value='romance'>Romance</option>
                            <option value='romance'>Sci & Fantacy</option>
                       </select>
                       <br></br><br></br>
                       <p>Book Name</p> 
                       <select name='category' id='category' className='cate'>
                            <option className='show'>Select</option>
                            <option value='kids'>Kids</option>
                            <option value='poetry'>Poetry</option>
                            <option value='romance'>Romance</option>
                            <option value='romance'>Sci & Fantacy</option>
                       </select>
                       <br></br><br></br>
                       <p>From</p>
                       <input type='date' className='cate1' value={selectedFromDate} onChange={handleFromDateChange}></input>
                       <div className='until'>
                            <p>To</p>
                            <input type='date' className='cate1' value={selectedToDate} readOnly></input>
                       </div>
                       <div className='id'>
                       <p>User Membership ID</p>
                       <input type='text' className='cate' placeholder='XXXX0000'></input>
                       </div>

                       <div className='reservation-buttons'>
                       <button type="submit" class=" submit btn btn-success">Submit</button>
                       <button type="submit" class="update btn btn-success">Update</button>
                       <button type="submit" class=" cancel btn btn-success">Cancel</button>
                       </div>
                    </form>
                   </div>
                </div>  
            </div>
        </div>

        <div className='borrowingbooks-rules'>
            <h1 className='rules-heading'>Rules Of Borrowing Books</h1>
            <div className='ruless-details'><br></br>
              <ol>
                <li>You should be a member of the library.</li>
                <li>You MUST bring and show the membership card to a librarian when you want to borrow the books.</li>
                <li>The maximum number of borrowing limited to 3 books for 2 weeks.</li>
                <li>Books can be extended maximum 1 time for 2 weeks (as long as there is no waiting list), the extension of borrowing books can also be done through email or phone.</li>
                <li>You are not allowed to hand-over the books to others.</li>
                <li>If the returned book is defected or missing, students have to replace it like its original condition or substitute it with a new one.</li>
                <li>Remember that other people need the books too, so please return the books on time.</li>
              </ol>
            </div>
        </div>
        <Footer1/>
    </div>
  )
}
