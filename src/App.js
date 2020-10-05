import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Nomatch from './Components/Nomatch/Nomatch';
import Register from './Components/Register/Register';
import Myevent from './Components/Myevent/Myevent';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const usercontex = createContext();
export const eventContext = createContext();
export const addContext = createContext();

function App() {
  const [loguser, setloguser] = useState({});
  const [Id, setId] = useState('');
  const [EventInfo, setEventInfo] = useState({});

  return (

    <usercontex.Provider value={[loguser, setloguser]}>
      <eventContext.Provider value={[Id, setId]}>
        <addContext.Provider value={[EventInfo, setEventInfo]}>

          <Router>
            <Switch>
              <Route path="/home"> <Home /> </Route>
              <Route exact path="/"> <Home /> </Route>
              <Route path="/login"> <Login /> </Route>
              <PrivateRoute path='/register'><Register /> </PrivateRoute>
              <PrivateRoute path="/admin"><Admin /> </PrivateRoute>
              <PrivateRoute path="/myevent"><Myevent /> </PrivateRoute>
              <Route path="*"><Nomatch></Nomatch> </Route>
              <Route path="/home">  </Route>
              <Route exact path="/"> <Home /> </Route>
            </Switch>
          </Router>

        </addContext.Provider>
      </eventContext.Provider>
    </usercontex.Provider>



  );
}

export default App;
