const router = require('express').Router();

module.exports = router;

router.post('/', (req, res) => {
  let SID = 'ACc5b16ad0cefc3b514e69bc30636726e2';
  let TOKEN = '3145fb41afe308f22b0b7c647e6a8e17';
  let SENDER = '+18622256079';

  if (!SID || !TOKEN) {
    return res.json({ message: 'add TWILIO_SID and TWILIO_TOKEN to .env file.' });
  }

  let client = require('twilio')(SID, TOKEN);

  client.messages
    .create({
      to: req.body.phone,
      from: SENDER,
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    })
    .then(message => {
      console.log(message.sid);

      // Either just send an empty, successful response or some data (e.g. the `sid`)
      res.status(200).send(message.sid);
    })
    .catch(err => {
      console.log(err);

      // In case of an error, let the client know as well.
      res.status(500).send(err);
    });
});
