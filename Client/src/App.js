// import logo from './logo.svg';
import React from "react";
import NavTab from "./components/Nav";
import SidebarLeft from "./components/SidebarLeft";
import Analytics from "./components/Analytics";
import CardMin from "./components/CardMin";
import CardMax from "./components/CardMax";
import Footer from "./components/Footer";
import ForecastChart from "./components/ForecastChart";
import ActualChart from "./components/ActualChart";
// import SidebarRight from "./components/SidebarRight";
import "./style.css";
import "./App.css";

export default function App() {
  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        {/* <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        ></ul> */}
        {/* <!-- Sidebar - Brand --> */}
        <SidebarLeft />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <NavTab />

            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}

              {/* <!-- Content Row --> */}
              {/* <!-- Content Row --> */}
              <div className="row">
                {/* <!-- Content Column --> */}
                <div className="col-lg-6 mb-4">
                  <CardMax />
                </div>
                <div className="col-lg-6 mb-4">
                  <CardMin />
                </div>
              </div>

              {/* <!-- Content Row --> */}
              <div className="row">
                {/* <!-- Chart --> */}
                <div className="col-xl-8 col-lg-8">
                  <Analytics />
                </div>
              </div>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
              {/* <!-- Content Column --> */}
              <div className="col-lg-6 mb-4">
                <ForecastChart />
              </div>
              <div className="col-lg-6 mb-4">
                <ActualChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
