import React from "react";
import Plot from "react-plotly.js";
import "../style.css";



export const Charts = ({type, data}) => {
  //Using Plotly to graph by either "actual" or "forcast" data 
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
          marker: { color: "blue" },
        },
      ]}
        layout={ {width: 830, height: 280, title: type} }
      />
    );

}
