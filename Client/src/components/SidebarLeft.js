import React from "react";
import '../style.css';


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
            <i className="fas fa-tachometer-alt"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Innowatts</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Menu</div>

        {/* <!-- Nav Item - Forecast --> */}
        <li className="nav-item">
          <a className="nav-link collapsed">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Forecast</span>
          </a>
        </li>
        {/* <!-- Nav Item - Users --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" >
            <i className="fas fa-fw fa-user"></i>
            <span>Users</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed">
            <i className="fas fa-fw fa-search"></i>
            <span>Help</span>
          </a>
        </li>

      </ul>
</div>

)

}