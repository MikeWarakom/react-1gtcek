import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import './style.css';
import Register from "./pages/register/Register"


export default function App() {
  return (
    <div>
      <Navbar/>
     { /*<Login/>*/ }
     <Register/>
    </div>
  );
}