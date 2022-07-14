import React from "react";
import "./faq.css";
const Faq = () => {
 
  return (
    <>
      <div className="Faq">
        <h1 className="faq-heading">FAQ'S</h1>
        <section className="faq-container">
          <div className="faq-one">
            <h1 className="faq-page">
              What is an FAQ Page?

            
            </h1>

            <div className="faq-body" >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                saepe sequi, illum facere necessitatibus cum aliquam id illo
                omnis maxime, totam soluta voluptate amet ut sit ipsum aperiam.
                Perspiciatis, porro!
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-two">
            <h1 className="faq-page">
              Why do you need an FAQ page?{" "}
               
            </h1>

            <div className="faq-body"  >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                saepe sequi, illum facere necessitatibus cum aliquam id illo
                omnis maxime, totam soluta voluptate amet ut sit ipsum aperiam.
                Perspiciatis, porro!
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-three">
            <h1 className="faq-page">
              Does it improves the user experience of a website?{" "}
              
            </h1>

            <div className="faq-body"  >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                saepe sequi, illum facere necessitatibus cum aliquam id illo
                omnis maxime, totam soluta voluptate amet ut sit ipsum aperiam.
                Perspiciatis, porro!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Faq;
