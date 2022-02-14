import React, { useState, useEffect } from "react";
import { Analytics } from "./components/Analytics";
import { Cards } from "./components/Cards";
import { Charts } from "./components/Charts";
import NavTab from "./components/Nav";
import SidebarLeft from "./components/SidebarLeft";
import Footer from "./components/Footer";
import Filtersbar from "./components/Filtersbar";

import "./style.css";
import "./App.css";

export const App = () => {
  //Using useState for Zone and json_data

  const [zone, setZone] = useState("");

  const [json_data, setJson_data] = useState([]);

  useEffect(() => {
    // GET request with a JSON body using fetch + useEffect to load data on page load
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://127.0.0.1:3001/getData", requestOptions)
      .then((response) => response.json())
      .then((data) => setJson_data(data));
  }, []);

  // Min and Max filtering and mapping for Cards compnent
  const findMax = () => {
    const filterData = zone
      ? json_data.filter((data) => data.zone === zone)
      : json_data;
    const forecastData = filterData.map((data) => parseInt(data.forecast));
    return Math.max(...forecastData);
  };

  const findMin = () => {
    const filterData = zone
      ? json_data.filter((data) => data.zone === zone)
      : json_data;
    const forecastData = filterData.map((data) => parseInt(data.forecast));
    return Math.min(...forecastData);
  };


  return (
    <div id="page-top">
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}
        <SidebarLeft />
        {/*  Content Wrapper */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <NavTab />
            {/* Begin Page Content */}
            <div className="container-fluid">
              <div className="row">
                {/* Content Column */}
                <div className="col-lg-6 mb-4">
                  <Cards
                    findMax={findMax()}
                    findMin={findMin()}
                    type="Min Forecast"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <Cards
                    findMax={findMax()}
                    findMin={findMin()}
                    type="Max Forecast"
                  />
                </div>
              </div>
              {/* Content Row */}
              <div className="row">
                {/* Content Column */}
                <div className="col-lg-8 mb-4">
                  <Analytics
                    data={
                      zone
                        ? json_data.filter((data) => data.zone === zone)
                        : json_data
                    }
                  />
                </div>
                <div className="col-lg-4 mb-4">
                  <Filtersbar setZone={setZone} />
                </div>
              </div>
            </div>

            {/* Content Row */}
            <div className="row">
              {/* Content Column */}
              <div className="col-lg-6 mb-4">
                <Charts

                //conditional to filter by type
                  type="forecast"
                  color="orange"
                  data={
                    zone
                      ? json_data.filter((data) => data.zone === zone)
                      : json_data
                  }
                />
              </div>
              <div className="col-lg-6 mb-4">
                <Charts
                  type="actual" 
                  color="blue"
                  data={
                    zone
                      ? json_data.filter((data) => data.zone === zone)
                      : json_data
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Lowerbar */}
        <Footer />
      </div>
    </div>
  );
};
