import express from "express";
import axios from 'axios';

import { headers } from "../middleware/getHeader.js";

const router = express.Router();

router.get("/search", async (req, res) => {
    const query = req.query.term;
    console.log(query);
await axios.get(`https://api.podcastindex.org/api/1.0/search/byterm?q=${query}`, {
    headers: headers
}).then(response => {
    res.send(response.data)
  }, error => {
    console.log(error);
  })
});
export default router;