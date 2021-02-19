import logo from './logo.svg';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import "./reset.css";
import "./style.css";
import Main from "./pages/Main";
import Entry from "./pages/Entry";

function App() {



  return (
    <div>

    <Router>
    <nav>
        <h2>Cryptids</h2>
        <Link to="/faq">FAQ</Link>
        <Link to="/top">Top Cryptids</Link>
  
        <Link to="/database">Database</Link>
    </nav>
    <Main>
        <Switch>
        <Route exact path = "/faq" component = {Entry}/>
        <Route exact path = "/top" component = {Entry}/>
        <Route exact path = "/database" component = {Entry}/>
        <Route exact path = "/" component = {Entry}/>

        </Switch>
    </Main>
    
    <footer>Copyright 2021</footer>

    </Router>
    </div>

  );
}

export default App;
