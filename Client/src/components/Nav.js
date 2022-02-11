import React from "react";
import "../App.css";
import "../style.css";


export default function NavTab() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <div>
          <a
            href="#"
            id="learnmore"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas animated--fade-in fa-sm text-white-50"></i> Learn
            More{" "}
          </a>
        </div>
        
      </div>
    </nav>
  );
}

{/* <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                ><i class="fas fa-sm text-white-50"></i>Learn More</a
              >
            </div>
            <div class="d-sm-flex align-items-left  mb-2">
                <span>Explore and discover the power of your data.</span>
            </div> */}


// <nav
//             class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
//           >
//             <!-- Sidebar Toggle (Topbar) -->
//             <button
//               id="sidebarToggleTop"
//               class="btn btn-link d-md-none rounded-circle mr-3"
//             >
//               <i class="fa fa-bars"></i>
//             </button>
//           </nav>