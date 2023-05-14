import {client} from '../connection'

export const insertAd = async (title:string,link:string, tags:string[] ,img:string) => {
    const collection= client.db("adsCollection").collection("adsCollection")
    const result = await collection.insertOne({ title, link, tags, img });
    console.log(result);
};