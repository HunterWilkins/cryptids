import {Link} from "react-router-dom";
import {useGlobalContext} from "../../utils/GlobalContext";
import {useState, useEffect} from "react";
import "./style.css";

function Nav(props) {

    const [page, setPage] = useState("");
    const [loginState, dispatch] = useGlobalContext();

    useEffect(() => {
        const path = window.location.pathname.split("/")[1];
        setPage(path);
    }, []);

    return (
        <nav>
        <span id = "logo">
            <h2>Cryptids</h2>
            {
                loginState.loggedIn ? 
                <Link id = "account-btn" onClick = {() => setPage("account")} to = "/account" className = {page === "account" ? "active" : ""}>Account</Link>
                :
                <button id = "account-btn" onClick = {() => props.setIsLoginVisible(true)}>Account</button>
            }
        </span>
        <Link onClick = {() => setPage("faq")} className = {page === "faq" || page === "" ? "active" : ""} to="/faq">FAQ</Link>
        <Link onClick = {() => setPage("top")} className = {page === "top" ? "active" : ""} to="/top">Top Cryptids</Link> 
        <Link onClick = {() => setPage("database")} to="/database" className = {page === "database" ? "active" : ""}>Database</Link>
    </nav>
    )
}

export default Nav;