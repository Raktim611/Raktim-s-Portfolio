import React from "react";
import { useRef,useEffect,useState } from "react";
import emailjs from "@emailjs/browser"
import "./Contactme.css"




export default function Contactme(){

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID , form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Message sent successfully :) ")
          form.current.reset()
        },
        (error) => {
          alert("Error Occured while sending message :( ");
        },
      );
  };








    return(
        <>
        
        <form className="contactform" ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label> */}
        <input type="text" name="user_name"  placeholder="Your Name" required/>
        {/* <label>Email</label> */}
        <input type="email" name="user_email" placeholder="Your Email"  required/>
        {/* <label>Message</label> */}
        <textarea name="message" placeholder="Your Message" rows="5"  required />
        <button type="submit">Send</button>
        </form>
        
    
        </>
    )
}