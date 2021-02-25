import axios from "axios";

const API = {
    getCryptid: function(name) {
        return axios.get("/api/cryptid/entry/" + name);
    },

    getDatabase: function() {
        return axios.get("/api/cryptid/database");
    },

    postCryptid: function(content) {
        return axios.post("/api/cryptid", content);
    }
}

export default API;