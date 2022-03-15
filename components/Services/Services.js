import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
// import serviceCss from "./Service.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

function Services() {

  useEffect(() => {
    Aos.init({duration: 2000})
   }, [])

    const impact = [
        {
            content:"we choose veniam, quis nostrud exercitation ullamco",
           
        },
        {
            content:"support for, quis nostrud exercitation ullamco",
        }
        
    ]

  const serviceData = [
    {
      title: "Medical",
      description: "Minim veniam, quis nostrud exercitation ullamco",
      icon: (
        <i
          style={{ color: "#E1444D" }}
          className="bi bi-card-checklist p-3 pb-3 fs-1 text-start  d-flex align-items-start"
        ></i>
      ),
    },
    {
      title: "Counseling",
      description: "Minim veniam, quis nostrud exercitation ullamco",
      icon: (
        <i
          style={{ color: "#E1444D" }}
          className="bi bi-briefcase p-3 pb-3 fs-1 text-start  d-flex align-items-start"
        ></i>
      ),
    },
    {
      title: "Support",
      description: "Minim veniam, quis nostrud exercitation ullamco",
      icon: (
        <i
          style={{ color: "#E1444D" }}
          className="bi bi-bar-chart p-3 pb-3 fs-1 text-start  d-flex align-items-start"
        ></i>
      ),
    },
    {
      title: "Education",
      description: "Minim veniam, quis nostrud exercitation ullamco",
      icon: (
        <i
          style={{ color: "#E1444D" }}
          className="bi bi-brightness-high p-3 pb-3 fs-1 text-start  d-flex align-items-start"
        ></i>
      ),
    },
  ];
  return (
    <section id="service" style={{ paddingTop: "100px", backgroundColor:"#ecf0f1" }} className="about" >
      <div style={{ color: "#444444" }} className="container " data-aos="fade-up">
        <div className="row content">
          <div className="col-lg-6">
            <h2>Our Impact</h2>
            <h3>
              <span className="fw-light">
                Promoting social innovations and partnerships to bolster the
                struggle against poverty and social welfare in Africa.
              </span>
            </h3>

            {/* <div style={{height:"400px", overflow:"hidden"}}  >
        <img src="https://cdn.pixabay.com/photo/2014/04/24/10/09/children-331234_960_720.jpg"  style={{width:"100%", objectFit:"cover", height:"25rem"}} className="img-fluid  " alt="African child"/> 

        <div className={serviceCss.captionContainer}>

            <h3 className='text-light fs-1 mb-3'><span style={{color:"#d9232d"}} >Our</span> <span style={{color:"#F39C12"}} >impact</span></h3>

            <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
        className={serviceCss.swipperWrapper}
        >
            {impact.map((info, index) =>(
                <SwiperSlide key={index} className={serviceCss.captions}>
               <span style={{color:"#ecf0f1"}} className="fs-4">{info.content}</span>
          </SwiperSlide> 
            ))}

        </Swiper>
        </div>
        </div> */}

          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 services">
            {serviceData.map((info, index) => (
              <div className="col-md-6 mt-4 mt-md-0 w-100" key={index}>
                <div className="icon-box">
                  {info.icon}
                  <h4>
                    <a href="#">{info.title}</a>
                  </h4>
                  <p>{info.description}</p>
                </div>
              </div>
            ))}

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
