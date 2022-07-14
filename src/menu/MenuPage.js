
import React, { useState, useEffect } from "react";
import pizzaData from "../apis/pizzaDetails1.js";
import Card from "../cards/Card.js";
import Deserts from "../cards/Deserts";
import "./menuPage.css";
import MenuPageNavbar from "./MenuPageNavbar.js";

import Aos from 'aos';
import 'aos/dist/aos.css';


import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
 
 
const MenuPage = () => {
  const [data, setData] = useState(pizzaData);
  useEffect(() => {
    setData(pizzaData);
    // console.log(data);
  }, [data]);


  const [visible, setVisible] = useState(true)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false)
    }
    else if (scrolled <= 0) {
      setVisible(true)
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible); 

  
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);

  return (
    <>
      <MenuPageNavbar/>
      <button style={{ transform: 'translateY(10rem)' , backgroundColor: 'green' , display:'flex' , flexDirection:'column' , justifyContent:'center' ,alignItems:"center",cursor:'pointer', marginLeft:'10px' , borderRadius:'50%',padding:'10px' , height:'50px' , width:'50px'}}>
      Go
        <ArrowCircleDownIcon onClick={scrollToBottom}
          style={{ display: visible ? 'inline' : 'none' }} />
      </button> 
      <div className="mainDivOfCards">
        <div className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">BESTSELLERS </h1>
        </div>

        <div className="bestsellers-div all-card-div" id="bestsellers">
          {data.map((currElem) => {
            if (currElem.categoryName === "NON-VEG PIZZA") {
              return (
                <>
                  <Card key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div data-aos="fade-right" data-aos-offset="300" className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">VEG-PIZZA</h1>
        </div>
        <div   className="veg-div all-card-div" id="veg-pizza">
          {data.map((currElem) => {
            if (currElem.categoryName === "VEG PIZZA") {
              return (
                <>
                  <Card key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div data-aos="fade-right" data-aos-offset="300" className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">NON-VEG-PIZZA</h1>
        </div>
        <div   className="non-veg-div all-card-div" id="non-veg-pizza">
          {data.map((currElem) => {
            if (currElem.categoryName === "NON-VEG PIZZA") {
              return (
                <>
                  <Card key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div data-aos="fade-right" data-aos-offset="300" className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">NEW LAUNCHES</h1>
        </div>
        <div   className="new-launches-div all-card-div" id="new-launches">
          {data.map((currElem) => {
            if (currElem.categoryName === "NEW LAUNCHES") {
              return (
                <>
                  <Card key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div data-aos="fade-right" data-aos-offset="300" className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">MEALS & COMBOS</h1>
        </div>
        <div   className="meal&combos-div all-card-div" id="meals-combos">
          {data.map((currElem) => {
            if (currElem.categoryName === "MEALS & COMBOS") {
              return (
                <>
                  <Deserts key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div data-aos="fade-right" data-aos-offset="300" className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">PIZZA MANIA</h1>
        </div>
        <div   className="pizza-mania-div all-card-div" id="pizza-mania">
          {data.map((currElem) => {
            if (currElem.categoryName === "PIZZA MANIA") {
              return (
                <>
                  <Card key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div data-aos="fade-right" data-aos-offset="300" className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">SPECIALITY CHICKEN</h1>
        </div>
        <div   className="speciality-chicken-div all-card-div" id="speciality-chicken" >
          {data.map((currElem) => {
            if (currElem.categoryName === "SPECIALITY CHICKEN") {
              return (
                <>
                  <Deserts key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div data-aos="fade-right" data-aos-offset="300" className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">SIDES</h1>
        </div>

        <div   className="sides-div all-card-div" id="sides">
          {data.map((currElem) => {
            if (currElem.categoryName === "SIDES") {
              return (
                <>
                  <Deserts key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div data-aos="fade-right" data-aos-offset="300" className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">BEVERAGES</h1>
        </div>
        <div   className="beverages-div all-card-div" id="beverages">
          {data.map((currElem) => {
            if (currElem.categoryName === "BEVERAGES") {
              return (
                <>
                  <Deserts key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div data-aos="fade-right" data-aos-offset="300"  className="ref">
          <div className="menu-hr"></div>
          <h1 className="personalHeading cat-bar">DESSERT</h1>
        </div>
        <div   className="dessert-div all-card-div" id="dessert">
          {data.map((currElem) => {
            if (currElem.categoryName === "DESSERT"){
              return (
                <>
                  <Deserts key={currElem.id} {...currElem} />
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </>
  );
};
export default MenuPage;

 










//  {
//    data.map((currElem) => {
//      if (
//        currElem.categoryName === "SPECIALITY CHICKEN" ||
//        currElem.categoryName === "SIDES" ||
//        currElem.categoryName === "BEVERAGES" ||
//        currElem.categoryName === "DESSERT"
//      ) {
//        return (
//          <>
//            <Deserts
//              key={currElem.id}
//              name={currElem.name}
//              description={currElem.description}
//              image={currElem.image}
//              priceR={currElem.regular}
//              categoryName={currElem.categoryName}
//            />
//          </>
//        );
//      } else {
//        return (
//          <Card
//            key={currElem.id}
//            name={currElem.name}
//            description={currElem.description}
//            image={currElem.image}
//            categoryName={currElem.categoryName}
//            priceL={currElem.large}
//            priceM={currElem.medium}
//            priceR={currElem.regular}
//            crusts={currElem.crust}
//          />
//        );
//      }
//    });
//  }

// import React, { useState, useEffect } from "react";
// import pizzaData from "../apis/pizzaDetails1.js";
// import Card from "../cards/Card.js";
// import Deserts from '../cards/Deserts';
// import "./menuPage.css";
// const MenuPage = () => {
//   const [data, setData] = useState(pizzaData);
//   useEffect(() => {
//     setData(pizzaData);
//     console.log(data);
//   }, [data]);

//   return (
//     <>
//       <div className="sc-jhAzac hSPGLn menuNavbar">
//         <div className="mn-hdr hide" data-label="Everyday Value">
//           <span>EVERYDAY VALUE</span>
//         </div>
//         <div className="mn-hdr active" data-label="Bestsellers">
//           <span>BESTSELLERS</span>
//         </div>
//         <div className="mn-hdr hide" data-label="Veg Pizza">
//           <span>VEG PIZZA</span>
//         </div>
//         <div className="mn-hdr hide" data-label="Non-Veg Pizza">
//           <span>NON-VEG PIZZA</span>
//         </div>
//         <div className="mn-hdr hide" data-label="New Launches">
//           <span>NEW LAUNCHES</span>
//         </div>
//         <div className="mn-hdr hide" data-label="Meals &amp; Combos">
//           <span>MEALS &amp; COMBOS</span>
//         </div>
//         <div className="mn-hdr hide" data-label="Pizza Mania">
//           <span>PIZZA MANIA</span>
//         </div>
//         <div className="mn-hdr hide" data-label="Speciality Chicken">
//           <span>SPECIALITY CHICKEN</span>
//         </div>
//         <div className="mn-hdr hide" data-label="Sides">
//           <span>SIDES</span>
//         </div>
//         <div className="mn-hdr hide" data-label="Beverages">
//           <span>BEVERAGES</span>
//         </div>
//         <div className="mn-hdr hide" data-label="Dessert">
//           <span>DESSERT</span>
//         </div>
//       </div>
//       <div className="mainDivOfCards">

//         {data.map((currElem) => {
//           if (
//             currElem.categoryName === "SPECIALITY CHICKEN" ||
//             currElem.categoryName === "SIDES" ||
//             currElem.categoryName === "BEVERAGES" ||
//             currElem.categoryName === "DESSERT"
//           ) {
//             return (
//               <>
//                 <Deserts
//                   key={currElem.id}
//                   name={currElem.name}
//                   description={currElem.description}
//                   image={currElem.image}
//                   priceR={currElem.regular}
//                   categoryName={currElem.categoryName}
//                 />
//               </>
//             );
//           } else {
//             return (
//               <Card
//                 key={currElem.id}
//                 name={currElem.name}
//                 description={currElem.description}
//                 image={currElem.image}
//                 categoryName={currElem.categoryName}
//                 priceL={currElem.large}
//                 priceM={currElem.medium}
//                 priceR={currElem.regular}
//                 crusts={currElem.crust}
//               />
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };
// export default MenuPage;
