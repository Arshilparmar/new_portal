import React from "react";
import Header from "./Components/Header";
import Features from "./Features";
import Sidebar from "./Sidebar";
import Topnews from "./Topnews";
import "./Mainnews.css";
// import axios from "axios";

function Mainnews() {

  return (
      <>
      <Header Title="My News List" searchBar={false} />
      <div className="main-layout">
        {/* Left Side - Features */}
        <div className="left-content">
          <Features />
        </div>

        <div className="center-content">
          <Topnews/>
        </div>

        {/* Right Side - Sidebar */}
        <div className="right-content">
          <div className="sidebar">
            <Sidebar/>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default Mainnews;
