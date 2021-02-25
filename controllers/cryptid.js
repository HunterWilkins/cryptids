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
});

router.post("/", (req, res) => {
    db.Cryptid.create(req.body).then(dbCryptid => {res.json(dbCryptid);})
});

router.put("/:id", (req, res) => {
    console.log(req.params.id)
    db.Cryptid.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbCryptid => {
        console.log(req.body.field, req.body.value);
        dbCryptid.update({
            [req.body.field] : req.body.value
        }).then(updatedCryptid => res.json(updatedCryptid));
    })
})

module.exports = router;