import React from "react";
import '../style.css';
// import "font-awesome/css/font-awesome.min.css";



export default function sidebarLeft() {

return (


 

<div>
{/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
          
          <i className="bi bi-speedometer2"></i>
          </div>
          <div className="sidebar-brand-text mx-3">My Demo</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Menu</div>

        {/* <!-- Nav Item - Forecast --> */}
        <li className="nav-item">
          <a className="nav-link collapsed">
          <i className="bi bi-bar-chart-line"></i>
            <span>Forecast</span>
          </a>
        </li>
        {/* <!-- Nav Item - Users --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" >
          <i className="bi bi-people"></i>
            <span>Users</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed">
          <i className="bi bi-question-circle"></i>
            <span>Help</span>
          </a>
        </li>

      </ul>
</div>

)

}