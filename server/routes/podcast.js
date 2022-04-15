import express from "express";
import axios from 'axios';

import User from "../model/User.js";
import { headers } from "../middleware/getHeader.js";

const router = express.Router();

router.get("/search", async (req, res) => {
    const query = req.query.term;
    
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
  
await axios.get(`https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=${id}&pretty`, {
  headers: headers
}).then(response => {
  res.send(response.data)
}, error => {
  console.log(error);
})
});

router.post("/subscribe", async (req, res) => {
  const id = req.query.id;
  const userName = req.query.name;

  await User.updateOne({ "name": userName }, { $push: { subscriptions: id}})
  .then(() => {
    res.send("Subscribed")
  }, error => {
    console.log(error);
  })
});

router.get("/subscribe", async (req, res) => {
  const id = req.query.id;
  const userName = req.query.name;
  
  console.log(id);
  const user = await User.findOne({ "name" : userName })
  .then((user) => {
    res.send(user.subscriptions)
  }, error => {
    console.log(error);
  })
});





export default router;