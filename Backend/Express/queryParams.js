const express = require("express");
const app = express();

app.get("/search", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name is ${name} and Age is ${age}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
