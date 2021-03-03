const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    db.User.create(req.body)
    .then(dbUser => {
        if (dbUser) {
            req.session.user = {id: dbUser.id, username: dbUser.username, email: dbUser.email}
        }
        res.json(dbUser)
    })
    .catch(err => res.json(err));
});

router.get("/check", (req, res) => {
    console.log(req.session);
    if (req.session.user) {
        res.json(req.session.user);
    }
    else {
        res.json(false);
    }
});

router.get("/logout", (req, res) => {
    req.session.user = null;
    res.sendStatus(200);
});

router.post("/login", (req, res) => {
    db.User.findOne({
        where: {
            email: req.body.email 
        }

        // attributes: ["username", "email"] 
    }).then(dbUser => {
        const valid = dbUser.validPassword(req.body.password);
        if (dbUser === null) {
            res.sendStatus(404);
        }

        else if (valid) {
            req.session.user = {id: dbUser.id, username: dbUser.username, email: dbUser.email}
            console.log(req.session);
            res.json(dbUser);
        }

        else {
            res.sendStatus(401)
        }
    }).catch(err => {
        console.log("Something Went Wrong");
        res.sendStatus(401);
    })
});

module.exports = router;