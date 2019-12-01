const express = require('express');
const router = express.Router();

const twilio = require('twilio');
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

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
  let name = req.body.name;
  let number = req.body.phone;

  client.messages
    .create({
      from: 'whatsapp:' + process.env.ORIGIN_PHONE,
      to: 'whatsapp:+34' + number,
      body: name,
      mediaUrl: 'https://oliva.es/wp-content/uploads/2014/07/1881_MobileCode_QR_L_XL.png',
    })
    .then(message => {
      console.log(message.sid);
      res.render('thanks')
    })
    .catch(err => {
      console.error(err);
      res.render('err')
    });
})


router.post('/submit-chat-api', function (req, res) {

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });


})

module.exports = router;
