import React from 'react'
import './feedback.css'
import { Link } from 'react-router-dom';



export default function Feedback() {
  return (
    <div><Link to="/feedback"></Link><div className="f-box">
      <div className="f-rectangle">
        <div className='f-text'>Feedback</div>
      </div></div><div className="label1">
        <p className="what-do-you-think-of">
          <span className="text-wrapper1">What do you think of the our library and services?</span>
          <span className="span1">&nbsp;</span>
          
        </p>
      
      </div><div className="label2">
        <p className="text-wrapper2">Do you have any thoughts you would like to share?</p>
        </div><div className="box1">
        <div className="rectangle1" />

      </div><div className="label3">
        <p className="text-wrapper3">May we follow up on your feedback?</p>
      </div><div className="box3">
        <div className="ellipse1" />
      </div><div className="label4">
        <div className="text-wrapper4">Yes</div>
      </div><div className="box4">
        <div className="ellipse2" />
      </div><div className="label5">
        <div className="text-wrapper5">No</div>
      </div><div className="box5">
        <div className="rectangle3" />
      </div><div className="label6">
        <div className="text-wrapper6">Chat here....</div>
      </div><div className="box6">
        <div className="rectangle4" />
      </div><div className="label7">
        <div className="text-wrapper7">send</div>
      </div><div className="box7">
        <div className="rectangle5" />
      </div><div className="label8">
        <div className="text-wrapper8">Submit</div>
      </div><div className="box8">
        <div className="rectangle6" />
      </div><div className="label9">
        <div className="text-wrapper9">Cancel</div>
        </div></div>
      );
      };
