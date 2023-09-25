//Imports
const axios = require("axios")
const path = require("path")
const express = require("express");
const app = express();
const cors = require("cors")


require("dotenv").config()

const server = 'https://air-quality.p.rapidapi.com'
//Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(cors())


const fetchApi = async (req,res)=>{

    const options = {
        method: 'GET',
        url: `${server}/current/airquality`,
        params: {
            lon: '-73.00597',
            lat: '40.71427'
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_WEATHER_KEY,
            'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
    }
}


//ROUTES
app.get("/",(req,res)=>{
    fetchApi()
})

app.get("/api",(req,res)=>{
    res.sendFile(`${__dirname}/public/main.html`)
})



app.listen(3000,()=>{
    console.log("The server is up and running")
})