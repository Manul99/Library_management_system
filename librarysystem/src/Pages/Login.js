import React, { useState } from 'react'
import './login.css'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
//import Footer from '../components/Footer'
import Footer1 from '../components/Footer1'
import axios from 'axios'
import {Navigate} from 'react-router-dom';
export default function Login() {

  const [username,setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[loggIn, setLoggedIn] = useState('');
  const[adminloggIn,setAdminloggedin] = useState('');
  const handleLogin = async(event) =>{
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/users/login',{
        username,
        password,
      });

      if(response.data.token){
        setLoggedIn(true);
      }else{
        alert('Invalid username or password');
      }
    } catch (error) {
       console.log('Login error',error);
    }
  };

  if(loggIn){
    return <Navigate to='/userdashboard'/>

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
          <h2 className='login-heading'>Login</h2>
          <br></br><br></br>
          <div class=" form mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label fw-bold">Username</label>
                <input type="text" class="form-control w-75 bg-secondary" id="exampleFormControlInput1Username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
           </div>
           <br></br>
          <div class=" form mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label fw-bold">Password</label>
                <input type="password" class="form-control w-75 bg-secondary" id="exampleFormControlInput1Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
           </div>

           <button type="submit" class="btn btn-success" onClick={handleLogin}>Login</button>
           <p className='registers'>Don't have an account<a href="/register" className='register'>Register</a></p>
           <p className='registers'>All staff members log from here<a href="/stafflogin" className='register'>Staff</a></p>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className='footer'>
      <Footer1/>
      </div>
      
     
    </div>
  )
}
