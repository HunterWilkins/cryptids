import "./style.css";
import {useState, useEffect} from "react";
import {Redirect, Link} from "react-router-dom";
import {useGlobalContext} from "../../utils/GlobalContext";
import API from "../../utils/api";

function Account({userInfo}) {

    const [loginState, dispatch] = useGlobalContext();
    const [cryptids, setCryptids] = useState([]);

    useEffect(()=> {
        console.log(loginState);
        if (!loginState.loggedIn) {
            API.logout().then(() => {
                console.log("Successfully logged Out");
                dispatch("logout");
                console.log(userInfo);
            });
        } 

        API.getAuthorCryptids(loginState.id).then(({data}) => {
            console.log(data);
            setCryptids(data);
        });
    }, []);

    function logout() {
        console.log("Logging Out...");
        API.logout().then(() => {
            console.log("Successfully logged Out");
            dispatch("logout");
            console.log(userInfo);
        });
    }

    function translateTime(time) {
        return time.split("T")[0];
    }
    return (
        <div id = "account">
            <p>Account</p>
            <p>Username: {loginState.username ? loginState.username : ""}</p>
            <p>Email: {loginState.email ? loginState.email : ""}</p>
            <button id = "logout" onClick = {logout}>Logout</button>
            <p>{loginState.loggedIn ? "Logged In" : "Logged Out"}</p>
            <div id = "author-cryptids">
                {
                    cryptids.length > 0 ?
                    cryptids.map(item => {
                        return(
                            <Link to = {"/cryptid/" + item.id}>{item.name} ( {translateTime(item.createdAt)} )</Link>
                        )
                    })
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default Account;