const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/entry/:id", (req, res) => {
    db.Cryptid.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbCryptid => {
        res.json(dbCryptid);
    })
});

router.get("/database", (req, res) => {
    db.Cryptid.findAll().then(dbCryptids => {
        res.json(dbCryptids);
    });
})

module.exports = router;