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
    },

    updateCryptid: function(content) {
        return axios.put("/api/cryptid", content);
    },

    login: function(body) {
        return axios.post("/api/users/login", body);
    },
    
    signup: function(body) {
        return axios.post("/api/users/signup", body);
    },

    checkUser: function() {
        return axios.get("/api/users/check");
    },

    logout: function() {
        return axios.get("/api/users/logout");
    },

    getAuthorCryptids: function(userId) {
        return axios.get("/api/cryptid/author/" + userId);
    }
}

export default API;