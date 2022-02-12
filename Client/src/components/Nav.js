import React from "react";
import "../App.css";
import "../style.css";


export default function NavTab() {
  return (
    

    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className=" align-items-center justify-content-between mb-4">
          <h1 id="dashboard" className="h3 mb-0 text-gray-800">Dashboard</h1>
          <div className= "row">
          <span>Explore and discover the power of your data.</span>
          </div>
        </div>

        <a
          href="https://github.com/Kimberly-Rodriguez/Energy_Consumption_Dashboard.git"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-sm text-white-50"></i>Learn More
        </a>
      </div>
    </nav>
  );
}

