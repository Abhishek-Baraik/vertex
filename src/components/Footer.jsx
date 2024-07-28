import React from 'react'
import { Link } from 'react-router-dom'
import CurtainButtonGray from './CurtainButtonGray'
import './Footer.css'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; 

  return (
    <footer>
    <section className='bg-primary py-10 lg:px-[9rem] px-[1.5rem] flex flex-col sm:flex-row gap-10'>
      <div className='text-white sm:w-1/3'>
      <a href="https://www.vertexexecutiverecruiting.com/">
          <img src="logo.png" className="w-[150px] sm:w-[300px]" alt="" />
        </a>
        <p className='p mt-4'>At Vertex Executive Recruiting, we excel in executive search and recruitment. Our integrity, innovation, and global reach make us the trusted partner for organizations seeking top talent and executives looking for new opportunities.</p>
      </div>
      <div className='sm:w-1/3'>
        <h4 className='h3 text-white'>Quick Links</h4>
        <div className="divider w-1/5 border-b-2 border-b-white"></div>
        <ul className={`sm:grid sm:grid-cols-2 mt-4 gap-6 font-normal items-center text-white`}>
        <Link onClick={scrollToTop} to="/" >
          <li className="footlinks cursor-pointer">Home</li>
        </Link>
        <Link onClick={scrollToTop} to="/team" >
          <li className="footlinks cursor-pointer">Team</li>
        </Link>
        <Link onClick={scrollToTop} to="/about" >
          <li className="footlinks cursor-pointer">About</li>
        </Link>
        <Link onClick={scrollToTop} to="/employers" >
          <li className="footlinks cursor-pointer">Employers</li>
        </Link>
        <Link onClick={scrollToTop} to="/candidates" >
          <li className="footlinks cursor-pointer">Candidates</li>
        </Link>
        <Link onClick={scrollToTop} to="/services" >
          <li className="footlinks cursor-pointer">Services</li>
        </Link>
        <Link onClick={scrollToTop} to="/faqs" >
          <li className="footlinks cursor-pointer">FAQS</li>
        </Link>
        <Link onClick={scrollToTop} to="/blog" >
          <li className="footlinks cursor-pointer">Blog</li>
        </Link>
        <Link onClick={scrollToTop} to="/contact">
          <li className="footlinks cursor-pointer">Contact</li>
        </Link>
      </ul>
      </div>
      <div className='text-white md:w-1/3'>
        <h4 className='h3'>Newsletter</h4>
        <div className="divider w-1/5 border-b-2 border-b-white"></div>
        <p className='p mt-4 mb-4'>Enter your email address here to subscribe to our newsletter. We promise not to spam!</p>
        <div className='flex flex-col lg:flex-row gap-3'>
        <input type="email" className='p-2 rounded-md' placeholder='email'/>
        <CurtainButtonGray text='Subscribe'/>
        </div>
      </div>
    </section>
    <div className='bg-tertiary text-center p-10 flex items-center justify-center font-medium text-white'>
    © Copyright 2023 All Rights Reserved  
    </div>
    </footer>
  )
}

export default Footer