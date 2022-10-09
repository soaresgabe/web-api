const express = require('express');
const request = require('request');

const PORT = 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req, res) => {
    
    let name = req.body.name;
    let email = req.body.email;

    console.log(name + " " + email);
})


app.listen(
    PORT,
    () => console.log(`Server On: http://localhost:${PORT}`)
)