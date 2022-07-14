import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./card.css";



import Aos from "aos";
import "aos/dist/aos.css";


const Deserts = (props) => {
  //console.log(props.crusts);

  const addToCart=()=>{

  }

    
  useEffect(() => {
    Aos.init({ duration: 200, easing: "ease-in-sine" });
  }, []);

  return (
    <>
      <div data-aos="zoom-in" data-aos-offset="50" className="mainCard">
        <Link to="/menu/in-detail">
          <img src={props.image} alt="img not find" />
        </Link>
        <div className="aboutCard">
          <h1 className="pizza-name">{props.name}</h1>
          <p className="card-description">
            <span>{props.description}</span>
          </p>

          <hr />

          <div className="sizeAndCrustDiv">
            <div className="sizeDiv">
              <div className="sizeOfPizza">prize</div>
              <div>
                <h2>{props.regular} &#8377;</h2>
              </div>
              <hr />
            </div>
          </div>

          <div className="addInCartBtn">
            <button onClick={addToCart()}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Deserts;
 