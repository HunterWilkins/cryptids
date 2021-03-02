import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import "./style.css";

function Nav(props) {

    const [page, setPage] = useState("");

    useEffect(() => {
        const path = window.location.pathname.split("/")[1];
        setPage(path);
    }, []);

    return (
        <nav>
        <span id = "logo">
            <h2>Cryptids</h2>
            <button onClick = {() => props.setIsLoginVisible(true)}>Account</button>
        </span>
        <Link onClick = {() => setPage("faq")} className = {page === "faq" ? "active" : ""} to="/faq">FAQ</Link>
        <Link onClick = {() => setPage("top")} className = {page === "top" ? "active" : ""} to="/top">Top Cryptids</Link> 
        <Link onClick = {() => setPage("database")} to="/database" className = {page === "database" ? "active" : ""}>Database</Link>
    </nav>
    )
}

export default Nav;