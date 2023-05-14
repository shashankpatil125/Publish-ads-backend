import { client } from "../connection";
import { Router } from "express";

const getById = Router()
const data = client.db('adsCollection').collection('adsCollection')
getById.get('/:tag',async(req,res)=>{
    const option = req.params.tag
    const shortlisted = await data.find({tags:{$in:[option]}}).toArray()
    res.send(shortlisted)
})
export default getById