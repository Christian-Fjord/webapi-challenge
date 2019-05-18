const express = require('express');
const router = express.Router();

const dbProject = require('./data/helpers/projectModel');


router.get("/", (req, res) => {
  dbProject.get()
    .then( project => {
      res.status(200).json(project)
    })
    .catch( error => {
      res.status(500).json({error:{message: " The action could not be performed"}})
    })
})