import axios from "axios";

const API = {
    getCryptid: function(name) {
        return axios.get("/api/cryptid/" + name);
    }
}

export default API;