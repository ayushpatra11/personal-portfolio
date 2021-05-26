import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home Page/Home'
import Education from "./pages/Home Page/Education";
import Skills from "./pages/Home Page/Skills";


function App() { 
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
