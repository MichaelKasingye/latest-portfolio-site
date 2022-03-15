import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'
import Header from '../components/Header'

function contact() {

  useEffect(() => {
    Aos.init({duration: 2000})
   }, [])

    return (
        <>
          <Header 
      title="The stella center -Contact"
      metaName="The Stella Center -Contact"
      metaContent="Stella Center Page, details about child aid -Team"
      />
      <BreadCrumbs page="Contact"/>

       <section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div>
      <iframe
        style={{ border: 0, width: "100%", height: 270 }}
        src="https://maps.google.com/maps?q=ntinda%20uganda%20capital%20shoppers&t=k&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder={0}
        allowFullScreen
      />
    </div>
    <div className="row mt-5">
      <div className="col-lg-4">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt" />
            <h4>Location:</h4>
            <p>Capital shoppers building, 2nd floor</p>
          </div>
          <div className="email">
            <i className="bi bi-envelope" />
            <h4>Email:</h4>
            <p>thestellacentre@gmail.com</p>
          </div>
          <div className="phone">
            <i className="bi bi-phone" />
            <h4>Call:</h4>
            <p>+256-755 032412</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 mt-5 mt-lg-0">
        <form
          role="form"
          className="php-email-form"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Message"
              required
              defaultValue={""}
            />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default contact
