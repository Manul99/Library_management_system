import React from 'react'
import './user.css'
import Button from 'react-bootstrap/Button';


export default function User() {
  return (
    <div>

        <div className="User-box"> 
    <div className="User-rectangle"> 
    <div className='text-user1'>Name* :</div>
    <div className='text-user2'>Birthday* :</div>
    <div className='text-user3'>Gender* :</div>
    <div className='text-user5'>Email* :</div>
    <div className='text-user6'>Mobile No* :</div>
    <div className='text-user7'>Male</div>
    <div className='text-user8'>Female</div>

    <>
 
      <Button as="input" type="button" value="Add" />{' '}
      <Button as="input" type="submit" value="Update" />{' '}
      <Button as="input" type="reset" value="Remove" />
    </>

    
    <div className="User-text"> Member Form</div>
    <div>
      
      </div> 


    <div className="User-box1">
<div className="User-rectangle1" />
</div>
<div className="User-text1">Member Form</div>
<br/>

<div className="User-box2">
<div className="User-rectangle2" />
</div>
<div className="User-tex2">Library Staff Form</div>
<br/>

<div className="User-box3">
<div className="User-rectangle3" />
</div>
<div className="User-text3">Library Admin Form</div>
<br/>

<div className="User-box4">
<div className="User-rectangle4" />
</div>
<div className="User-text4">Feedbacks from Members</div>
<br/>
<div className="User-box5">
<div className="User-rectangle5" />
</div>
<div className="User-text5">User Details</div>
<br/>

<div className='box1-User'>
<div className='rectangle1-User'/>
</div>
<div className='box2-User'></div>
<div className='recangle2-User'>
</div>
<div className='box3-User'>
<div className='ellipse-1U'/>
<div className='ellipse-2U'/>
</div>
<div className='box4-User'>
<div className='recangle4-User'/>
</div>
<div className='box5-User'>
<div className='recangle5-User'/>
</div>
<div className='box6-User'>
<div className='recangle6-User'/>
</div>  

</div>
    </div>  
    </div>
    
  )
}