// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavTab from './components/Nav';
// import Dashboard from ".pages/Dashboard";
import SidebarL from './components/SidebarLeft';
import Analytics from './components/Analytics';


function App() {

  
  return (
  <div>
    <NavTab />
   <div>
   <SidebarL />
   </div>
   <Analytics />
  </div> 
  
  );
}

export default App;
