const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

app.use(express.static(path.join(__dirname,"frontend")));

app.get("/",(req,res) => {
    res.sendFile("index.html");
});

app.get("/kobus",async (req,res) => {
    const ret = {};
    const contact = {
        "ORCID": "0000-0001-9785-1175",
        "adres": "Instytut Informatyki, p. 511 Lublin",
        "telefon": "81 537 29 54",
        "mail": "adam.kobus@mail.umcs.pl"
    };
    const plan = [];
    
    ret["contact"] = JSON.stringify(contact);
    ret["plan"] = JSON.stringify(plan);
    return res.end(JSON.stringify(ret));
});

app.get("/krajka",async (req,res) => {
    const ret = {};
    const contact = {
        "ORCID": "0000-0002-3506-4616",
        "adres": "Akademicka 9 20-033 Lublin",
        "telefon": "",
        "mail": "andrzej.krajka@mail.umcs.pl"
    };
    const plan = [];

    ret["contact"] = JSON.stringify(contact);
    ret["plan"] = JSON.stringify(plan);
    return res.end(JSON.stringify(ret));
});

app.get("/sasak",async (req,res) => {
    const ret = {};
    const contact = {
        "ORCID": "0000-0002-4593-120X",
        "adres": "Akademicka 9 20-033 Lublin",
        "telefon": "",
        "mail": "anna.sasak-okon@mail.umcs.pl"
    };
    const plan = [];

    ret["contact"] = JSON.stringify(contact);
    ret["plan"] = JSON.stringify(plan);
    return res.end(JSON.stringify(ret));
});

app.listen(8000,() => {
    console.log("aplikacja działa na porcie 8000");
});