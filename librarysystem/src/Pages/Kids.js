import React from 'react'
import './login.css'
import Navbar1 from '../components/Navbar1'
import login from '../Images/login.svg'
import mobile from '../Images/mobile.svg'
import mail from '../Images/mail.svg'
import kids1 from '../Images/kids1.png'
import kids2 from '../Images/kids2.png'
import kids3 from '../Images/kids3.png'
import kids4 from '../Images/kids4.png'
import kids5 from '../Images/kids5.png'
import kids6 from '../Images/kids6.png'




export default function Kids() {
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
        <br></br><br></br><br></br>
        <div className='kids-section'>
            <h1 className='kids-heading1'>Kids</h1>
            <br></br><br></br><br></br><br></br>
            <div class="row row-cols-1 row-cols-md-5 g-5">
  <div class="col">
    <div class="">
      <div class="kids1  card-body">
        <img src={kids1} width={180} height={220}/>

        <div className='book-content'>
        <a href="/bookpage" className='book-heading1'>Diary of Wimpy Kid</a><br></br>
        <a href="/bookpage" className='book-heading1'>By Jeff Kinney</a>
        
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
   
      <div class="kids2 card-body">
      <img src={kids2} width={180} height={220}/>
      <div className='book-content'>
        <a href="/bookpage" className='book-heading1'>Diary of Wimpy Kid</a><br></br>
        <a href="/bookpage" className='book-heading1'>By Jeff Kinney</a>
        
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
     
      <div class="kids3 card-body">
      <img src={kids3} width={180} height={220}/>
      <div className='book-content'>
        <a href="/bookpage" className='book-heading1'>Diary of Wimpy Kid</a><br></br>
        <a href="/bookpage" className='book-heading1'>By Jeff Kinney</a>
        
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
 
      <div class="kids4 card-body">
      <img src={kids4} width={180} height={220}/>
      <div className='book-content'>
        <a href="/bookpage" className='book-heading1'>Diary of Wimpy Kid</a><br></br>
        <a href="/bookpage" className='book-heading1'>By Jeff Kinney</a>
        
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
 
      <div class="kids5 card-body">
      <img src={kids5} width={180} height={220}/>
      <div className='book-content'>
        <a href="/bookpage" className='book-heading1'>Diary of Wimpy Kid</a><br></br>
        <a href="/bookpage" className='book-heading1'>By Jeff Kinney</a>
        
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
         </div>
    
  )
}
