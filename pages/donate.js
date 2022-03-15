import React from "react";

function Donate() {
  return (
    <div className="d-flex justify-content-center flex-column w-100 border">

      <div className="m-5 fs-4">
        <h1 className="fw-bold"> CHILDREN NEED YOUR HELP </h1>

        <p>Right now, children are living through a hard time without Education, Health, and in poor sanitation.</p>

        <p>With your generous support, the stellaCenter workers are with them on the frontlines. 
          To deliver lifesaving aid, protection and education to give children the childhood they deserve,
           wherever they are.</p>

           <p>Your gift today can provide relief. Please  <span className="fw-bold text-danger">donate now below.</span> </p>
      </div>


      <div className="d-flex flex-column justify-content-center align-items-center  mx-3">
    <div className="col-lg-6 pt-4 pt-lg-0 services ">
              <div className="col-md-6 mt-4 mt-md-0 w-100" >
                <div className="icon-box">
                <i
          style={{ color: "#E1444D" }}
          className="bi bi-paypal p-3 pb-3 fs-1 text-start  d-flex align-items-start"
        ></i>
                  <h4>
                    <a href="#">Paypal</a>
                  </h4>
                  <p>You will be redirected to another secure page where you can place your Donation via Paypal</p>
                </div>
              </div>
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 services">
              <div className="col-md-6 mt-4 mt-md-0 w-100" >
                <div className="icon-box">
                <i
          style={{ color: "#E1444D" }}
          className="bi bi-credit-card p-3 pb-3 fs-1 text-start  d-flex align-items-start"
        ></i>
                  <h4>
                    <a href="https://flutterwave.com/pay/w7ap8zruwm8x" target="_blank">Flutter Wave</a>
                  </h4>
                  <p>You will be redirected to another secure page where you can place your Donation via Flutter Wave</p>
                </div>
              </div>
          </div>
          
          </div>
    </div>
  );
}

export default Donate;
