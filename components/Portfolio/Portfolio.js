import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import motto from "./Motto.module.css";

function Motto() {
    useEffect(() => {
        Aos.init({duration: 900})
       }, [])

    return (
        <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>My Works</p>
      </div>

      <div className="row portfolio-container" data-aos="fade-left">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-aos="fade-up">
          <div className="portfolio-wrap">
            <img src="assets/img/slide/slide-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>E-COMMERCE</h4>
              <p>Online shop displaying Items to buy</p>
              <div className="portfolio-links">
                <a href="assets/img/slide/slide-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/slide/slide-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a href="assets/img/slide/slide-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/slide/slide-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a href="assets/img/slide/slide-3.jpg.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
    )
}

export default Motto
