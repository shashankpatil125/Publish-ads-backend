import express from "express"
import { client } from "../connection";
import { AdData } from "../types/types";
import { insertAd } from "../functions/insertAd";
const router = express.Router()

import bodyParser from "body-parser"
import cors from "cors"
import { getAd } from "../functions/getAd";

const app=express()
app.use(bodyParser.json())
app.use(cors())

router.post("/", async (req, res) => {
    const data = req.body as AdData;
    await insertAd(data.title, data.link, data.tags,  data.img);
    res.send("Your Ad has been save");
    console.log("yeahh");
});

router.get('/',async(req: any,res: any)=>{
    var data = await getAd()
    res.send(data)
}) 

export default router

