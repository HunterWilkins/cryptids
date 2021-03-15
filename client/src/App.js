import logo from './logo.svg';
import {useState, useEffect} from "react";
import {GlobalContextProvider, useGlobalContext} from "./utils/GlobalContext";
import {BrowserRouter as Router, Redirect, Link, Route, Switch} from "react-router-dom";
import "./reset.css";
import "./style.css";
import Main from "./pages/Main";
import Entry from "./pages/Entry";
import Database from "./pages/Database";
import FAQ from "./pages/FAQ";
import Nav from "./components/Nav";
import Account from "./pages/Account";
import LoginModal from "./components/LoginModal";
import API from './utils/api';

function App() {

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [loginState, dispatch] = useGlobalContext();
  const [user, setUser] = useState({
    loggedIn: false,
    username: "",
    email: ""
  });

  useEffect(()=>{
    API.checkUser().then(({data}) => {
      // console.log(data);
      if (data !== false) {
        dispatch({type: "checkUser", loggedIn: true});
      }
    })
  }, []);

  function renderAccount(isLoggedIn) {
    // console.log(user);
    if (isLoggedIn) {
      return <Account userInfo = {user}/>
      
    }

    else {
      return <LoginModal setIsLoginVisible = {setIsLoginVisible} />
    }
  }

  return (
    <div>
    <Router>
    <Main>
    <Nav isLoggedIn = {user.loggedIn} setIsLoginVisible = {setIsLoginVisible}/>
        <Switch>
        <Route exact path = "/faq" component = {FAQ}/>
        <Route exact path = "/cryptid/:name" component = {Entry}/>
        <Route exact path = "/database" component = {Database}/>
        <Route exact path = "/account">
        {loginState.loggedIn ? 
            <Account userInfo = {loginState} />          
          :
          <Redirect to = "/" />
        }
        </Route>
        
        <Route exact path = "/" component = {FAQ}/>

        </Switch>

        {
          isLoginVisible ? 
          renderAccount(user.loggedIn)
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
