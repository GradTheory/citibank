import React from 'react'
import gift from '../Assets/gift.png';
import briefcase from '../Assets/briefcase.png';
import cap from '../Assets/cap.png';
import chronometer from '../Assets/chronometer.png';
import '../App.css'

function Why() {
    return (
        
            <div className="why_body">

                      <div className="why_heading">
Why join this Virtual Reality Intern Experience?

                      </div>

                      <div className="why_left">
    Are you interested in exploring a career within a global bank? Are you naturally curious and like to challenge the status quo? Do you want to solve challenging financial problems within a top tier team?  Are you interested to learn more about the ever-changing global financial markets?

<br /> <br />Citi is committed to giving you every opportunity to learn and develop. As a part of that we have designed this Virtual Intern Experience to help you build the skills and confidence to pursue a career with us!

<br /> <br /> This program will give you an insight on some of the challenging problems that Citi tackles each day within the global Markets division!

<br /> <br />Kick start your career with us by enrolling in the Citi – Markets Division (Sales and Trading) Virtual Intern Experience below.

                      </div>

                      <div >
                      
                      <div className="why_right_image_1">
                      <img src={gift} alt="Loading" />
                      </div>

                      <div className="why_right_1">
                      This Virtual Reality Intern Experience is free for students
                      </div>

                      <div className="why_right_image_2">
                      <img src={chronometer} alt="Loading" />
                      </div>

                      <div className="why_right_2">
                      This program is self-paced. It takes 5-6 hours to complete this Virtual Reality Intern Experience
                      </div>

                      <div className="why_right_image_3">
                      <img src={briefcase} alt="Loading" />
                      </div>

                      <div className="why_right_3">
                      Get practical skills and experience from Citi
                      </div>

                      <div className="why_right_image_4">
                      <img src={cap} alt="Loading" />
                      </div>

                      <div className="why_right_4">
                      Use this experience in your CV in-line with our policy
                      </div>

                      </div>

   
            </div>
       
    )
}

export default Why
