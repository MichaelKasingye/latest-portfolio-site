import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'
import Header from '../components/Header'

function Team() {

  useEffect(() => {
    Aos.init({duration: 2000})
   }, [])

    return (
        <>
        <Header 
      title="The stella center -Team"
      metaName="The Stella Center -Team"
      metaContent="Stella Center Page, details about child aid -Team"
      />
      <BreadCrumbs page="Team"/>
          

    <section id="team" className="team section-bg mt-2">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Team</h2>
      <p>Our Hard working Team</p>
    </div>
    <div className="row">

      <div className="col-lg-6">
        <div className="member d-flex align-items-start">
          <div className="pic">
            <img src="https://avatars.githubusercontent.com/u/42036497?v=4" className="img-fluid" alt="work" />
          </div>
          <div className="member-info">
            <h4>Walter White</h4>
            <span>Chief Executive Officer</span>
            <p>Explicabo voluptatem mollitia et repellat</p>
            <div className="social">
              <a href="#">
                <i className="ri-twitter-fill" />
              </a>
              <a href="#">
                <i className="ri-facebook-fill" />
              </a>
              <a href="#">
                <i className="ri-instagram-fill" />
              </a>
              <a href="#">
                {" "}
                <i className="ri-linkedin-box-fill" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mt-4 mt-lg-0">
        <div className="member d-flex align-items-start">
          <div className="pic">
            <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="work" />
          </div>
          <div className="member-info">
            <h4>Sarah Jhonson</h4>
            <span>Product Manager</span>
            <p>Aut maiores voluptates amet et quis</p>
            <div className="social">
              <a href="#">
                <i className="ri-twitter-fill" />
              </a>
              <a href="#">
                <i className="ri-facebook-fill" />
              </a>
              <a href="#">
                <i className="ri-instagram-fill" />
              </a>
              <a href="#">
                {" "}
                <i className="ri-linkedin-box-fill" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4">
        <div className="member d-flex align-items-start">
          <div className="pic">
            <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="work" />
          </div>
          <div className="member-info">
            <h4>William Anderson</h4>
            <span>CTO</span>
            <p>Quisquam facilis cum velit laborum corrupti</p>
            <div className="social">
              <a href="#">
                <i className="ri-twitter-fill" />
              </a>
              <a href="#">
                <i className="ri-facebook-fill" />
              </a>
              <a href="#">
                <i className="ri-instagram-fill" />
              </a>
              <a href="#">
                {" "}
                <i className="ri-linkedin-box-fill" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4">
        <div className="member d-flex align-items-start">
          <div className="pic">
            <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="work" />
          </div>
          <div className="member-info">
            <h4>Amanda Jepson</h4>
            <span>Accountant</span>
            <p>Dolorum tempora officiis odit laborum officiis</p>
            <div className="social">
              <a href="#">
                <i className="ri-twitter-fill" />
              </a>
              <a href="#">
                <i className="ri-facebook-fill" />
              </a>
              <a href="#">
                <i className="ri-instagram-fill" />
              </a>
              <a href="#">
                {" "}
                <i className="ri-linkedin-box-fill" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}

export default Team
