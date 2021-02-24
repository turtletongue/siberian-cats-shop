import mailgun from 'mailgun-js';

export default function emailHandler(req, res) {
  const { email, message } = req.body;
  if (!email || !message) res.status(400).json({ ok: false, error: 'Email or message are empty!' });
  const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain:  process.env.MAILGUN_DOMAIN});
  const data = {
    from: 'Cat Shop <me@samples.mailgun.org>',
    to: 'platon.s14@list.ru',
    subject: 'New Message',
    text: `User with email: ${email}, sent message: ${message}`
  };
  mg.messages().send(data, function (error) {
    if (error) {
      console.log(error);
    }
  });
  res.status(200).json({ ok: true, message: 'Pending.' })
}