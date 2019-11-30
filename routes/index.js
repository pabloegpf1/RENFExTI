const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('index')
})

router.post('/submit', function (req, res) {
  console.log(req.body.name + " - " + req.body.phone);
  let name = req.body.name;
  let number = req.body.phone;
  res.render('thanks')
})

module.exports = router;
