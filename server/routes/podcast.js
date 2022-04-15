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

router.get("/byid", async (req, res) => {
  const id = req.query.id;
  console.log(id);
  const text = id.toString();
await axios.get(`https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id=${id}&pretty`, {
  headers: headers
}).then(response => {
  res.send(response.data)
}, error => {
  console.log(error);
})
});



router.get("/episodes", async (req, res) => {
  const id = req.query.id;
  console.log(id);
await axios.get(`https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=${id}&pretty`, {
  headers: headers
}).then(response => {
  res.send(response.data)
}, error => {
  console.log(error);
})
});







export default router;