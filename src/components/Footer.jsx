import React from 'react'
import { MdMail } from "react-icons/md"
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px', backgroundColor:'purple',color:'white'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
        <h3>Contact Us</h3>
        <h5 className='fw-bolder'><MdMail /> resumebuilder@gmail.com</h5>
        <h5 className='fw-bolder'><FaPhoneAlt />9987654230</h5>
        <h4>Connect With Us</h4>
        <div className='d-flex justify-content-center fs-4 my-3'>
            <FaWhatsapp className='me-3'/>
            <FaInstagram className='me-3'/>
            <FaFacebook/>
        </div>
        <p>Design & Built using React</p>

    </div>
  )
}

export default Footer