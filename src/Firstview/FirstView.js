import React  from "react";
import { Link  } from "react-router-dom";

import logo from "../images/logo.jpg";

import Login from "../loginRegistration/Login.js";
// import Registration from "../loginRegistration/Registration";



import { useAuth } from './firebase.js';
 
 



const FirstView = (props) => {
   
  const currentUser = useAuth();

  return (
    <>
      <div className="navbar" id="main-Navbar">
        <div className="home-logo">
          <img className="home-logo-img" src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
          <Link to="/">
            <h3>SignIn/Up</h3>
          </Link>

          <Link to="/about">
            <h3>About</h3>
          </Link>
          <Link to="/service">
            <h3>Service</h3>
          </Link>
          <Link to="/feedback">
            <h3>Feedback</h3>
          </Link>
          <Link to="/faq">
            <h3>FAQ</h3>
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row-reverse",
          flexWrap: "wrap",
          backgroundColor: "transparent",
        }}
      >
       
        {!currentUser && (
          <>
            <Login Loading={props.Loading} setLoading={props.setLoading} />
          </>
        )}
      </div>
    </>
  );
};

export default FirstView;









// import React from "react";
// import {Link} from 'react-router-dom';

// import logo from "../images/logo.jpg";

// import Login from '../loginRegistration/Login.js';
// import Registration from "../loginRegistration/Registration";

// const FirstView = (props) =>{

//     return (
//       <>
//         <div className="navbar" id="main-Navbar">
//           <div className="home-logo">
//             <img className="home-logo-img" src={logo} alt="logo" />
//           </div>
//           <div className="navbar-links">
//             <Link to="/">
//               <h3>SignIn/Up</h3>
//             </Link>

//             <Link to="/about">
//               <h3>About</h3>
//             </Link>
//             <Link to="/service">
//               <h3>Service</h3>
//             </Link>
//             <Link to="/feedback">
//               <h3>Feedback</h3>
//             </Link>
//             <Link to="/faq">
//               <h3>FAQ</h3>
//             </Link>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//             flexDirection: "row-reverse",
//             flexWrap: "wrap",
//             backgroundColor: "transparent",
//           }}
//         >
//           <Login setToken={props.setToken} />
//           <Registration setToken={props.setToken} />
//         </div>
//       </>
//     );
// }

// export default FirstView;
