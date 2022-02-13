import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import "../style.css";

export default function Filtersbar({ setZone }) {
  return (
    //Passing setZone to showcase zone's data onClick
    <div className="d-grid gap-2">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Filters</h6>
      </div>
      <Button variant="light" size="lg" onClick={() => setZone("")}>
        All Zones
      </Button>
      <Button variant="light" size="lg" onClick={() => setZone("california")}>
        California
      </Button>
      <Button variant="light" size="lg" onClick={() => setZone("illinois")}>
        Illinois
      </Button>
      <Button variant="light" size="lg" onClick={() => setZone("new_york")}>
        New York
      </Button>
      <Button variant="light" size="lg" onClick={() => setZone("texas")}>
        Texas
      </Button>
    </div>
  );
}
