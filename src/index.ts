console.log("max");
import express from "express";
import postAdRouter from "./routes/postAd"
import cors from 'cors'
import bodyParser from 'body-parser';
import getById from "./routes/getAdByTag";
import getOneByTag from "./routes/getOneByTag";
import getOneAd from "./routes/getOneAd";
require('dotenv').config()

const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors({origin:"*"}))
app.use("/postAd",postAdRouter)
app.use("/getAdByTag",getById)
app.use("/getOneByTag",getOneByTag)
app.use("/getOneAd",getOneAd)


const port=3000 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}); 
 
