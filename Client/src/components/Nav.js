import React from "react";
import "../App.css";
// import { Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import '../style.css';

// import { useQuery } from '@apollo/client';
// import { QUERY_ME } from '../utils/queries';

// const styles = {
//   links: {
//       color: "#ac3b12",
//       alignItems: "center",
//       textDecoration: "none",
//       fontWeight: "700"
//   },
//   bar: {
//     alignItems: "center",
//     borderBottom: "2px solid #ac3b12",
//     top: 0,
//     paddingBottom: "2%",

//   }
// }

export default function NavTab() {


  return (



    
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <div>
              <a href="#" id="learnmore" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            className="fas animated--fade-in fa-sm text-white-50"></i> Learn More </a>
          </div>
           </div>
           

          </nav>
      

  
  )
   
}


