import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';

import Login from './components/login_component'
import SignUp from './components/signup_component'
import UserDetails from "./components/userDetails";
import Reset from "./components/reset";
// import Reset_Password from "./components/reset_password";
import AdminHome from "./components/adminHome";
import UserHome from "./components/userHome";
import ImageUpload from "./components/imageUpload";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/imageUpload'}>
                  ImageUpload
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>   
            <Routes>
              <Route exact path="/" element={isLoggedIn === "true"?<UserDetails/>:<Login/>} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/adminHome" element={<AdminHome />} />
              <Route path="/userHome" element={<UserHome />} />
              <Route path="/imageUpload" element={<ImageUpload />} />
              

            </Routes>
      </div>
    </Router>
  )
}

export default App;
