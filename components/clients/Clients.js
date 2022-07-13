import React from "react";
import { clients } from "../../utilities/sections/resume";

function Clients() {
  return (
    <div  style={{backgroundColor:'#040404'}}>
        <div className="section-title mt-0 " style={{marginLeft:'40px'}}>
          <h2>Companies</h2>
          <p>Companies I worked with</p>
        </div>
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <div className="row d-flex align-items-center">
          {clients.map((info, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6">
              {info.imageDisplay}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Clients;
