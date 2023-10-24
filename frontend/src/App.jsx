import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Predict from "./components/Predict";
import Navbar from "./components/Navbar";
import Errorpage from "./components/Errorpage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/login' element={<Login/>}/>
        <Route path ='/signup' element={<Signup/>}/>
        <Route path ='/predict' element={<Predict/>}/>
        <Route path ='*' element={<Errorpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
