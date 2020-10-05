import React, { useContext, useEffect, useState } from 'react'
import logo from '../../logos/logo.png';
import { usercontex, eventContext, addContext } from '../../App';
import './Register.css';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';

function Register(props) {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/myevent" } };
  const [loguser, setloguser] = useContext(usercontex);
  const [Id, setId] = useContext(eventContext);
  const [EventInfo, setEventInfo] = useContext(addContext);
  console.log(EventInfo.name);
  const handlesubmit = () => {
    //////send data to server  by POST method ////////
    console.log("clicked handle ");
    history.replace(from);
    const newbooking = { ...loguser, ...EventInfo }
    fetch('http://localhost:5000/addevent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newbooking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }
  return (
    <div className="register">
      {/* navbar */}

      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <Link to="/home" class="navbar-brand"> <img src={logo} alt="" srcset="" /></Link>
          <button class=" no navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
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


      {/* form */}
      <div>


        <div className="form-area">
          <form>
            <div class="form-group">

              <h3> Welcome, {loguser.name}</h3><p></p>
              <h3>You Can Register as a Volunteer</h3>
              <div>
                <input type="Text" class="form-control" value={loguser.Dname} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" required />
              </div>
              <p></p>
              <div class="form-group">
                {/* onBlur={handleChange} */}
                <input type="Email" name="email" value={loguser.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required />
              </div>
              <div class="form-group">
                <input type="date" name="password" class="form-control" id="exampleInputPassword1" placeholder="Date" required />
              </div>
              <div class="form-group">
                <input type="Text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Discription" required />
              </div>
              <div class="form-group">
                <input type="text" name="event" value={EventInfo.name} class="form-control" id="exampleInputPassword1" placeholder=" Selected Event" required />
              </div>
              <p></p>
              <button onClick={handlesubmit} type="submit" class="btn btn-primary">Registration</button>


            </div>
          </form>


        </div>

      </div>

    </div>


  )
}

export default Register
