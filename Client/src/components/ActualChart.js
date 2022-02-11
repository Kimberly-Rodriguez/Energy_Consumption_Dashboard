import React from "react";
import Plot from "react-plotly.js";
import "../style.css";

export default class App extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'line', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 830, height: 280, title: 'Actual'} }
      />
    );
  }
}
