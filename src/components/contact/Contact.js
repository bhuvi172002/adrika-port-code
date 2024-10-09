import React from 'react'
import './contact.css'
import { Link } from 'react-scroll';
function Contact() {
  return (
    <div id='contact' className='contactcon'>
          <div className="cover">
               <div className="contacthalf">
                <h1><i>Contact Me</i></h1>
                <p>Let's Connect! Got something on your mind? We're just a message away. Drop us a line, and let's start the conversation!</p>
               </div>
               <div className="mail">
              
         <div className="goup">
            
            <Link  className="nav-link gtt" to="home" smooth={true} duration={500}>Go To TOP</Link>
      
   </div>
               </div>
             
          </div>

    </div>
  )
}

export default Contact
