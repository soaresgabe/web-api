import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    let weight = Number(req.body.W);
    let height = Number(req.body.H);

    let bmi = Math.round(weight / (height ** 2));

    res.send("Your BMI is: " + bmi);
})

app.listen(3000, () => {
    console.log("Server On: Port 3000");
})