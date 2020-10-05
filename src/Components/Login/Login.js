import React, { useContext, useState } from 'react'
import logo from '../../logos/logo.png';
import * as firebase from 'firebase/app';
import "firebase/auth";

import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { usercontex } from '../../App';

const firebaseConfig = {

  apiKey: "AIzaSyBdB3m5Ddk5rjQzlBgVMS8DPyjfIBS14oM",
  authDomain: "volunteer-network-c2349.firebaseapp.com",
  databaseURL: "https://volunteer-network-c2349.firebaseio.com",
  projectId: "volunteer-network-c2349",
  storageBucket: "volunteer-network-c2349.appspot.com",
  messagingSenderId: "1045996945552",
  appId: "1:1045996945552:web:dab646738ed348e7779815"

};
firebase.initializeApp(firebaseConfig);
function Login() {
  const [loguser, setloguser] = useContext(usercontex);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/register" } };
  const [user, setuser] = useState({
    isSignIn: false,
    Dname: '',
    email: ''
  })
  var provider = new firebase.auth.GoogleAuthProvider();
  const hendleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const { displayName, email } = res.user;
        const signInUser = {
          isSignIn: true,
          Dname: displayName,
          email: email,
        }
        setuser(signInUser);
        setloguser(signInUser)
        history.replace(from);
      })

      .catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
  }
  return (
    <div className="lo">
      {/* navbar */}
      <div >
        <nav class=" no navbar navbar-expand-lg navbar-light ">
          <Link to="/home" class="navbar-brand"> <img src={logo} alt="" srcset="" /></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" no collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-right  ">
                <Link to="/home" class="nav-link" >Home</Link>
              </li>
              <li class="nav-right ">
                <Link to="/myevent" class="nav-link">MyEvent</Link>
              </li>
              <li class="nav-right ">
                <Link to="/admin" class="nav-link" >Admin</Link>
              </li>





            </ul>




          </div>
        </nav>
      </div>

      {/* navbar */}

      <div >

        <div className="login">
          <h3>Login With </h3>

          <button onClick={hendleSignIn} type="button" class="b1 btn btn-outline-secondary">Continue With Google</button><br></br>
          <p></p>
          <h6>Don't have an Account?<a href="#">create An Account </a></h6>

        </div>



      </div>
    </div>



  )
}

export default Login
