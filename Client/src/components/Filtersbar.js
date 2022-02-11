import React from "react";
import "../App.css";
import "../style.css";
import ListGroup from 'react-bootstrap/ListGroup'

export default function Filtersbar() {
  return (
    
        <ListGroup as="ol" >
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Filters</h6>
      </div>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-grey">All Zones</div>
      
    </div>
    
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-grey">California</div>
      
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-grey">Illinois</div>
     
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-grey">New York</div>
      
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-grey" >Texas</div>
      
    </div>
   
  </ListGroup.Item>
</ListGroup>
    
  );
}


