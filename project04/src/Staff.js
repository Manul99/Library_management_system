import React from 'react'
import './staff.css'
import { Link } from 'react-router-dom'
import Image1 from './Images/IMG1.png'
import Image2 from './Images/IMG2.png'
import Image3 from './Images/IMG3.png'

function Staff() {
  return (
    <div>
      <Link to='/Staff'></Link>
      <div className="label">
<div className="text-wrapper">MEET OUR STAFF</div>
</div>
<div className="box">
<div className="rectangle" />
<div class="container">
<div class="rectangle">
<img src={Image1} alt={80}width={450} height={300} className='1-image'>
      </img>
</div>

<div className='rectangle2'>
<img src={Image2} alt={80}width={360} height={300} className='2-image'>
      </img>
</div>
<div className='text'>Prof. Samaranayake</div>
<div className='text1'>Director</div>
<div className='text2'>B.Sc Eng Hons Moratuwa, MLS (Colombo),
</div>
<div className='text3'>PhD University of Malaya</div>
<div className='text4'>e-mail: directorlib@pb.lk</div>
<div className='text5'>Tel: +94 11 564 6798 (Direct)</div>
<div className='text6'>Fax: +94 11 280 4195</div>
</div>

<div className='rectangle3'>
<img src={Image3} alt={80}width={450} height={300} className='3-image'>
      </img>
  </div>



<div className='text7'>Mr. Thisera</div>
<div className='text8'>Executive Director</div>
<div className='text9'>TMLS UOC, B.A. Hons LIS UOK, CTHE USJ</div>
<div className='text10'>e-mail: execdirectorlib@pb.lk</div>
<div className='text11'>Tel: +94 11 564 6797 (Direct)</div>
<div className='text12'>Fax: +94 11 280 4196</div> 

<div className='text13'>Mrs. Wickramaratne</div>
<div className='text14'>Librarian</div>
<div className='text15'>BA(Hons) LIS (Kelaniya),PGD in LIS (Kelaniya), </div>
<div className='text16'> MSSc (Kelaniya)</div>
<div className='text17'>ee-mail: librarian@pb.lk</div>
<div className='text18'>Tel: +94 11 564 6799 (Direct)</div>
<div className='text19'>Fax: +94 11 280 4194</div>
<div className='copy'>
            <small>Copyright © 2022 PLSL » Public Libraria of Sri Lanka. All Rights Reserved</small>
        </div>
        </div>

</div>
  
  )
}

export default Staff

