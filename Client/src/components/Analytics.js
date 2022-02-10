import React from "react";
import Plot from 'react-plotly.js';

export default class App extends React.Component {

  constructor(props){ 
    super(props) 
        
    // Set initial state 
    this.state = {json_data:[]}
        }

  componentDidMount() {
    // Simple GET request with a JSON body using fetch
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
       
    };
    fetch('http://127.0.0.1:3001/getData', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ json_data: data}));
  }

  render() {
    return (
      <Plot
        data={[
          {
            x: this.state.json_data.map(({ time }) => time.replace("Z","").split("T").join(" ")),
            y: this.state.json_data.map(({ actual }) => actual ),
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'blue'},
          }
          
        ]}
        layout={ {width: 1280, height: 720, title: 'Forcast vs Actual'} }
      />
    );
  }
}