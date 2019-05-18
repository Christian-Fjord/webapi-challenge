const express = require('express');
const router = express.Router();

const dbAction = require('./data/helpers/actionModel');

router.get("/", (req, res) => {
  dbAction.get()
    .then( get => {
      res.status(200).json(get);
    })
    .catch(err => {
      res.status(500).json({err:{message: "Whoops, that didn't work."}})
    })
});