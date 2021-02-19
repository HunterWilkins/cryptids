const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/:name", (req, res) => {
    db.Cryptid.findOne({
        where: {
            name: req.params.name
        }
    }).then(dbCryptid => {
        res.json(dbCryptid);
    })
});

module.exports = router;