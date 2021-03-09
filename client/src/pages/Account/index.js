import "./style.css";
import {useState, useEffect} from "react";
import {Redirect, Link} from "react-router-dom";
import {useGlobalContext} from "../../utils/GlobalContext";
import API from "../../utils/api";

function Account({userInfo}) {

    const [loginState, dispatch] = useGlobalContext();

    useEffect(()=> {
        console.log(userInfo);
        if (!loginState.loggedIn) {
            API.logout().then(() => {
                console.log("Successfully logged Out");
                dispatch("logout");
                console.log(userInfo);
            })
    
        } 
    }, []);

    function logout() {
        console.log("Logging Out...");
        API.logout().then(() => {
            console.log("Successfully logged Out");
            dispatch("logout");
            console.log(userInfo);
        });
    }
    return (
        <div id = "account">
            <p>Account</p>
            <p>Username: {loginState.username ? loginState.username : ""}</p>
            <p>Email: {loginState.email ? loginState.email : ""}</p>
            <button id = "logout" onClick = {logout}>Logout</button>
            <p>{loginState.loggedIn ? "Logged In" : "Logged Out"}</p>
        </div>
    )
}

export default Account;