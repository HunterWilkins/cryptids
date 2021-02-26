import {useState, useEffect} from "react";
import "./style.css";

function LoginModal(props) {

    return(
        <div id = "login-modal">
            <form>
                <span className = "flexrow">
                    <button onClick = {() => props.setIsLoginVisible()}>x</button>
                    <input name = "email" type = "email" placeholder = "Email@email.com"/>
                    <input name = "username" type = "text" placeholder = "Username"/>
                </span>
                
                <input name = "password" type = "password" placeholder = "Password"/>
                <input type = "submit" onClick = {() => props.setIsLoginVisible()} /> {/* Temporary Functionality */} 
            </form>
        </div>
    )
}

export default LoginModal;