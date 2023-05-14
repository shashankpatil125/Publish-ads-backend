import { client } from "../connection";
import { Router } from "express";

const getOneByTag = Router()
const data = client.db('adsCollection').collection('adsCollection')
getOneByTag.get('/:tag',async(req,res)=>{
    const option = req.params.tag
    const shortlisted = await data.find({tags:{$in:[option]}}).toArray()
    const randomIndex = Math.floor(Math.random() * shortlisted.length);
    res.send(shortlisted[randomIndex])
})
export default getOneByTag