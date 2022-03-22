import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import {about} from "../../utilities/sections/heroAndAbout"

function AboutUs() {

  useEffect(() => {
    Aos.init({duration: 2000})
   }, [])

    return (
      <section id="about" className="about">
      {/* ======= About Me ======= */}
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/svg/ideas.svg" className="img-fluid image" alt="image about me" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{about.title}</h3>
            <p className="fst-italic">
            {about.description1}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>{about.experience}</strong></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Experience:</strong>{" "}
                    <span>{about.period}</span>
                  </li>
                 
                </ul>
              </div>
            </div>
            <p>
            {about.description2}

            </p>
          </div>
        </div>
      </div>
    </section>

    )
}

export default AboutUs
