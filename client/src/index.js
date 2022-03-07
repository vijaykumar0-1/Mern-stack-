import React from "react";
import ReactDOM from "react-dom";
import Register from './components/register'
import Login from './components/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar";
import Home from "./components/home";

ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    , document.getElementById('root')
);


// function Login(params) {
//     return(
//         <div>
//             hi from login
//         </div>
//     )
// }