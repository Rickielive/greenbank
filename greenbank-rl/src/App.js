import React from 'react'
// import { NavBar } from './components/NavBar/index'
import {BrowserRouter as Router} from 'react-router-dom'
// import SideBar from './components/SideBar/index';
import Home from './pages';



function App() {
  return (
    <Router>
    <Home />
    </Router>
  );
}

export default App;
