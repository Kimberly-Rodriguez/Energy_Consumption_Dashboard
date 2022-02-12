import React from "react";
import "../App.css";
import "../style.css";
// import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


export default function Filtersbar({setZone}) {
 
  
 
  return (

    
//         <ListGroup as="ol" >
//         <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
//         <h6 className="m-0 font-weight-bold text-primary">Filters</h6>
//       </div>
//   <ListGroup.Item
//     as="li"
//     className="d-flex justify-content-between align-items-start"
//   >
//     <div className="ms-2 me-auto">
//       <button className="fw-grey" onClick={()=>setZone("")}>All Zones</button>
      
//     </div>
    
//   </ListGroup.Item>
//   <ListGroup.Item
//     as="li"
//     className="d-flex justify-content-between align-items-start"
//   >
//     <div className="ms-2 me-auto">
//       <button className="fw-grey" onClick={()=>setZone("california")}>California</button>
      
//     </div>
   
//   </ListGroup.Item>
//   <ListGroup.Item
//     as="li"
//     className="d-flex justify-content-between align-items-start"
//   >
//     <div className="ms-2 me-auto">
//       <button className="fw-grey" onClick={()=>setZone("illinois")}>Illinois</button>
     
//     </div>
   
//   </ListGroup.Item>
//   <ListGroup.Item
//     as="li"
//     className="d-flex justify-content-between align-items-start"
//   >
//     <div className="ms-2 me-auto">
//       <button className="fw-grey" onClick={()=>setZone("new_york")}>New York</button>
      
//     </div>
   
//   </ListGroup.Item>
//   <ListGroup.Item
//     as="li"
//     className="d-flex justify-content-between align-items-start"
//   >
//     <div className="ms-2 me-auto">
//       <button className="fw-grey" onClick={()=>setZone("texas")}>Texas</button>
      
//     </div>
   
//   </ListGroup.Item>
// </ListGroup>


<div className="d-grid gap-2">
<div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
   <h6 className="m-0 font-weight-bold text-primary">Filters</h6>
 </div>
  <Button variant="light" size="lg" onClick={()=>setZone("")}>
    All Zones
  </Button>
  <Button variant="light" size="lg" onClick={()=>setZone("california")}>
   California
  </Button>
  <Button variant="light" size="lg" onClick={()=>setZone("illinois")}>
    Illinois
  </Button>
  <Button variant="light" size="lg" onClick={()=>setZone("new_york")}>
    New York
  </Button>
  <Button variant="light" size="lg"onClick={()=>setZone("texas")}>
    Texas
  </Button>
</div>




    
  );
}


