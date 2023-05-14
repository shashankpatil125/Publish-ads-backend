import { client } from "../connection";

export const getAd=()=>{
const collection = client.db('adsCollection').collection('adsCollection')
    const data = collection.find().toArray();
    return data;
}