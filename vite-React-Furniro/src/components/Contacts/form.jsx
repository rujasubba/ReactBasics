import React, { useRef } from "react"
import "../../styles/contact.scss"

import { Icons } from "../../assets";

function FormSection() {
    const fullName =useRef(null)
    const email =useRef(null)
    const subject =useRef(null)
    const message =useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            fullName: fullName.current.value,
            email: email.current.value,
            message: message.current.value
        };
        console.log("form", payload);
    
    };
    return(
        <React.Fragment>
            <div className="container">
                 <div className="info-upper">
                      <h1>Get In Touch With Us</h1>
                     <p>For More Information About Our Product & Services, Please Feel Free To Drop Us An Email.
                     Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                 </div>
                 <div className="info-lower">
                     <div className="info-items">
                         <div class="info-item">
                             <span><img src={Icons.Map} alt="map"/></span>
                              <h2>Address</h2>
                              <p>236 5th SE Avenue, New York NY10000, United States</p>
                          </div>
                         <div class="info-item">
                             <span><img src={Icons.Phone} alt="phone"/></span>
                              <h2>Phone</h2>
                              <p>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
                         </div>
                         <div class="info-item">
                              <span><img src={Icons.Clock} alt="clock"/></span>
                              <h2>Working Time</h2>
                             <p>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
                         </div>

                     </div>
            
                      <div className="form">

                        <form onSubmit={handleSubmit} id="contactForm">
                              <label>Your name</label>
                              <input ref={fullName} type="text" id="fullName" name="fullName" placeholder="Abc" required />

                              <label>Email address</label>
                              <input ref={email} type="email" id="email" name="email" placeholder="Abc@def.com" required />

                              <label>Subject</label>
                              <input ref={subject} type="text" id="subject" name="subject" placeholder="This is optional" />

                              <label>Message</label>
                              <textarea ref={message} id="message" name="message" placeholder="Hi! I'd like to ask about" required></textarea>

                              <button type="submit">Submit</button>

                        </form>
                       
                     </div>
                </div>
            </div>

         </React.Fragment>
         
    )
}

export default FormSection;