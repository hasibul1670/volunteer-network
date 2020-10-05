import React, { useContext, useEffect, useState } from 'react'
import './Admin.css';
import logo from '../../logos/logo.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { usercontex } from '../../App';

function Admin() {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/home" } };
    const [event, setevent] = useState([]);
    const [loggedin, setloggedin] = useContext(usercontex);
    useEffect(() => {
        fetch('https://safe-thicket-25640.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setevent(data));
    }, [])
    function login(e, id) {
        history.push(from);
        fetch(`https://safe-thicket-25640.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
            });
    }
    return (
        <div>
            <div>
                <nav class=" no navbar navbar-expand-lg navbar-light ">
                    <Link to="/home" class="navbar-brand" > <img src={logo} alt="" srcset="" /></Link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" no collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-right  ">
                                <Link to="/home" class="nav-link" >Home</Link>
                            </li>
                            <li class="nav-right ">
                                <Link to="/home" class="nav-link">Add Events</Link>
                            </li>
                            <li class="nav-right ">
                                <Link to="/myevent" class="nav-link">MyEvent</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="left" >
                <h5>Volunteer register List</h5>
                <Link to="/home" class="nav-link">+ add Event</Link>
            </div>
            <div className="right" >
                <h3>Volunteer Register List</h3>
                <h3> Total Registered Events :{event.length}</h3>
                {
                    event.map(e =>
                        <div>
                            <h4 className="node" >Name:{e.Dname} <br></br> Email:{e.email}<br></br>
      Event-Name:{e.name} <p></p>
                                <button onClick={() => login(e, e._id)} type="button" class="btn btn-danger">Delete this Event</button>
                            </h4>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Admin
