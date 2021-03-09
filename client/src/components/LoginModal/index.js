import {useState, useEffect} from "react";
import {useGlobalContext} from "../../utils/GlobalContext";
import API from "../../utils/api";
import "./style.css";

function LoginModal(props) {

    const [isSignup, setIsSignup] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const [loginState, dispatch] = useGlobalContext();

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
            dispatch({type: "login", data: {
                username: response.data.username,
                email: response.data.email
            }});
            props.setIsLoginVisible();

        }).catch(err => console.log(err));
    }

    function signup(event) {
        event.preventDefault();

        API.signup(userInfo).then(response => {
            props.setIsLoginVisible();
        }).catch(err => console.log(err));
    }

    return(
        <div id = "login-modal">
            <form onChange = {handleInputChange}>
                <input name = "email" type = "email" placeholder = "Email@email.com"/>
                {
                    isSignup ? 
                    <input name = "username" type = "text" placeholder = "Username"/>
                    :
                    ""
                }
                
                <input name = "password" type = "password" placeholder = "Password"/>
                <span className = "flexrow">
                    <button onClick = {isSignup ? (event) => {signup(event)} : (event) => {login(event)}}>Submit</button> 
                    <div id = "login-close" onClick = {() => props.setIsLoginVisible()}>
                        <p>x</p>
                    </div>
                    <button id = "toggle-signup" onClick = {(event) => {event.preventDefault(); setIsSignup(!isSignup)}}>{isSignup ? "Login?" : "Signup?"}</button>
                </span>
            </form>
        </div>
    )
}

export default LoginModal;