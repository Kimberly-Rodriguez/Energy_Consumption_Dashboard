// import logo from './logo.svg';
import React , {useState, useEffect} from "react";
import NavTab from "./components/Nav";
import SidebarLeft from "./components/SidebarLeft";
import {Analytics} from "./components/Analytics";

import {Cards} from "./components/Cards";
import Footer from "./components/Footer";
import {Charts} from "./components/Charts";

import Filtersbar from "./components/Filtersbar";

// import SidebarRight from "./components/SidebarRight";
// import "font-awesome/css/font-awesome.min.css";
import "./style.css";
import "./App.css";

export const App = () => {

  const [zone, setZone]= useState(''); 

  const [json_data, setJson_data] = useState([]);

  useEffect(() => {
    // Simple GET request with a JSON body using fetch
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://127.0.0.1:3001/getData", requestOptions)
      .then((response) => response.json())
      .then((data) => setJson_data(data));

   }, []);

   const findMax = () => {
    const filterData = zone ? json_data.filter(data=>data.zone === zone) : json_data;
    const forecastData = filterData.map(data => parseInt(data.forecast));
    return Math.max(...forecastData);
    
   }

   const findMin = () => {
    const filterData = zone ? json_data.filter(data=>data.zone === zone) : json_data;
    const forecastData = filterData.map(data => parseInt(data.forecast));
    return Math.min(...forecastData);
    
   }

  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
      
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
                  <Cards findMax={findMax()} findMin={findMin()} type="max" />
                </div>
                <div className="col-lg-6 mb-4">
                  <Cards findMax={findMax()} findMin={findMin()} type="min" />
                </div>
              </div>
              {/* <!-- Content Row --> */}
              <div className="row">
                {/* <!-- Content Column --> */}
                <div className="col-lg-8 mb-4">
                  <Analytics data={zone ? json_data.filter((data)=> data.zone === zone) : json_data}/>
                </div>
                <div className="col-lg-4 mb-4">
                  <Filtersbar setZone={setZone} />
                </div>
              </div>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
              {/* <!-- Content Column --> */}
               <div className="col-lg-6 mb-4">
                <Charts type="forecast" data={zone ? json_data.filter((data)=> data.zone === zone) : json_data}/>
              </div>
              <div className="col-lg-6 mb-4">
                <Charts type="actual" data={zone ? json_data.filter((data)=> data.zone === zone) : json_data}/>
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



//Analytics + Filters
{/* <div className="row-flex">

<div className="col-xl-8 col-lg-8">

  <div class="card-body">
    <Analytics />
  </div>
</div>


<div class="col-xl-4 col-lg-5">
<div class="card shadow mb-4">
<div class="card-body">
    <Filtersbar />
    </div>
</div>
</div>
</div> */}