import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import ArticleCards from '../ArticleCards/ArticleCards'

function Blogs() {

  useEffect(() => {
    Aos.init({duration: 900})
   }, [])

    return (
      <section id="contact" className="contact">
      <div className="container">
  
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>
  
        <form  role="form" className="php-email-form mt-4" data-aos="fade-up"name="contact"  method="POST"  data-netlify="true">
          <div className="row">
            <div className="col-md-6 form-group" >
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0" data-aos="fade-up">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
            </div>
          </div>
          <div className="form-group mt-3" data-aos="fade-right">
            <input type="text" className="form-control" name="subject" id="subject contact_form_name" placeholder="Subject"  required/>
          </div>
          <div className="form-group mt-3" data-aos="fade-left">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" id="contact-form-message" type="text"  required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
  
      </div>
    </section>
    )
}

export default Blogs
