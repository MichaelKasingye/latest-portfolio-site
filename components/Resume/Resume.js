import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import {resumeExperience, resumeIcons} from "../../utilities/sections/resume"

import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

function Services() {

  useEffect(() => {
    Aos.init({duration: 900})
   }, [])

  


  return (
    <section id="resume" className="resume">
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>
        <p>Check My Resume</p>
      </div>

 {/* ======= Interests ======= */}
 <div className="interests container" data-aos="fade-down">

 <div className="section-title">
        <h2>Technical Skills</h2>
        {/* <p>Check My Resume</p> */}
      </div>

        <div className="row my-4" data-aos="fade-right">
        {
            resumeIcons.map((info, index) =>(
              <div key ={index}className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
              {info.icon}
                <h3>{info.name}</h3>
              </div>
            </div>
            ))
          }
        </div>
      </div>

      <div >
      
          <h3 className="resume-title">Professional Experience</h3>
        <div className="grid" data-aos="fade-right">


        {
            resumeExperience.map((info, index) =>(
          <div className="resume-item " data-aos="fade-up" key = {index} >
          <h4>{info.jobTitle}</h4>
          <h5>{info.period}</h5>
          <p><em>{info.companyAndLocation}</em></p>
          <ul>
            { info.jobDescriptions.map((list, index) =>(
              <li  key = {index}>{list}</li>
            ))}
      
          </ul>
        </div>
            ))
          }
          
         
        </div>
      </div>

    </div>
  </section>
  );
}

export default Services;
