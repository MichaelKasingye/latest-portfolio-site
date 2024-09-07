import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";
import Link from "next/link";

function Blogs() {
  const alert = useAlert();
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_s6tn0kf",
        "template_gkj4gox",
        form.current,
        "-lvygONs2ISFmBOIZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setMessage(true);

          setInputs({
            email: "",
            name: "",
            message: "",
            subject: "",
          });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };
  console.log(inputs);
  console.log(message);

  useEffect(() => {
    if (message === true) {
      alert.show("Your message has been sent. Thank you!");
    }
  }, [alert, message]);

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          role="form"
          className="php-email-form mt-4"
          data-aos="fade-up"
          name="contact"
          data-netlify="true"
        >
          {/* <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div
              className="col-md-6 form-group mt-3 mt-md-0"
              data-aos="fade-up"
            >
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                value={inputs.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group mt-3" data-aos="fade-right">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject contact_form_name"
              placeholder="Subject"
              required
              value={inputs.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3" data-aos="fade-left">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              id="contact-form-message"
              type="text"
              required
              value={inputs.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            {!inputs.email || !inputs.subject || !inputs.message ? (
              " "
            ) : (
              <button type="submit">
                {!loading ? "Send Message" : "Sending..."}
              </button>
            )}
          </div> */}
        <button type="submit">
        <Link href="mailto:michaelkasingye@gmail.com">
        Contact Me Here
        </Link>
              </button>
        </form>



      </div>
    </section>
  );
}

export default Blogs;
