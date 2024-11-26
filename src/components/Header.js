import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-between bg-white drop-shadow-md py-6 px-20 text-blue-950'>
      <div className=' pl-11'>
        <img  className="w-32" src="https://www.studynextoverseas.com/assets/img/logo1.png" alt="Gyoverseaseducation"/>
      </div>
      <div className="flex text-center">
        <ul className='flex pt-5 justify-around text-blue-950 text-xl align-middle' >
          <li className='ml-8 border-b-2 border-transparent hover:border-blue-950 duration-500'>
            <Link to="/">Home</Link>
          </li>
          <li className='ml-8 border-b-2 border-transparent hover:border-blue-950 duration-500'>
            <Link to="/about">About</Link>
          </li>
          <li className='ml-8 border-b-2 border-transparent hover:border-blue-950 duration-500'>
            <Link to="/services">Services</Link>
          </li>
          <li className='ml-8 border-b-2 border-transparent hover:border-blue-950 duration-500'>
            <Link to="/australia">Countries</Link>
          </li>
          <li className='ml-8 border-b-2 border-transparent hover:border-blue-950 duration-500'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header