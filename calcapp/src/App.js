import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
// import { Switch } from 'react-router';
import './App.css';
import Calc from './components/Calc.js';
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js';
import About from './pages/About.js';
import NoMatch from './pages/NoMatch.js';
import Lame from './pages/Lame.js';

class App extends Component {
  render() {
    return ( 
       <div>
          <Navbar className={'initial'} />
          <Switch>
            <Route exact path="/" component = {Home} />
            {/* <Route exact path="/Home" component = {Home}/> */}
            <Route path = "/calculator" component = {Calc}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/lame" component = {Lame}/>
            <Route component = {NoMatch}/>
          </Switch>
          
        </div>
    );

  }
}


 
  export default App;
