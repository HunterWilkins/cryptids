const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3001;
const path = require("path");
const db = require("./models");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/:cryptid", (req, res) => {

    db.Cryptid.findOne({
        where: {
            name: req.params.cryptid
        }
    }).then((dbCryptid) => {
        const data = dbCryptid.dataValues;
        console.log(data.dataValues);
        res.render("index", data);
    })


    // res.sendFile(path.join(__dirname, "/index.html"));
})

db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log("Cryptids is listening on port " + PORT);
    }); 
})
