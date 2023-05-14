import { MongoClient, InsertOneResult } from 'mongodb';
require('dotenv').config();

//connection of database 
const url = process.env.URL as string
export const client = new MongoClient(url)