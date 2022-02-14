import React from "react";
import Plot from "react-plotly.js";
import { ToggleButtonGroup } from "react-bootstrap";

export const Analytics = ({data}) => {
  
    return (
      //Using Plotly to graph and outline X: time and Y: "actual" and "forecast" 
     
    


      <Plot
      
        data={[
          
          {
            x: data.map(({ time }) =>
              time.replace("Z", "").split("T").join(" ")
            ),
            y: data.map(({ actual }) => actual),
            type: "scater",
            mode: 'line',
            marker: { color: "blue" },
            name: "actual",
            responsive: true,
            editable: true,
           

          },
         
          {
            x: data.map(({ time }) =>
              time.replace("Z", "").split("T").join(" ")
            ),
            y: data.map(({ forecast }) => forecast),
            type: "scater",
            mode: 'line',
            marker: {color: "orange"} ,
            name: "forecast",
            responsive: true,
            editable: true,
           
           
          },
        ]}
        layout={{ width: 1000, 
                  height: 280,
                  title: '<b>Forcast vs Actual</b>',
                
                  xaxis: {
                    title: "Time",
                    tittlefont: {
                      family: 'Arial, sans-serif',
                      size: 12,
                      color: 'blue'
                    },
                    showticklabels: true,
                    thickfont: {
                      family: 'Arial, sans-serif',
                      size:12,
                      color: 'blue'
                    }
                  },
                  yaxis: {
                    title: "Energy (kwh)",
                    tittlefont: {
                      family: 'Arial, sans-serif',
                      size: 12,
                      color: 'blue'
                    },
                    showticklabels: true,
                    thickfont: {
                      family: 'Arial, sans-serif',
                      size:12,
                      color: 'blue'
                    }
                }}}
      />
    );
  
}
