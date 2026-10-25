const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Programacion de Vanguardia</h1>
        <h2>Demo DevOps</h2>
        <p>Version 2.0</p>
    `);
});

app.get("/status", (req, resp) => {
    resp.json({
        status: "ok",
        version: "2.0"
    });
});

module.exports = app;