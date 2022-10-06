import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello!");
})

app.get("/contact", (req, res) => {
    res.send("gabe@soares.com");
})

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});