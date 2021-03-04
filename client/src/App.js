import logo from './logo.svg';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import "./reset.css";
import "./style.css";
import Main from "./pages/Main";
import Entry from "./pages/Entry";
import Database from "./pages/Database";
import Nav from "./components/Nav";
import LoginModal from "./components/LoginModal";

function App() {

  const [isLoginVisible, setIsLoginVisible] = useState(false);

  return (
    <div>

    <Router>
    <Main>
    <Nav setIsLoginVisible = {setIsLoginVisible}/>
        <Switch>
        <Route exact path = "/faq" component = {Entry}/>
        <Route exact path = "/cryptid/:name" component = {Entry}/>
        <Route exact path = "/database" component = {Database}/>
        <Route exact path = "/" component = {Entry}/>

        </Switch>

        {
          isLoginVisible ? 
          <LoginModal setIsLoginVisible = {setIsLoginVisible}/>
          :
          ""
        }
    </Main>
    
    <footer>Copyright 2021</footer>

    </Router>
    </div>

  );
}

export default App;
