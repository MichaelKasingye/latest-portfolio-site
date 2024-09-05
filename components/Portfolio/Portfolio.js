import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import motto from "./Motto.module.css";
import {portfolios} from "../../utilities/sections/portfolio"

function Motto() {
    useEffect(() => {
        Aos.init({duration: 900})
       }, [])

    return (
        <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Projects</p>
      </div>

      <div className="row portfolio-container" data-aos="fade-left">

      {
            portfolios.map((info, index) =>(
              <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-app" data-aos="fade-up">
                <a href={info.link} target="_blank" rel="noopener noreferrer">
          <div className="portfolio-wrap">
            <img src={info.img} className="img-fluid" alt={info.description}/>
            <div className="portfolio-info">
              <h4>{info.title}</h4>
              <p>{info.description}</p>
              <div className="portfolio-links">
              </div>
            </div>
          </div>
          </a>
        </div>
            ))
          }

     

      </div>

    </div>
  </section>
    )
}

export default Motto
