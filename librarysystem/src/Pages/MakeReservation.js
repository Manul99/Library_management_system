import React, { useState } from 'react'
import './userdashboard.css'
import Navbar1 from '../components/Navbar1'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer1 from '../components/Footer1'
import Footer from '../components/Footer'
import axios from 'axios'
export default function MakeReservation() {

    const [fromTime,setFromTime] = useState('');
    const [until,setUntil] = useState('');
    const [category, setCategory] = useState('');
    const [capacity, setCapacity] = useState('');
    const [zone,setZone] = useState('');
    const [fromDate, setfromDate] = useState('');
    const [nic, setNic] = useState('');
    const [email, setEmail] = useState('');
    const[successMessage, setSuccessMessage] = useState('');
    

    const handleFromTimeChange = (event) =>{
        const selectedFromTime = event.target.value;
        setFromTime(selectedFromTime);

        // Calculate time for until add 3hours
        const selectedFromTimeInDate = new Date(`1970-01-01T${selectedFromTime}`);
        const untilTimeInDate = new Date(selectedFromTimeInDate.getTime() + 3 * 60 * 60 * 1000);

        // Update the state for until with the calculated time
        const formattedUntilTime = untilTimeInDate.toTimeString().slice(0,5);
        setUntil(formattedUntilTime);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        const reserveData = {
            category: category,
            capacity:capacity,
            zone:zone,
            fromDate:fromDate,
            nic:nic,
            email:email,
            fromTime:fromTime,
            until:until,
        }
        makeRoomreservation(reserveData);
    }

    const makeRoomreservation = async(reserveData) =>{
        try {
            const response = await axios.post('http://localhost:3001/api/roomreserve',reserveData);
            console.log('You booking submitted');
            setSuccessMessage('Thank you!');
            setCategory('');
            setCapacity('');
            setZone('');
            setfromDate('');
            setNic('');
            setEmail('');
            setFromTime('');
            setUntil('');
        } catch (error) {
            console.log('Failed to send data',error);
        }
    }

    const handleUpdate = async(event) =>{
        event.preventDefault();
        const reserveData = {category,capacity,zone,fromDate,fromTime,until}

       try {
        const response = await axios.put(`http://localhost:3001/api/roomreserve/${nic}`,reserveData);
        console.log('Room reserve updated succefully');
        setSuccessMessage('Room reservation Updated!');
        setCategory('');
        setCapacity('');
        setZone('');
        setfromDate('');
        setNic('');
        setFromTime('');
        setUntil('');
       } catch (error) {
          console.log('Failed to update data',error);
       }
    }

    const handleDelete = async(event) =>{
        event.preventDefault();

        try {
            const response = await axios.delete(`http://localhost:3001/api/roomreserve/${nic}`);
            console.log('Room reserve updated succefully',response.data);
            setSuccessMessage('Room reservation Updated!');
            setCategory('');
            setCapacity('');
            setZone('');
            setfromDate('');
            setNic('');
            setFromTime('');
            setUntil('');
        } catch (error) {
            console.log('Failed to delete data');
        }
    }


  return (
    <div className='login-page'>
      <div className='login'>
          <img src={login} width={20} height={20} className='login-image'></img><a class="logins nav-link active" aria-current="page" href="/login">Login/Log out</a>
        </div>
       
        <div className='mail'>
          <img src={mail} width={20} height={20} className='mail-image'></img><p className='mails'>librariapb@gmail.com</p>
        </div>
        <br></br><br></br>
        <Navbar1/>
        <br></br>
        <div className='reservation-content'>
            <h1 className='reservation-heading'>Search Spaces</h1>
            <div className='reservation-details'>
                <h1 className='reservations-heading2'>Search by Time</h1>
                <div className='reservation-details2'>
                    <div className='reservations-details3'>
                    <form>
                <br></br>
                       <p>Category</p> 
                       <select name='category' id='category' className='cate' value={category} onChange={(e) => setCategory(e.target.value)} >
                            <option className='show'>Show all</option>
                            <option value='Small Group Study Room'>Small Group Study Room</option>
                            <option value='Large Group Study Room'>Large Group Study Room</option>
                            <option value='Tech Coop'>Tech Coops</option>
                          
                       </select>
                       <br></br><br></br>
                       <p>Capacity</p> 
                       <input type='text' className='cate' placeholder='1-15' value={capacity} onChange={(e) => setCapacity(e.target.value)}></input>
                       <br></br><br></br>
                       <p>Zone</p> 
                       <select name='category' id='category' className='cate' value={zone} onChange={(e) => setZone(e.target.value)}>
                            <option className='show'>Show all</option>
                            <option value='1st floor'>1sr floor</option>
                            <option value='2nd floor'>2nd floor</option>
                            <option value='3rd floor'>3rd floor</option>
                          
                       </select>
                       <br></br><br></br>
                       <p>From</p>
                       <input type='date' className='cate1' value={fromDate} onChange={(e) => setfromDate(e.target.value)}></input>
                       <br></br><br></br><br></br>
                       <div className='id'>
                       <p>NIC</p>
                       <input type='text' className='cate' placeholder='XXXX0000' value={nic} onChange={(e) => setNic(e.target.value)}></input>
                       </div><br></br>
                       <div className='id'>
                       <p>Email</p>
                       <input type='text' className='cate' placeholder='XXXX@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                       </div>

                       <p>From</p>
                       <input type='time' className='cate1' placeholder='11.00' value={fromTime} onChange={handleFromTimeChange}></input>
                       <div className='until'>
                       <p>Until</p>
                       <input type='time' className='cate1' placeholder='16.00' value={until} readOnly onChange={(e) => setUntil(e.target.value)}></input>
                        </div>

                        <button type="submit" class=" submit btn btn-success" onClick={handleSubmit}>Submit</button>
                       <button type="submit" class="update btn btn-success" onClick={handleUpdate}>Update</button>
                       <button type="submit" class="cancel btn btn-success" onClick={handleDelete}>Cancel</button>
                       </form>

                       {successMessage && 
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                             {successMessage}
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>}
                       </div>
                </div>
            </div>
        </div>

        <div className='smallgroup'>
            <h1 className='smallgroup-heading'>Description</h1>
            <div className='small-details'><br></br>
                <h2 className='small-heading2'>Small Group Study Rooms</h2>
                <p className='small-text'>Located along the perimeter of Levels 1-4, these fit 3-4 people and include a whiteboard, table and chairs.</p>
                <h5 className='small-booking'>Booking Limits:</h5>
                <p className='small-booking'>You can reserve up to 3 hours per day per person across all study room types</p>
            </div>
        </div>
        <div className='largegroup'>
            <h1 className='largegroup-heading'>Description</h1>
            <div className='large-details'><br></br>
                <h2 className='large-heading2'>Large Group Study Rooms</h2>
                <p className='large-text'>Fit between 6 and 15 people depending on the space. Check the description of the individual rooms for maximum capacity. </p>
                <h5 className='large-booking'>Booking Limits:</h5>
                <p className='large-booking'>You can reserve up to 3 hours per day per person across all study room types</p>
            </div>
        </div>
        <div className='techgroup'>
            <h1 className='techgroup-heading'>Description</h1>
            <div className='tech-details'><br></br>
                <h2 className='tech-heading2'>Tech Coops</h2>
                <p className='tech-text'>These are the four inclosed pods that include display monitors and whiteboards, located in the middle of the book stacks on Level 3.  </p>
                <h5 className='tech-booking'>Booking Limits:</h5>
                <p className='tech-booking'>You can reserve up to 3 hours per day per person across all study room types.</p>
            </div>
        </div>
    <Footer1/>
    </div>
  )
}
