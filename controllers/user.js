const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    db.User.create(req.body).then(dbUser => res.json(dbUser)).catch(err => res.json(err));
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