import React from 'react'
import { Link } from 'react-router-dom'
import CurtainButtonGray from './CurtainButtonGray'

const Footer = () => {
  return (
    <footer className='bg-primary paddings flex flex-col gap-4'>
      <div className='text-white'>
      <a href="https://www.vertexexecutiverecruiting.com/">
          <img src="logo.png" className="w-[150px] sm:w-[300px]" alt="" />
        </a>
        <p className='p mt-4'>At Vertex Executive Recruiting, we excel in executive search and recruitment. Our integrity, innovation, and global reach make us the trusted partner for organizations seeking top talent and executives looking for new opportunities.</p>
      </div>
      <div>
        <h4 className='h3'>Quick Links</h4>
        <div className="divider w-1/5 border-b-2 border-b-white"></div>
        <ul className={`sm:flex mt-4 gap-6 font-normal items-center text-white`}>
        <Link to="/" >
          <li className="navlinks cursor-pointer">Home</li>
        </Link>
        <Link to="/team" >
          <li className="navlinks cursor-pointer">Team</li>
        </Link>
        <Link to="/about" >
          <li className="navlinks cursor-pointer">About</li>
        </Link>
        <Link to="/employers" >
          <li className="navlinks cursor-pointer">Employers</li>
        </Link>
        <Link to="/candidates" >
          <li className="navlinks cursor-pointer">Candidates</li>
        </Link>
        <Link to="/services" >
          <li className="navlinks cursor-pointer">Services</li>
        </Link>
        <Link to="/faqs" >
          <li className="navlinks cursor-pointer">FAQS</li>
        </Link>
        <Link to="/blog" >
          <li className="navlinks cursor-pointer">Blog</li>
        </Link>
        <Link to="/contact">
          <li className="navlinks cursor-pointer">Contact</li>
        </Link>
      </ul>
      </div>
      <div className='text-white'>
        <h4 className='h3'>Newsletter</h4>
        <div className="divider w-1/5 border-b-2 border-b-white"></div>
        <p className='p mt-4 mb-4'>Enter your email address here to subscribe to our newsletter. We promise not to spam!</p>
        <input type="email" placeholder='email'/>
        <CurtainButtonGray text='Subscribe'/>
      </div>
    </footer>
  )
}

export default Footer