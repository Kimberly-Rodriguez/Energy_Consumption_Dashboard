import React from "react";
import "../App.css";



export default function SidebarRight() {
  return (
    <div>
      <button>
        <h5>California</h5>
      </button>
      <button>
        <h5>Illinois</h5>
      </button>
      <button>
        <h5>NewYork</h5>
      </button>
      <button>
        <h5 onClick="texas">Texas</h5>
        
      </button>
    </div>
  );
}

