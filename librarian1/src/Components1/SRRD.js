import React from 'react'
import './SRRD.css'
import Table from 'react-bootstrap/Table';
import login from '../Image/login.svg'
import mail from '../Image/mail.svg'
import mobile from '../Image/mobile.svg'

import NavBar1 from './NavBar1';
import Footer from './Footer';



export default function SRRD() {
  return (
  <div>
    
    

<div className='login'>
          <img src={login} width={20} height={20} className='login-image'></img><a class="logins nav-link active" aria-current="page" href="/login">Login/Log out</a>
        </div>
       
        <div className='mail'>
          <img src={mail} width={20} height={20} className='mail-image'></img><p className='mails'>librariapb@gmail.com</p>
        </div>

        <div className='mobile'>
          <img src={mobile} width={20} height={20} className='mobile-image'></img><p className='mobile'>+941164739 /</p>
        </div>

    <br></br>

    <NavBar1/>
      
  

      <div className="box1"> 
    <div className="rectangle12">
      
    <div className="text-studyroom">Study Room Reservation Details</div>

<div className="table11">


<Table striped bordered hover>
    <thead>
      <tr>
        <th>Membership <br/>ID s</th>
        <th>Names</th>
        <th>Room No</th>
        <th>Time</th>
        <th>Approval</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>xxxx0000 <br/> xxxx0000 <br/> xxxx0000 <br/> xxxx0000 </td>
        <td>xxxxxx <br/> xxxxxx <br/> xxxxxx<br/> xxxxxx </td>
        <td>xxx000</td>
        <td>00:00 to 00:00</td>
        <td>

      

        <div className='Approve1'>
              <button type="submit" class=" btn btn-success" variant="primary" size="sm">Approve</button>
              </div>

              <div className='Reject1'>
              <button type="submit" class=" btn btn-success" variant="primary" size="sm">Reject</button>
              </div>

        </td>

      </tr>
      <tr>
      <td>xxxx0000 <br/> xxxx0000 <br/> xxxx0000 <br/> xxxx0000 </td>
        <td>xxxxxx <br/> xxxxxx <br/> xxxxxx<br/> xxxxxx </td>
        <td>xxx000</td>
        <td>00:00 to 00:00</td>
        <td>

      
        <div className='Approve2'>
              <button type="submit" class=" btn btn-success">Approve</button>
              </div>

              <div className='Reject2'>
              <button type="submit" class=" btn btn-success">Reject</button>
              </div>
        

        </td>
      </tr>
      
    </tbody>
  </Table>

  </div>

  
       </div>

    <span>

<div className='buttonCollection'>
<div className="box2">
<div className="rectangle2" />
</div>
<div className="text2"><a class="nav-link active" href="#">Study Room Details</a></div>
<br/>

<div className="box3">
<div className="rectangle3" />
</div>
<div className="text3"><a class="nav-link active" href="/srrd">Study Room Resrvation</a></div>
<br/>

<div className="box4">
<div className="rectangle4" />
</div>
<div className="text4"><a class="nav-link active" href="/">Book Details</a></div>
<br/>

<div className="box5">
<div className="rectangle5" />
</div>
<div className="text5"><a class="nav-link active" href="/bbd">Book Reservation Details</a></div>
</div>
    


<br/>
 











    </span>

</div>
<Footer/>
    </div>
  )

}
