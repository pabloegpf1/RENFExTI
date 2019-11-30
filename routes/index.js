const express = require('express');
const router = express.Router();

const twilio = require('twilio');
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.get('/', function (req, res) {
  res.render('index')
})

router.post('/submit', function (req, res) {
  let name = req.body.name;
  let number = req.body.phone;

  client.messages
    .create({
      from: 'whatsapp:' + process.env.ORIGIN_PHONE,
      to: 'whatsapp:+34' + number,
      body: name,
      mediaUrl: './views/public/images/qr_code.jpg',
    })
    .then(message => {
      console.log(message.sid);
      res.render('thanks')
    })
    .catch(err => {
      console.error(err);
      res.render('thanks')
    });

})

module.exports = router;
