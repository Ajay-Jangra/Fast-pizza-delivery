
//  https://pizza-delivery-system-f5675.web.app/


import React,{Suspense} from "react";
import Explore from "./homeContent/Explore.js";
import PizzaSlice from "./PizzaSlice";
import MenuPage from "./menu/MenuPage.js";
// import Slider from "./Slider.js";

// import SkeletionHome from './skeleton/SkeletonHome.js'


const Slider = React.lazy(() => import("./Slider.js"));
// const MenuPage = React.lazy(() => import("./menu/MenuPage.js"));

const HomePage = () => {
   
  return (
    <>
      <Suspense fallback={<div>loading...... </div>}>
        <Slider />
        <PizzaSlice />
        <MenuPage />
        <Explore />
      </Suspense>
    </>
  );
};
export default HomePage;






























// import React from "react";
// import { Routes, Route  } from "react-router-dom";

// import Navbar from "./Navbar.js";
// import MenuPage from "./menu/MenuPage.js";
// import Login from "./Login.js";
// import Registration from "./Registration.js";
// import Cart from "./Cart.js";
// import Slider from "./Slider";
// import Footer from "./footer/Footer.js";

// const HomePage = () => {
//   return (
//     <>
//       <Routes>
//         <Route path=""/>
//         <Route exact path="/menu" element={<MenuPage />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/logout" element={<Registration />} />
//         <Route exact path="/cart" element={<Cart/>} />
//         <Route exact path="/menu/in-detail" element={<Cart/>} />
//       </Routes>
//       <Navbar />
//       <Slider />
//       <Footer />
//     </>
//   );
// };
// export default HomePage;

















 