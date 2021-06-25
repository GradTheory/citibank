import React from 'react'
import heading_image from '../Assets/heading_image.png';
import citi from '../Assets/citi.png';
import '../App.css'

function Heading() {
    return (
        <div className="heading">

            <div className="heading_image">
            <img src={heading_image} alt="Loading" />
                </div>

            <div className="heading_middle">
                <div>
                <div className="heading_middle_image_back"></div>
                <div className="heading_middle_image">
            <img src={citi} alt="Loading" /></div>
            
                </div>

                <div className="heading_middle_1">
                    Citi Bank
                    </div>

                    <div className="heading_middle_2">
                    Markets Division (Sales and Trading) Virtual Intern Experience 
                    </div>

                    

                </div>
                <span className="heading_line_1">
                   
                    </span>

                <div className="heading_lower">

                

                    <div className="heading_lower_left">
                        2000 students have already applied
                        </div>

                        
                    <div className="heading_lower_right">
                        {/* <span className="heading_lower_right2">
                        Apply
                        </span> */}
                        
                         </div>

                         <span className="heading_lower_right2">
                        Apply
                        </span> 

                    <span className="heading_line_2">
                   
                   </span>

                   </div>

        </div>
    )
}

export default Heading
