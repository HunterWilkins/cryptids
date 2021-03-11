const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/entry/:id", (req, res) => {
    db.Cryptid.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: db.User,
            attributes: ["username"]
        }]
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
    console.log(req.session);
    db.Cryptid.create({...req.body, UserId: req.session.user.id})
    .then(dbCryptid => {res.json(dbCryptid);})
});

router.get("/author/:id", (req, res) => {
    db.Cryptid.findAll({
        where: {
            UserId: req.params.id
        }
    }).then(dbCryptids => {
        res.json(dbCryptids);
    }).catch(err => res.json(err));
})

router.put("/:id", (req, res) => {
    console.log(req.params.id)
    db.Cryptid.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbCryptid => {
        console.log(req.body.field, req.body.value);
        dbCryptid.update(req.body).then(updatedCryptid => res.json(updatedCryptid));
    });
})

module.exports = router;