import "./style.css";
import {useState, useEffect} from "react";
import {Redirect, Link} from "react-router-dom";
import API from "../../utils/api";

function Account({userInfo}) {

    useEffect(()=> {
        console.log(userInfo);
    }, []);

    function logout() {
        console.log("Logging Out...");
        API.logout().then(() => {
            <Redirect to = "/" />
        });
    }
    return (
        <div id = "account">
            <p>Account</p>
            <p>Username: {userInfo ? userInfo.username : ""}</p>
            <p>Email: {userInfo ? userInfo.email : ""}</p>
            <Link to = "/" onClick = {logout}>Logout</Link>
        </div>
    )
}

export default Account;