import React from 'react'
import video from '../Assets/video.png';
import '../App.css'

function Introductory() {
    return (
        <div className="intro">
         
         <div className="intro_heading">
         Introductory video from Citi
             </div>

             <div className="intro_middle">
             Hear Stuart Staley, Head of Markets & Securities Services APAC at Citi, introduce the Citi – Markets Division (Sales and Trading) Virtual Intern Experience.
             </div>

             <div className="intro_image">
             <img src={video} alt="Loading" />
             </div>
           
        </div>
    )
}

export default Introductory
