import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./card.css";


import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
  
 import CartData from '../cartComponent/cartData.js';
 

 
import Aos from "aos";
import "aos/dist/aos.css";



const Card = (props) => {
  const [favorite, setFavorate] = useState("dislike");
  const [addInCartText, setAddInCartText] = useState("ADD TO CART");

  
  const addInCart =(props)=>{
     CartData.push(props);
     setAddInCartText("Go To Cart");
    //  console.log(CartData);
  }
 
    
  useEffect(() => {
    Aos.init({ duration: 200, easing: "ease-in-sine" });
  }, []);


  const addInFav = () => {
    if (favorite === "dislike") {
      return (
        <>
          <FavoriteBorderIcon
            className="dislike-icon"
            sx={{
              height: "24px",
              width: "24px",
              transition: "ease-in 1s",
            }}
            onClick={() => {
              setFavorate("like");
              addInFav();
            }}
          />
        </>
      );
    } else if (favorite === "like") {
        
      return (
           
        <>
          <FavoriteIcon
            className="like-icon"
            sx={{
              height: "30px",
              width: "30px",
              transition:'ease-in 1s'
            }}
            onClick={() => {
              setFavorate("dislike");
              addInFav();
            }}
          />
        </>
      );
    }
  };
 

  return (
    <>
      <div data-aos="zoom-in" data-aos-offset="50" className="mainCard">
        <div className="card-img-div">
          <Link to="/menu/in-detail">
            <img src={props.image} alt="img not find" />
          </Link>
          <div className="like-dislike-div"> {addInFav()}</div>
        </div>
        <div className="aboutCard">
          <h1 className="pizza-name">{props.name}</h1>
          <p className="card-description">
            <span>{props.description}</span>
          </p>

          <hr />

          <div className="sizeAndCrustDiv">
            <div className="sizeDiv">
              <div className="sizeOfPizza">size</div>
              <div>
                <select name="sizes" className="sizeSelection ">
                  <option value="Regular">
                    {" "}
                    Regular {props.regular} &#8377;{" "}
                  </option>
                  <option value="Medium">Medium {props.medium} &#8377; </option>
                  <option value="Large">Large {props.large} &#8377; </option>
                </select>
              </div>
              <hr />
            </div>

            <div className="crustDiv">
              <div className="crustOfPizza">crust</div>
              <div>
                <select name="crust" className="crustSelection ">
                  {props.crust.map((currCrust) => {
                    return (
                      <option value={currCrust.name}>{currCrust.name}</option>
                    );
                  })}
                </select>
              </div>
              <hr />
            </div>
          </div>

          <div className="addInCartBtn">
            <button onClick={() => addInCart(props)}>
              {addInCartText === "ADD TO CART" ? (
                <span>ADD IN CART</span>
              ) : (
                <Link to="/cart">Go To Cart</Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
 