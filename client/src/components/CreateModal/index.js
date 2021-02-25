import {useState, useEffect} from "react";
import API from "../../utils/api";
import "./style.css";

function CreateModal({closeModal}) {

    const [cryptid, setCryptid] = useState({});

    function handleInputChange(event) {
        setCryptid({
            ...cryptid,
            [event.target.name] : event.target.value
        });
    }

    function postCryptid(event) {
        event.preventDefault();
        API.postCryptid(cryptid).then(response => {
            console.log(response.data);
        }).catch(err => console.log(err));
    }

    return(
        <div id = "create-modal">
            <form>
                <span className = "flexrow">
                    <button id = "close-modal" onClick = {closeModal}>x</button>
                    <input onChange = {handleInputChange} name = "name" placeholder = "Name" />
                    <input onChange = {handleInputChange} name = "gender" placeholder = "Gender" />
                    <input onChange = {handleInputChange} name = "img" placeholder = "Image Link" />    
                </span>
                
                <textarea onChange = {handleInputChange} name = "body" placeholder  = "Write some Info about this CRYPTID!"/>

                <span className = "flexrow">
                    <input type = "number" onChange = {handleInputChange} name = "height" placeholder = "Height" />
                    <input type = "number" onChange = {handleInputChange} name = "weight" placeholder = "Weight" />
                    <input type = "number" onChange = {handleInputChange} name = "threat" placeholder = "Threat" />
                </span>
                <span className = "flexrow">
                    <input onChange = {handleInputChange} name = "magicType" placeholder = "Magic (N/A if Not Applicable)" />
                    <input onChange = {handleInputChange} name = "bodyType" placeholder = "Body Type" />
                </span>
                <input onClick = {postCryptid} type = "submit" id = "submit" />
            </form>
        </div>
    );
}

export default CreateModal;