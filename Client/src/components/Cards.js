import React from "react";
import "../style.css";

export function Cards({findMax, findMin, type}) {
  return (
    <div className="card border-left-success shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
             { type }
            </div>
            <div id="type" className="h5 mb-0 font-weight-bold text-gray-800">
             {type === "Max Forecast"? findMax : findMin}
            </div>
          </div>
          <div className="col-auto">
            <i className="fas fa-chart-area fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
