import React, { useState,useRef  } from "react";
import {Link ,useNavigate} from "react-router-dom";
import "./login.css";
import { login } from "../Firstview/firebase";

import logo from "../images/logo.jpg";

 

const Login = (props) => {

  let navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
   
   const [loginData,setLogin] = useState({
     usremail:"",
     usrpwd:"",
   });
   
  const inputEvent = (event) => {
    // object destructuring
    const { name, value } = event.target;
    setLogin({ ...loginData, [name]: value });
    
  };

  async function handleLogin() {
    props.setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      // console.log(error.message +" login msg");
    }
    navigate("/home");
  }
   
  const onSubmits = (event) => {
    event.preventDefault();
      //  props.setToken(true);
    //  console.log(login);
  };
 
  return (
    <>
      <div className="login">
        <form onSubmit={onSubmits}>
          <div className="login-form">
            <img
              src={logo}
              alt="login-img"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                margin: "0px auto",
              }}
            />

            <label>UserEmail</label>
            <input
              ref={props.refEmail}
              type="email"
              placeholder="Enter Your Email "
              name="usremail"
              onChange={inputEvent}
              required
            />
            <label>Password </label>
            <input
              ref={props.refPwd}
              type="password"
              placeholder="Enter Password "
              name="usrpwd"
              onChange={inputEvent} 
              required
            />
            <button type="submit" onClick={handleLogin}>Sign in </button>
            <p>
              Do't have any account? <Link to="/signUp"> Sign up </Link>
            </p>
            <p className="error"></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;







// import React, { useState } from "react";
// import {Link,useNavigate} from "react-router-dom";
// import "./login.css";

// import logo from "../images/logo.jpg";



// import { useUserAuth } from "../context/UserAuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");

//   const {logIn,user} = useUserAuth();

//   const navigate = useNavigate();

//   const onSubmits = async (event) => {
//     setErr("");
//     event.preventDefault();
//     try {
//       await logIn(email, password);
//       navigate("/home");
//     } catch (err) {
//       setErr(err.message);
//     }
//     console.log(user);
//   };
 
//   return (
//     <>
//       <div className="login">
//         <form onSubmit={onSubmits}>
//           <div className="login-form">
//             <img
//               src={logo}
//               alt="login-img"
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 borderRadius: "50%",
//                 margin: "0px auto",
//               }}
//             />

//             <label>UserEmail</label>
//             <input
//               type="email"
//               placeholder="Enter Your Email "
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <label>Password </label>
//             <input
//               type="password"
//               placeholder="Enter Password "
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit">Sign in </button>

//             <p>
//               Do't have any account? <Link to="signup"> Sign up </Link>{" "}
//             </p>
//             <p className="error">{err}</p>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;































// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.

// The type event property returns the type of the triggered event.

// import React, { useState } from "react";
// // import {Link} from 'react-router-dom';
// import './login.css';

// import logo from '../images/logo.jpg';
// const Login = (props) => {
//   const [loginData, setCard] = useState({
//     usremail: "",
//     usrpwd: "",
//   });

//   const inputEvent = (event) => {

//   const { value, name } = event.target;
//   setCard({ ...loginData, [name]: value });
//   };

//   const onSubmits = (event) => {
//     event.preventDefault();
//     props.setToken(true);
//     alert("You have Successfully login");
//   };

//   // const [loginDisplay,setLoginDisplay] = useState("block");
//   // const DisplayRegister = ()=>{
//   //      let display = "none";
//   //      setLoginDisplay(display);
//   // }

//   // const callRegistration=(e)=>{
//   //    e.preventDefault();

//   // }

//   return (
//     <>
//       <div className="login">
//         <form onSubmit={onSubmits}>
//           {/* <div className="signInUpDiv">
//              <Link to='/login' className="signInBtn">Sign In</Link>
//              <Link to='/register' className="signUpBtn"  >Sign Up</Link>
//           </div> */}
//           <div className="login-form">
//             <img
//               src={logo}
//               alt="login-img"
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 borderRadius: "50%",
//                 margin: "0px auto",
//               }}
//             />

//             <label>UserEmail</label>
//             <input
//               type="text"
//               placeholder="Enter Your Email "
//               name="usremail"
//               onChange={inputEvent}
//               required
//             />
//             <label>Password </label>
//             <input
//               type="password"
//               placeholder="Enter Password "
//               name="usrpwd"
//               onChange={inputEvent}
//               required
//             />
//             <button type="submit">Login</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;

// // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.

// // The type event property returns the type of the triggered event.
