import {useState, useEffect} from "react";
import {useGlobalContext} from "../../utils/GlobalContext";
import API from "../../utils/api";

import "./style.css";

function Entry() {

    const [cryptid, setCryptid] = useState({
        User: {
            username: ""
        }
    });

    const [loginState, dispatch] = useGlobalContext();

    useEffect(() => {
        API.getCryptid(window.location.pathname.split("/")[2]).then(response => {
            console.log(response.data);
            setCryptid({
               ...response.data,
               threatPercent: (response.data.threat / 5) * 100
            });
        }).catch(err => console.log(err));
    }, []);

    function renderBody() {
        const newBody = cryptid.body.split("\n");
        // console.log(newBody);
        return(
            newBody.map((line, i) => {
                return(
                    <div key = {i}>
                        <p>{line}</p>
                        <br />
                    </div>
                )        
            })
        )
    }

    return(
        <div id="entry">
            <article>
                <h2 id = "monster-name">{cryptid.name}</h2>
                <h3>{cryptid.User.username ? "Zoologist: " + cryptid.User.username : ""}</h3>
                <div>
                    {
                    cryptid.body !== undefined ?
                    renderBody()
                    : 
                    ""
                    }
                </div>
            </article>

            <aside>
                <figure id = "cryptid-portrait">
                    {/* <div id = "threat-bar">
                        
                    </div> */}
                    <span id = "bar-box">
                        <img src = "/assets/images/bunny.png" />
                        <span id = "threat-bar" style = {{background: `linear-gradient(to right, green 0%, green ${cryptid.threatPercent}%, white ${cryptid.threatPercent + 1}%, white ${cryptid.threatPercent + 2}%, var(--dark-paper) ${cryptid.threatPercent + 3}%, var(--dark-paper) 100%)`}}></span>
                        <img src = "/assets/images/raptor.png" />
                    </span>
                    {
                        cryptid.img !== undefined ?
                        <img id = "cryptid" src = {"/assets/images/" + cryptid.img} alt="guman" />
                        :
                        ""
                    }
                    <span className = "icons">
                        <p>{cryptid.bodyType}</p>
                        <p>{cryptid.magicType}</p>
                        <p>{cryptid.gender}</p>
                    </span>
                </figure>
            </aside>
        </div>
    );
}

export default Entry;
