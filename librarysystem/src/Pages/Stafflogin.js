import React, { useState } from 'react'
import './login.css'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Footer1 from '../components/Footer1'
import { Navigate } from 'react-router-dom'
export default function Stafflogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [adminloggIn, setAdminloggedin] = useState('');
    const [librarianloggIn, setLibrarianloggedin] = useState('');
    const [staffloggIn,setStaffloggedin] = useState('');
    const [bookkeeperloggIn, setBookkeeperIn] = useState('');
    const [error, seterror] = useState('');
    const handlelogin = () =>{
        if(username === 'admin' && password === 'admin123'){
            setAdminloggedin(true);
        }

        else if(username === 'librarian' && password === 'librarian123'){
            setLibrarianloggedin(true);
        }

        else if(username === 'staff' && password === 'staff123'){
            setStaffloggedin(true);
        }

        else if(username === 'bookkeeper' && password === 'bookkeeper123'){
            setBookkeeperIn(true);
        }

        else{
            seterror('Invalid username or password')
        }
    }

    if(adminloggIn){
        return <Navigate to='/bookpage'/>
    }

    else if(librarianloggIn){
        return <Navigate to='/'/>
    }

  return (
    <div className='login-page'>
        <br></br><br></br>
      <div className='login'>
          <img src={login} width={20} height={20} className='login-image'></img><a class="logins nav-link active" aria-current="page" href="/">Login/Log out</a>
        </div>
      
        <div className='mail'>
          <img src={mail} width={20} height={20} className='mail-image'></img><p className='mails'>librariapb@gmail.com</p>
        </div>
        <br></br>
      <Navbar/>
      <br></br>
      <div className='login-form'>
          <h2 className='stafflogin-heading'>Staff Login</h2>
          <br></br><br></br>
          <div class=" form mb-3">
                <label for="exampleFormControlInput1" class="form-label fw-bold">Username</label>
                <input type="text" class="form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
           </div>
           <br></br>
          <div class=" form mb-3">
                <label for="exampleFormControlInput1" class="form-label fw-bold">Password</label>
                <input type="password" class="form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
           </div>

           <button type="submit" class="btn btn-success" onClick={handlelogin}>Login</button>
           {error && <p className='staffalert'>{error}</p>}
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className='footer'>
      <Footer1/>
      </div>
      
    </div>
  )
}
