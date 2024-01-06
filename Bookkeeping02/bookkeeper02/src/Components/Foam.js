import React from 'react'
import './form.css'
import Button from 'react-bootstrap/Button';

export default function Form() {
  return (
    
    <div>
      
      <div className="form-box"> 
    <div className="form-rectangle"> 
    <div className='text-U'>Name* :</div>
    <div className='text-V'>NIC* :</div>
    <div className='text-W'>Gender* :</div>
    <div className='text-X'>Birthday* :</div>
    <div className='text-Y'>Mobile No* :</div>
    <div className='text-Z'>Email* :</div>
    <div className='text-M'>Male</div>
    <div className='text-F'>Female</div>

    <>
 
      <Button as="input" type="button" value="Add" />{' '}
      <Button as="input" type="submit" value="Update" />{' '}
      <Button as="input" type="reset" value="Remove" />
    </>

    
    <div className="form-text"> Library Staff Form</div>
    <div>
      
      </div> 


    <div className="form-box1">
<div className="form-rectangle1" />
</div>
<div className="form-text1">Member Form</div>
<br/>

<div className="form-box2">
<div className="form-rectangle2" />
</div>
<div className="form-tex2">Library Staff Form</div>
<br/>

<div className="form-box3">
<div className="form-rectangle3" />
</div>
<div className="form-text3">Library Admin Form</div>
<br/>

<div className="form-box4">
<div className="form-rectangle4" />
</div>
<div className="form-text4">Admin Details</div>
<br/>
<div className="form-box5">
<div className="form-rectangle5" />
</div>
<div className="form-text5">User Details</div>
<br/>

<div className='box-U'>
<div className='rectangle-U'/>
</div>
<div className='box-V'></div>
<div className='recangle-V'>
</div>
<div className='box-W'>
<div className='ellipse-1'/>
<div className='ellipse-2'/>
</div>
<div className='box-X'>
<div className='recangle-X'/>
</div>
<div className='box-Y'>
<div className='recangle-Y'/>
</div>
<div className='box-Z'>
<div className='recangle-Z'/>
</div>      
  
  
</div>
</div>
   
   </div>
     
    
  );
};