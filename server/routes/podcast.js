import express from "express";
import axios from "axios";

import User from "../model/User.js";
import { getHeader } from "../middleware/getHeader.js";

const router = express.Router();

router.get("/search", async (req, res) => {
  const query = req.query.term;
  const headers = getHeader();
  await axios
    .get(`https://api.podcastindex.org/api/1.0/search/byterm?q=${query}`, {
      headers: headers,
    })
    .then(
      (response) => {
        res.send(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
});

router.get("/byid", async (req, res) => {
  const id = req.query.id;
  const headers = getHeader();
  await axios
    .get(
      `https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id=${id}&pretty`,
      {
        headers: headers,
      }
    )
    .then(
      (response) => {
        res.send(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
});

router.get("/trending", async (req, res) => {
  const headers = getHeader();

  await axios
    .get(`https://api.podcastindex.org/api/1.0/podcasts/trending?pretty`, {
      headers: headers,
      params: { max: 6 },
    })
    .then(
      (response) => {
        res.send(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
});

router.get("/episodes", async (req, res) => {
  const id = req.query.id;
  const headers = getHeader();

  await axios
    .get(
      `https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=${id}&pretty`,
      {
        headers: headers,
      }
    )
    .then(
      (response) => {
        res.send(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
});

router.post("/subscribe", async (req, res) => {
  const podcast = req.body.podcast;
  var podcastStr = JSON.stringify(podcast);
  const userId = req.body.userId;

  await User.updateOne(
    { _id: userId },
    { $push: { subscriptions: podcastStr } }
  ).then(
    () => {
      res.send("Subscribed");
    },
    (error) => {
      console.log(error);
    }
  );
});

router.get("/subscribe", async (req, res) => {
  const userId = req.query.userId;

  await User.findOne({ _id: userId }).then(
    (user) => {
      res.send(user.subscriptions);
    },
    (error) => {
      console.log(error);
    }
  );
});

router.post("/subscribe/cancel", async (req, res) => {
  const podcast = req.body.podcast;
  var podcastStr = JSON.stringify(podcast);
  const userId = req.body.userId;

  await User.updateOne(
    { _id: userId },
    { $pull: { subscriptions: podcastStr } }
  ).then(
    () => {
      res.send("Subscribed");
    },
    (error) => {
      console.log(error);
    }
  );
});

export default router;
