import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    const city = req.body.city;
    const units = req.body.units;
    const apiKey = "349a5f8ca271688b86f438a04b3820eb";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units +"&appid=" + apiKey;
    
    https.get(url, (api_res) => {
        console.log(api_res.statusCode);

        api_res.on("data", (data) => {

            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const min = weatherData.main.temp_min;
            const max = weatherData.main.temp_max;
            const feelsLike = weatherData.main.feels_like;
            const description = weatherData.weather[0].description;
            const imageURL = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"

            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The temperature in " + capitalize(city) + " is " + temp + " degrees Celcius.</h1>");
            res.write("<img src=" + imageURL + " />");
            res.send();
        })
    })
})

app.listen(3000, () => {
    console.log("App On: Port 3000");
})