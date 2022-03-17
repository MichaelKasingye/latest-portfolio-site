import React from 'react'
import headerStyles from "../styles/Header.module.css";
// import Image from 'next/image';
function Hero() {
  const heroData = [
    {
      title:"Protection",
      details:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis"
    },
    {
      title:"Education",
      details:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis"
    },
    {
      title:"Knowledge",
      details:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis"
    },
  ]
    return (
      <header id="hero">
      <div className="container">
        {/* Uncomment below if you prefer to use an image logo */}
        <div className=' border-start border-danger w-75 d-flex align-items-center justify-content-between'>
        <h1 className='mx-4'>
          <a href="index.html">Michael Kasingye</a>
        </h1>
        <div className="mr-auto"><img src="https://avatars.githubusercontent.com/u/42036497?v=4" alt="portfolio pic" width={200} className=" rounded-circle img-fluid"/></div>
        </div>
        <h2 >
          I'm a passionate <span>Software Developer / Coding Instructor</span> 
        </h2>
        {/* .navbar */}
        <div className="social-links">
          <a href="#" className="twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </header>
    
    )
}

export default Hero
