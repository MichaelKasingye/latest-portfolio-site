import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
// import serviceCss from "./Service.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
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
        
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-book" style={{ color: "#5578ff" }} />
              <h3>Dolor Sitema</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-book" style={{ color: "#e80368" }} />
              <h3>Sed perspiciatis</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-book" style={{ color: "#e361ff" }} />
              <h3>Magni Dolores</h3>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-book" style={{ color: "#11dbcf" }} />
              <h3>Midela Teren</h3>
            </div>
          </div>
         
        </div>
      </div>

      <div className="row" data-aos="fade-right">
        <div className="col-lg-6">
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item pb-0" >
            <h4>Alice Barkley</h4>
            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Master of Fine Arts &amp; Graphic Design</h4>
            <h5>2015 - 2016</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
          </div>
          <div className="resume-item">
            <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
            <h5>2010 - 2014</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-right">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Senior graphic design specialist</h4>
            <h5>2019 - Present</h5>
            <p><em>Experion, New York, NY </em></p>
            <ul>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
  );
}

export default Services;