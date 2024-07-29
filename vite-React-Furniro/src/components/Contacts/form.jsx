import React, { useRef, useState } from "react"
import "../../styles/contact.scss"

import { Icons } from "../../assets";

function FormSection() {
    // const fullName =useRef(null)
    // const email =useRef(null)
    // const subject =useRef(null)
    // const message =useRef(null)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        // const payload = {
        //     fullName: fullName.current.value,
        //     email: email.current.value,
        //     message: message.current.value
        // };
    //     console.log("form", payload);

    const[fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const[subject, setSubject] = useState('')
    const[message, setMessage] = useState("")

    const handleSubmit = () =>{
        e.preventDefault();
        const payload = {
            fullName: fullName,
            email: email,
            subject: subject,
            message: message
        };

    }
    
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
                              <input type="text" id="fullName" name="fullName" placeholder="Abc" 
                                    value={fullName}
                                    onChange={(event) => {
                                        setFullName(event.target.value)
                                    }}/>

                              <label>Email address</label>
                              <input type="email" id="email" name="email" placeholder="Abc@def.com" 
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}/>

                              <label>Subject</label>
                              <input type="text" id="subject" name="subject" placeholder="This is optional" 
                                value={subject}
                                onChange={(event) => {
                                    setSubject(event.target.value)
                                }}/>

                              <label>Message</label>
                              <textarea id="message" name="message" placeholder="Hi! I'd like to ask about" 
                               value={message}
                               onChange={(event) => {
                                setMessage(event.target.value)
                                }}></textarea>

                              <button type="submit">Submit</button>

                        </form>
                       
                     </div>
                </div>
            </div>

         </React.Fragment>
         
    );
}

export default FormSection;