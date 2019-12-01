const express = require('express');
const router = express.Router();
var request = require("request");

router.get('/', function (req, res) {
  res.render('index')
})

router.post('/submit', function (req, res) {
  var options = {
    method: 'POST',
    url: 'https://api.chat-api.com/instance83742/sendFile',
    qs:
    {
      token: process.env.CHAT_API_TOKEN,
      phone: '0034' + req.body.phone,
      body: 'https://renfe-x-ti.herokuapp.com/images/qr.png',
      filename: 'Mi código qr Renfe',
      caption: '!Hola ' + req.body.name + ', Aquí tienes tu QR que te permitirá acceder al tren'
    }
  }
  request(options, function (error, response, body) {
    if (error) throw new Error(error)
    console.log(body);
    res.render('thanks')
  })

})

module.exports = router;
