import React from "react";
import { ToggleButton } from "react-bootstrap";
import Plot from "react-plotly.js";
import "../style.css";



export const Charts = ({type, data}) => {
  //Using Plotly to graph by either "actual" or "forcast 


    return (
      <Plot
      data={[
        {
          x: data.map(({ time }) =>
            time.replace("Z", "").split("T").join(" ")
          ),
          y: data.map(( d ) => d[type]),
          type: "scatter",
          mode: "line",
          marker: {color: "blue"}
          
        }
      ]}
        layout={ {width: 830,
                 height: 280,
                title: type,

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
              },
              // Button: {
              //   title: "line-graph",
              // }
              }}
      />
    );

}
