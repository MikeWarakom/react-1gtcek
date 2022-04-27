import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import './style.css';


export default function App() {
  return (
    <div>
      <Navbar/>
      <Login/>
    </div>
  );
}