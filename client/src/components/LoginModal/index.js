import {useState, useEffect} from "react";
import API from "../../utils/api";
import "./style.css";

function LoginModal(props) {

    const [isSignup, setIsSignup] = useState(true);
    const [userInfo, setUserInfo] = useState({});

    function handleInputChange(event) {
        setUserInfo({
            ...userInfo,
            [event.target.name] : event.target.value
        })
    }

    function login(event) {
        event.preventDefault();
        API.login({email: userInfo.email, password: userInfo.password}).then(response => {
            console.log(response.data);
        }).catch(err => console.log(err));
    }

    function signup(event) {
        event.preventDefault();

        API.signup(userInfo).then(response => {
            console.log(response.data);
        }).catch(err => console.log(err));
    }

    return(
        <div id = "login-modal">
            <form onChange = {handleInputChange}>
                <span className = "flexrow">
                    <button onClick = {() => props.setIsLoginVisible()}>x</button>
                    <input name = "email" type = "email" placeholder = "Email@email.com"/>
                    {
                        isSignup ? 
                        <input name = "username" type = "text" placeholder = "Username"/>
                        :
                        ""
                    }
                    <button onClick = {(event) => {event.preventDefault(); setIsSignup(!isSignup)}}>{isSignup ? "Login?" : "Signup?"}</button>
                </span>
                
                <input name = "password" type = "password" placeholder = "Password"/>
                <input type = "submit" onClick = {isSignup ? (event) => {signup(event)} : (event) => {login(event)}} /> 
            </form>
        </div>
    )
}

export default LoginModal;