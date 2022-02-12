import React, {useState, useEffect} from "react";
import Plot from "react-plotly.js";


export const Analytics = ({data}) => {
  
  

    return (
      <Plot
        data={[
          
          {
            x: data.map(({ time }) =>
              time.replace("Z", "").split("T").join(" ")
            ),
            y: data.map(({ actual }) => actual),
            type: "scatter",
            mode: "line",
            marker: { color: "blue" },
            name: "actual"
          },
         
          {
            x: data.map(({ time }) =>
              time.replace("Z", "").split("T").join(" ")
            ),
            y: data.map(({ forecast }) => forecast),
            type: "scatter",
            mode: "line",
            marker: { color: "orange" },
            name: "forecast"
           
          },
        ]}
        layout={{ width: 1000, height: 280, title: "Forcast vs Actual" }}
      />
    );
  
}
