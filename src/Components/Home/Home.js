import React from 'react'
import Event from '../Event/Event';
import logo from '../../logos/logo.png';
import './Home.css';
import Register from '../Register/Register';
import { Link, useHistory } from 'react-router-dom';
const event = [
    {
        Id: 1,
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        Id: 2,
        name: 'Animal Shelter',
        pic: 'animalShelter.png'
    },
    {
        Id: 3,
        name: 'Babysit During PTA ',
        pic: 'babySit.png'
    },
    {
        Id: 4,
        name: 'Build Bird House',
        pic: 'birdHouse.png'
    },
    {
        Id: 5,
        name: 'Give a seminer on Driving safety',
        pic: 'driveSafety.png'
    },
    {
        Id: 6,
        name: 'Clean up your local park',
        pic: 'clearnPark.png'
    },
    {
        Id: 7,
        name: 'Give it help to local adults',
        pic: 'ITHelp.png'
    },
    {
        Id: 8,
        name: 'Give free music',
        pic: 'musicLessons.png'
    },
    {
        Id: 9,
        name: 'Teach people how to register to vote',
        pic: 'voteRegister.png'
    },
    {
        Id: 10,
        name: 'Organize book at the library',
        pic: 'libraryBooks.png'
    },
    {
        Id: 11,
        name: 'Host a study group',
        pic: 'studyGroup.png'
    },
    {
        Id: 12,
        name: 'Clean Water for children',
        pic: 'cleanWater.png'
    },
    {
        Id: 13,
        name: 'Good Education',
        pic: 'goodEducation.png'
    },
    {
        Id: 14,
        name: 'Host a river clean up',
        pic: 'riverClean.png'
    },
    {
        Id: 15,
        name: 'New books for children',
        pic: 'newBooks.png'
    },
    {
        Id: 16,
        name: 'Host a clothing swap',
        pic: 'clothSwap.png'
    },
    {
        Id: 17,
        name: 'Food Charity',
        pic: 'foodCharity.png'
    },
    {
        Id: 18,
        name: 'Refuse shelter',
        pic: 'refuseShelter.png'

    },
    {
        Id: 19,
        name: 'Collect School supplies',
        pic: 'schoolSuffiles.png'
    },
    {
        Id: 20,
        name: 'Collect Stuffed Animals',
        pic: 'stuffedAnimals.png'
    }
];
function Home() {
    let history = useHistory();
    function login() {
        history.push("/login");
    }
    return (
        <div className="container-fluid">
            {/* navbar Start*/}

            <div>
                <nav class=" no navbar navbar-expand-lg navbar-light ">
                    <Link to="/home" class="navbar-brand"> <img src={logo} alt="" srcset="" /></Link>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" no collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-right  ">
                                <Link to="/home" class="nav-link" >Home</Link>
                            </li>
                            <li class="nav-right ">
                                <Link to="/donation" class="nav-link" >Donation</Link>
                            </li>
                            <li class="nav-right ">
                                <Link to="/home" class="nav-link" >Events</Link>
                            </li>
                            <li class="nav-right ">
                                <Link to="/myevent" class="nav-link">MyEvent</Link>
                            </li>
                            <li>
                                <Link to="/register"><button onClick={login} className='btn1 btn btn-primary'><h5>Register</h5> </button> </Link>
                            </li>
                            <li>
                                <Link to="/admin"><button onClick={login} className='btn btn-secondary'><h5>Admin</h5> </button> </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* navbar End*/}

            <h2>I GROW BY HELPING PEOPLE IN NEED</h2>

            <div className=" row">
                {
                    event.map(event => <Event event={event} ></Event>)
                }
            </div>
        </div>
    )
}
export default Home
