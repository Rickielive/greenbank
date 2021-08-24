import React from 'react'
import { NavBar } from './components/NavBar/index'
import {BrowserRouter as Router} from 'react-router-dom'
import SideBar from './components/SideBar/index';


function App() {
  return (
    <Router>
      <SideBar />
      <NavBar />
    </Router>
  );
}

export default App;
