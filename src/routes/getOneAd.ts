import { client } from "../connection";
import { Router } from "express";
import { getAd } from "../functions/getAd";

const getOneAd = Router()
const data = client.db('adsCollection').collection('adsCollection')
getOneAd.get('/',async(req,res)=>{
    var data = await getAd()
    const randomIndex = Math.floor(Math.random() * data.length);
    res.send(data[randomIndex])
})
export default getOneAd