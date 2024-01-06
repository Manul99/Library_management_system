import React, { useState } from 'react'
import './register.css'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Footer1 from '../components/Footer1'
import axios from 'axios';
export default function Register() {
        const [name,setName] = useState('');
        const [gender,setGender] = useState('');
        const [birthday,setBirthday] = useState('');
        const [email,setEmail] = useState('');
        const [mobile,setMobile] = useState('');
        const [nic,setNic] = useState('');
        const [username,setUsername] = useState('');
        const [password,setPassword] = useState('');
        const [confirmPassword,setConfirmPassword] = useState('');
        const [successMessage,setSuccessMessage] = useState('');
        const [passwordsMatch,setPasswordMatch] = useState('');
        const [agreed, setAgreed] = useState('');
        //const [selectedOption, setSelectedOption] = useState(null);
      
        
        const handleOptionChange = (value) => {
          setGender(value);
        };

        const handleRegister = (event) =>{
          event.preventDefault();


          if(password !== confirmPassword){
            setPasswordMatch(false);
            return;
          }

          setPasswordMatch(true);

          const userData ={
            name:name,
            gender:gender,
            birthday:birthday,
            email:email,
            mobile:mobile,
            nic:nic,
            username:username,
            password:password,
          }
          registerUser(userData);
         
        }

        const registerUser = async(userData) =>{
          try {
            const response = await axios.post('http://localhost:3001/api/users',userData);
            console.log('Data inserted succefully',response.data);
            setSuccessMessage('Thank you for register with us!');
            setName('');
            setGender('');
            setBirthday('');
            setEmail('');
            setMobile('');
            setNic('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
          } catch (error) {
             console.log('Failed to insert data',error);
          }
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
        <Navbar/>

        <div className='account'>
            <h1 className='account-heading'>Create Your Library Account</h1>
              <br></br>
            <div className='account-content'>
                <form>
                   <b><p className='name'>Your Full Name*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="names form-control w-50" id="exampleFormControlInput1" value={name} onChange={(e) => setName(e.target.value)} /></p></b>
                   <b></b>
                   <b><p className='name'>Gender* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="radio"  checked={gender === 'male'} onChange={() => handleOptionChange('male')} className='option1' /><p className='male'>Male</p><input type="radio"  checked={gender === 'female'} onChange={() => handleOptionChange('female')} className='option2'/><p className='female'>Female</p></p></b>
                   <b><p className='birthday'>Birthday*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="birth form-control w-50" id="exampleFormControlInput1" value={birthday} onChange={(e) => setBirthday(e.target.value)}/></p></b>
                   <b><p className='email'>Email*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:<input type="email" class="emails form-control w-50" id="exampleFormControlInput1" value={email} onChange={(e) => setEmail(e.target.value)} /></p></b>
                   <b><p className='mobile'>Mobile No*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="mobiless form-control w-50" id="exampleFormControlInput1" value={mobile} onChange={(e) => setMobile(e.target.value)} /></p></b>
                   <b><p className='mobile'>NIC*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="mobiless form-control w-50" id="exampleFormControlInput1" value={nic} onChange={(e) => setNic(e.target.value)} /></p></b>
                   <b><p className='mobile'>Username*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="text" class="user form-control w-50" id="exampleFormControlInput1"  value={username} onChange={(e) => setUsername(e.target.value)}/></p></b>
                   <b><p className='mobile'>Password*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="password" class="user form-control w-50" id="exampleFormControlInput1" value={password} onChange={(e) => setPassword(e.target.value)}/></p></b>
                   <b><p className='mobile'>Confirm Password*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="password" class="user form-control w-50" id="exampleFormControlInput1" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></p></b>
                   <b><input type='checkbox' className='agree' checked={agreed} onChange={() => setAgreed(!agreed)}></input><p className='agrees'>I agree to the Library Terms of Services and Privacy Policy</p></b>
                   {!passwordsMatch && (
                <small className="confirm text-danger alert-dismissible">Passwords do not match.</small> 
              )}
                   <div className='button'>
                      <button type="submit" class="btn btn-primary" onClick={handleRegister} disabled={!agreed}>Register</button>
                   </div>
                </form>
                {successMessage && 
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                             {successMessage}
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>}
            </div>
        </div>
        <br></br><br></br><br></br><br></br>
        <Footer1/>
    </div>
  )
}
