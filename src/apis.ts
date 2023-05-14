import express from 'express'
import { insertAd } from './functions/insertAd'

const router = express.Router();

type AdData = {
    title: string,
    link: string,
    img: string
}
const app = express()
router.post('/postad', (req, res) => {
    const data: AdData = req.body;
    insertAd(data.title, data.link, data.img);
    res.send("Your Ad has been save");
});

export default router