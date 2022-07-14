import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './profile.css';
import { storage,logout } from '../firebase.js';
  
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";


const Profile = (props) => {


    let navigate = useNavigate();
    const [progress,setProgress]= useState(0);
    const [avtar, setAvtar] = useState('');
    const uploadHandle=(e)=> {
       e.preventDefault();
       const file = e.target[0].files[0];
       uploadFiles(file);
     }


    const uploadFiles=(file)=> {

           if (!file) return;
           const sotrageRef = ref(storage, `files/${file.name}`);
           const uploadTask = uploadBytesResumable(sotrageRef, file);

           uploadTask.on(
             "state_changed",
             (snapshot) => {
               const prog = Math.round(
                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
               );
               setProgress(prog);
                
             },
             (error) => console.log(error),
             () => {
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                 console.log("File available at", downloadURL);
                 setAvtar(downloadURL);
               });
             }
           );
     };
 
  async function handleLogout() {
    props.setLoading(false);
    try {
      await logout();
    } catch {
      // alert("Error logout!");
    }
    navigate("/home");
  }



  return (
    <>
      <div className="side-nav">
        <div className="fields">
          {!avtar && (
            <>
              <form onSubmit={uploadHandle}>
                <input type="file" />
                <button type="submit">Upload</button>
                <h3>Uploaded {progress}% </h3>
              </form>
            </>
          )}

          {/* <img
            src={avtar}
            alt="avtar"
            style={{
              height: "10rem",
              width: "10.4rem",
              backgroundColor: "aqua",
              padding: "10px",
              borderRadius: "50%",
            }}
          /> */}
        </div>

        <div className="overlay">
          <div className="prf">
            <div data-label="userName" className="row bg-nm">
              <div className="row__it">
                <div className="row__it__ic">
                  <img
                    src={avtar}
                    alt="avtar"
                    style={{
                      height: "8rem",
                      width: "8rem",
                      backgroundColor: "gray",
                      padding: "2px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="row__it__txt ellipsis prf-nm">
                  <span>AJAY JANGRA</span>
                </div>
              </div>
              <span className="row__actn">EDIT</span>
            </div>
            <div data-label="userMobile" className="row undefined">
              <div className="row__it">
                <div className="row__it__ic">
                  <div className="injectStyles-sc-1jy9bcf-0 jvblCf"></div>
                </div>
                <div className="row__it__txt ellipsis ">
                  <span>8395971843</span>
                </div>
              </div>
            </div>
            <div data-label="userEmail" className="row row__brd-btm bg-nm">
              <div className="row__it">
                <div className="row__it__ic">
                  <div className="injectStyles-sc-1jy9bcf-0 oHexC"></div>
                </div>
                <div className="row__it__txt ellipsis ">
                  <span>ajayjangrarakhi@gmail.com</span>
                </div>
              </div>
              <span className="row__actn">EDIT</span>
            </div>
          </div>
          <div className="prf-opt">
            <div data-label="profile My Favourite" className="row">
              <div className="row__it">
                <div className="injectStyles-sc-1jy9bcf-0 EzWyv"></div>
              </div>
              <div className="row__txt ">
                <Link to="/cart/faviourite">My Favourite</Link>
              </div>
            </div>
            <div data-label="profile My Orders" className="row">
              <div className="row__it">
                <div className="injectStyles-sc-1jy9bcf-0 dpwSPV"></div>
              </div>
              <div className="row__txt ">
                <span>My Orders</span>
              </div>
            </div>
            <div data-label="profile My Addresses" className="row">
              <div className="row__it">
                <div className="injectStyles-sc-1jy9bcf-0 cQMvSn"></div>
              </div>
              <div className="row__txt ">
                <span>My Addresses</span>
              </div>
            </div>
            <div data-label="profile Logout" className="row">
              <div className="row__it">
                <div className="injectStyles-sc-1jy9bcf-0 gJNkXT"></div>
              </div>
              <div className="row__txt ">
                <button onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
