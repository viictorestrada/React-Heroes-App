import React from 'react';
import './App.css';
import Home from './Home/Home';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from './About/About';
import Heroes from './Heroes/Heroes';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container main-container">
     <Switch>
       <Route exact path="/home" component={Home}></Route>
       <Route exact path="/heroes" component={Heroes}></Route>
       <Route exact path="/about" component={About}></Route>
       <Redirect from="/" to="/home" />
     </Switch>
    </div>
    </>
  );
}

export default App;
