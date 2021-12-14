const PORT = 8000;
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
	res.json('Hello World');
});

app.post('/mail', (req, res) => {
	const { email, message } = req.body.input;

	const outputOwner = `
	  <p>Ein neuer User sendet dir eine Email</p>
	  <h3>Kontakt Details:</h3>
	  <ul>
	    <li>Email: ${email}</li>
	  </ul>
	  <h3>Die Nachricht:</h3>
	  <p>${message}</p>
	`;

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: process.env.REACT_APP_EMAIL_HOST,
		port: process.env.REACT_APP_EMAIL_PORT,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.REACT_APP_EMAIL_AUTH_USER,
			pass: process.env.REACT_APP_EMAIL_AUTH_PASS
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	// send email to the owner of the website
	const mailOptionsOwner = {
		from: `Welikeagency <${process.env.REACT_APP_EMAIL_AUTH_USER}>`,
		to: `${process.env.REACT_APP_EMAIL_AUTH_USER}`,
		subject: 'Neue Anfrage auf der Homepage',
		html: outputOwner
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptionsOwner, (error, info) => {
		if (error) {
			return console.log(error);
		}
		// console.log('Message sent: %s', info.messageId);
		// console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	});

	// send email to the lead of the website
	const outputLead = `
	  <h3>Welikeagency - Vielen Dank für die Anfrage</h3>
	  <ul>
	    <li>Deine Email: ${email}</li>
	  </ul>
	  <h3>Deine Nachricht an uns:</h3>
	  <p>${message}</p>
	  <br />
	  <h3>Wir setzen uns mit dir schnellstmöglich in Verbindung.</h3>
	`;

	const mailOptionsLead = {
		from: `Welikeagency <${process.env.REACT_APP_EMAIL_AUTH_USER}>`,
		to: `${email}`,
		subject: 'Welikeagency - Vielen Dank für die Anfrage',
		text: `Deine Email ${email}, deine Nachricht an uns ${message} - Wir setzen uns mit dir schnellstmöglich in Verbindung`,
		html: outputLead
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptionsLead, (error, info) => {
		if (error) {
			return console.log(error);
		}
		// console.log('Message sent: %s', info.messageId);
		// console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

		return res.json({ email, message });
	});
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
