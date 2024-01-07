import React from 'react'
import './book.css'
import GreenBook from './Images/green-book.png'
import { Link } from 'react-router-dom'

function Book() {
  return (
    <div>
      <Link to='Book'></Link>
      <div className="b-box">
<div className="b-rectangle" />
</div>

<div className="b-label">
<div className="b-text-wrapper">Dork Diaries: Dear Dork</div>
</div>

<div className="b1-label">
<div className="b1-text-wrapper">by :</div>
</div>

<div className="b2-box">
<div className="b2-rectangle" />
</div>

<div className="b2-label">
<div className="b2-text-wrapper">Russell, R.R.</div>
</div>


<div className="b3-label">
<p className="medium-english">
<span className="b3-text-wrapper">Medium&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
<span className="b1-span">
English
<br />
</span>
<span className="b4-text-wrapper">Publisher&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span className="b2-span">
Simon and Schuster
<br />
</span>
<span className="b5-text-wrapper">
Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>
<span className="b3-span">
2012
<br />
</span>
</p>
</div>

<div className="b4-label">
<p className="note-dork-diaries">
<span className="b6-text-wrapper">
Note&nbsp;&nbsp;
<br />
</span>
<span className="b4-span">
Dork Diaries, Nikki has to solve many problems. Her arch-nemesis, Mackenzie, is spreading rumours about
Nikki&#39;s crush on Brandon through her column in the school paper! Mackenzie has started a war. Nikki will
end it!
</span>
</p>
</div>
<div className="b3-box">
<div className="b3-rectangle" />
</div>

<div className="b4-box">
<img src={GreenBook} alt={11}width={20} height={20} className='book-image'>
      </img>
</div>

<div className="b5-label">
<div className="b7-text-wrapper">Keywords</div>
</div>

<div className="b6-label">
<div className="b8-text-wrapper">Subject</div>
</div>

<div className="b4-box">
<div className="b4-rectangle" />
</div>

<div className="b7-label">
<div className="b9-text-wrapper">Dork diaries</div>
</div>

<div className="b7-box">
<div className="b7-rectangle" />
</div>

<div className="b8-label">
<div className="b10-text-wrapper">Fiction</div>
</div>

<div className="b8-box">
<div className="b8-rectangle" />
</div>

<div className="b9-label">
<div className="b11-text-wrapper">Click to Reserve</div>
</div>





      
    </div>
  )
}

export default Book

