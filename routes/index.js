const express = require('express');
const router = express.Router();
var request = require("request");


const axios = require('axios')

var request = require("request");

var options = { method: 'POST',
  url: 'https://api.chat-api.com/instance83742/sendMessage',
  qs: 
   { token: 'jg85i28008nigh1n',
     phone: '0034655656107',
     body: 'hola%20k%20ase' },
  headers: 
   { 
     Connection: 'keep-alive',
     'Content-Length': '0',
     'Accept-Encoding': 'gzip, deflate',
     Host: 'api.chat-api.com',
     'Postman-Token': 'a13a8235-d333-4526-bf1b-555e82966946,7c05dd82-3dfa-4678-a737-236f61276d29',
     Accept: '*/*',} };



router.get('/', function (req, res) {
  res.render('index')
})

router.get('/twilio', function (req, res) {
  res.render('index')
})

router.get('/chat-api', function (req, res) {
  res.render('chat-api')
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
      caption: 'hola ' + req.body.name
    }
  }
  request(options, function (error, response, body) {
    if (error) throw new Error(error)
    console.log(body);
    res.render('thanks')
  })


})

module.exports = router;
