import React, { useState ,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import './login.css'

import Mainlogo from "../images/logo.jpg";
import { signup  } from "../Firstview/firebase";

const Registration = ( props) => {

  let navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [registrationData, setData] = useState({
    usrname: "",
    usrpwd: "",
    usrpwdconfirm: "",
    usremail: "",
    usrphone: "",
  });

  const inputEvent = (event) => {
    // object destructuring
    const { name, value } = event.target;
    setData({ ...registrationData, [name]: value });
  };


  async function handleSignup() {
    props.setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      // console.log(error.message + "sign up msg");
      // props.setLoading(false);
    }
    navigate("/home");
  }


  const onSubmits = (event) => {
    event.preventDefault();
    // props.setToken(true);
    // alert("You have Successfully Register");
    signup(emailRef.current.value, passwordRef.current.value);
    
    console.log(registrationData);
  };
   

  return (
    <>
      <div className="registration">
        <form onSubmit={onSubmits}>
          <div className="registration-form">
            <img
              src={Mainlogo}
              alt=" Registration-img"
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
            <label>Password (8 characters minimum):</label>
            <input
              ref={props.refPwd}
              type="password"
              placeholder="Enter Password "
              name="usrpwd"
              onChange={inputEvent}
              required
            />
            <label>re-Password</label>
            <input
              type="password"
              placeholder="* re-enter password *"
              name="usrpwdconfirm"
              onChange={inputEvent}
              required
            />
            <label>UserName</label>
            <input
              type="name"
              placeholder="Enter UserName "
              name="usrname"
              onChange={inputEvent}
              required
            />
            <label>M.No</label>
            <input
              type="number"
              placeholder="Enter M.No "
              name="usrphone"
              onChange={inputEvent}
              required
            />
            <button type="submit" onClick={handleSignup}>Sign up </button>
            <p>
              Do you have any account?
              <Link to="/"> Sign in </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default  Registration;







// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./login.css";

// import Mainlogo from "../images/logo.jpg";

// import { useUserAuth } from "../context/UserAuthContext";

// const Registration = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");

//   const { signUp } = useUserAuth();

//   const navigate = useNavigate();

//   const onSubmits = async (event) => {
//     setErr("");
//     event.preventDefault();
//     try {
//       await signUp(email, password);
//       navigate("/");
//     } catch (err) {
//       setErr(err.message);
//     }
//   };

//   return (
//     <>
//       <div className="registration">
//         <form onSubmit={onSubmits}>
//           <div className="registration-form">
//             <img
//               src={Mainlogo}
//               alt=" Registration-img"
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 borderRadius: "50%",
//                 margin: "0px auto",
//               }}
//             />
//             <label>UserName</label>
//             <input type="text" placeholder="Enter Your Name " required />
//             <label>Password (6 characters minimum):</label>
//             <input
//               type="password"
//               placeholder="Enter Password "
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <label>re-Password</label>
//             <input
//               type="password"
//               placeholder="* re-enter password *"
//               required
//             />
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter Your Email "
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <label>M.No</label>
//             <input type="number" placeholder="Enter M.No " required />
//             <button type="submit">Sign up </button>
//             <p>
//               Do you have any account?
//               <Link to="/"> Sign in </Link>
//             </p>
//             <br />
//             <br />
//             <p className="error">{err}</p>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Registration;

