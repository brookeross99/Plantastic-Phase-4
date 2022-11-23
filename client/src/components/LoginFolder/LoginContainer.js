import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import VideoBackground from "../../PlantImages/VideoBackground.mp4"

import React from 'react'

const LoginContainer = ({ setUser, fetchGlobalPlants }) => {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="login-container">
        {showLogin ? (
            <div>
                <video id="background-video" src={VideoBackground} autoPlay loop muted />
                <div className="loginBlur">
                    <Login setUser={setUser} fetchGlobalPlants={fetchGlobalPlants}/>
                    <p>Don't have an account?</p>
                    <Link to='/signup'>
                        <button onClick={() => setShowLogin(false)}>Sign Up!</button>
                    </Link>
                </div>
            </div>
        ) : (
            <div>
                <video id="background-video" src={VideoBackground} autoPlay loop muted />
                <div className="loginBlur">
                    <Signup setUser={setUser} fetchGlobalPlants={fetchGlobalPlants}/>
                    <p>Have an account?</p>
                    <Link to='/login'>
                        <button onClick={() => setShowLogin(true)}>Login!</button>
                    </Link>
                </div>
            </div>
        )}
    </div>
  )
}

export default LoginContainer