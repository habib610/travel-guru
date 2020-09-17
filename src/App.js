import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import LocationDetails from "./components/LocationDetails/LocationDetails";
import Booking from "./components/Booking/Booking";
import Login from "./components/Login/Login";
import { createContext } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <div className="App">
    <p>Name: {loggedInUser.name}</p>
      <Container>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
            </Route>

            <Route path="/visiting/:location">
           <Booking></Booking>
            </Route>

            <PrivateRoute path="/booking/:overView" >
            <LocationDetails></LocationDetails>
            </PrivateRoute>

            <Route path="/login" >
            <Login></Login>
            </Route>

            <Route path="*" >
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      
      </Container>
     
    </div>
    </UserContext.Provider>
  );
}

export default App;
