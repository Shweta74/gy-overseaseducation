import React from 'react'
import { Link } from 'react-router-dom'
import {  FaEnvelope, FaPhoneAlt, FaSearchLocation, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
const Footer = () => {
  return (
    <div className='bg-blue-950  text-slate-300 p-20'>
      <div className=' text-xl flex flex-wrap justify-around border-b border-slate-50'>
        <div className=" p-5 ">
          <h4 className='text-xl font-bold pb-2 '>Quick Links</h4>
            <ul  className=' '>
              <li className='pt-2'>
                <Link to="/" className='text-slate-300 hover:text-white'>Home</Link>
              </li>
              <li className='pt-2'>
                <Link to="/about" className='text-slate-300 hover:text-white'>About</Link>
              </li>
              <li className='pt-2'>
                <Link to="/services" className='text-slate-300 hover:text-white'>Services</Link>
              </li>
              <li className='pt-2'>
                <Link to="/countries" className='text-slate-300 hover:text-white'>Countries</Link>
              </li>
              <li className='pt-2'>
                <Link to="/contact" className='text-slate-300 hover:text-white'>Contact</Link>
              </li>
            </ul>
        </div>
   
        <div className='mb-10 items-center' >
            {/* <h4 className='text-xl font-bold pb-2  '>Bengaluru</h4> */}
          <div className=' mt-4'>
            <span className='flex  mb-2'><FaSearchLocation className='text-xl  m-2 mt-1 text-slate-300 hover:text-white'/>: #103, 4th Main, Hill View Garden,<br/>&nbsp;
                    Thurahalli, Bengaluru, Karnataka 560061
              </span>
              <span className='flex mb-2 '><FaPhoneAlt className='text-xl m-2 mt-1 text-slate-300 hover:text-white'/>: +91 9915808816</span>
              <span className='flex '> <FaEnvelope className='text-xl  m-2 mt-1 text-slate-300 hover:text-white'/>: info@gyoverseaseducation.com</span>
             
          </div>
        
        </div>
        <div className=" p-5 ">
              <h4 className='text-xl font-bold pb-4  '>Follow us</h4>
             <div className='flex '>
                <span className='pr-2'>
                  <Link to="/"><FaFacebook className='text-4xl text-slate-300 hover:text-white'/></Link>
                </span>
                <span className='pr-2'>
                <Link to="/about"><FaInstagram className='text-4xl text-slate-300 hover:text-white'/></Link>
                </span>
                <span className='pr-2'>
                <Link to="/services"><FaLinkedin className='text-4xl text-slate-300 hover:text-white'/></Link>
                </span>
             </div>

        </div>
      </div>
        <p className='text-base text-center m-5'><span > ©Copyright <Link to="http://www.paulmerchants.net/">GY Overseas Education</Link>. All Right Reserved</span></p>
    </div>
  )
}

export default Footer