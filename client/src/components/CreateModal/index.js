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
                    <div id = "close-create" onClick = {closeModal}>
                        <p>x</p>
                    </div>
                    <input onChange = {handleInputChange} name = "name" placeholder = "Name" />
                    <label for = "male">Male</label>
                    <input id = "male" onChange = {handleInputChange} name = "gender" type = "radio" value = "male" placeholder = "Gender" />
                    
                    <label for = "female">Female</label>
                    <input id = "female" onChange = {handleInputChange} name = "gender" type = "radio" value = "female" placeholder = "Gender" />
                    
                    <label for = "na">N/A</label>
                    <input id = "na" onChange = {handleInputChange} name = "gender" type = "radio" value = "N/A" placeholder = "Gender" />
                    <input onChange = {handleInputChange} name = "img" placeholder = "Image Link" />    
                </span>
                
                <textarea onChange = {handleInputChange} name = "body" placeholder  = "Write some Info about this CRYPTID!"/>

                <span className = "flexrow">
                    <input type = "number" onChange = {handleInputChange} name = "height" placeholder = "Height (cm)" />
                    <input type = "number" onChange = {handleInputChange} name = "weight" placeholder = "Weight (lbs)" />
                    <input type = "number" onChange = {handleInputChange} name = "threat" placeholder = "Threat (0-5)" />
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