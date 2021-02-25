import {useState, useEffect} from "react";
import "./style.css";

function CreateModal() {

    const [cryptid, setCryptid] = useState({});

    function handleInputChange(event) {
        setCryptid({
            ...cryptid,
            [event.target.name] : event.target.value
        });
    }

    return(
        <div id = "create-modal">
            <form>
                <span className = "flexrow">
                    <input onChange = {handleInputChange} name = "name" placeholder = "Name" />
                    <input onChange = {handleInputChange} name = "gender" placeholder = "Gender" />
                    <input onChange = {handleInputChange} name = "img" placeholder = "Image Link" />    
                </span>
                
                <textarea onChange = {handleInputChange} name = "body" placeholder  = "Write some Info about this CRYPTID!"/>

                <span className = "flexrow">
                    <input onChange = {handleInputChange} name = "height" placeholder = "Height" />
                    <input onChange = {handleInputChange} name = "weight" placeholder = "Weight" />
                </span>
                <span className = "flexrow">
                    <input onChange = {handleInputChange} name = "magicType" placeholder = "Magic (N/A if Not Applicable)" />
                    <input onChange = {handleInputChange} name = "bodyType" placeholder = "Body Type" />
                    <input type = "submit" id = "submit" />
                </span>

            </form>
        </div>
    );
}

export default CreateModal;