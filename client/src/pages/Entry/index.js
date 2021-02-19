import {useState, useEffect} from "react";
import API from "../../utils/api";

function Entry() {

    const [cryptid, setCryptid] = useState({});

    useEffect(() => {
        API.getCryptid("guman").then(response => {
           setCryptid(response.data);
        });
    }, []);

    return(
        <div id="entry">
            <article>
                <h2 id = "monster-name">{cryptid.name}</h2>
                <p>
                    {cryptid.body}
                </p>
            </article>

            <aside>
                <figure id = "cryptid-portrait">
                    <span className = "icons">
                        <p>friendly</p>
                        <p>--V--------</p>
                        <p>dangerous</p>
                    </span>
                    <img id = "cryptid" src = {"./assets/images/" + cryptid.img} alt="guman" />
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
