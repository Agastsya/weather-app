//Imports
const axios= require("axios")
const path = require("path")
const express = require("express")
const app = express();
const cors = require("cors")
require("dotenv").config()

//Middlewares
app.use(express.static(path.join(path.resolve(__dirname,"public"))))
app.use(cors())

//Functions
const fetchApi = async (req,res)=>{

    const options = {
        method: 'GET',
        url: 'https://air-quality.p.rapidapi.com/current/airquality',
        params: {
            lon: '-78.638',
            lat: '35.779'
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_WEATHER_KEY,
            'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        console.error(error);
    }
}


//ROUTES

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/api",fetchApi)

app.get("/main",(req,res)=>{
    res.sendFile("main.html")
})


app.listen(3000,()=>{
    console.log("The server is up and running")
})