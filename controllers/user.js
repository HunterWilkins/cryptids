const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    db.User.create(req.body).then(dbUser => res.json(dbUser)).catch(err => res.json(err));
});