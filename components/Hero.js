import React from 'react'
import headerStyles from "../styles/Header.module.css";
// import Image from 'next/image';
import {socialMediaIcons} from "../utilities/sections/heroAndAbout"
function Hero() {
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
          {
            socialMediaIcons.map((info, index) =>(
              <a key = {index} href={info.link} className={info.css}>
            <i className={info.icon} />
          </a>
            ))
          }
        </div>
      </div>
    </header>
    
    )
}

export default Hero
