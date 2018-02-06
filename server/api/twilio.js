const router = require('express').Router();

module.exports = router;

router.post('/api/send', (req, res) => {
  let SID = process.env.TWILIO_SID;
  let TOKEN = process.env.TWILIO_TOKEN;
  let SENDER = process.env.TWILIO_SENDER;

  if (!SID || !TOKEN) {
    return res.json({ message: 'add TWILIO_SID and TWILIO_TOKEN to .env file.' });
  }

  let client = require('twilio')(SID, TOKEN);

  client.sendMessage(
    {
      to: req.body.phonenumber,
      from: SENDER,
      body: 'word to your mother.',
    },
    (err, responseData) => {
      if (!err) {
        res.json({
          From: responseData.from,
          Body: responseData.body,
        });
      }
    }
  );
});
