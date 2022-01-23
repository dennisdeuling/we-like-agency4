import React, { useState } from 'react';
import { Typography, TextField, Box, Button, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import CustomButton from '../../components/CustomButton';

const useStyles = makeStyles({
	textField: {
		width: '80%',
		margin: '0px 20px 10px 20px'
	},
	alert: {
		fontFamily: 'Open Sans, sans-serif',
		fontSize: '1em',
		margin: '0px 10px 0px 10px'
	},
	inputAlert: {
		display: 'flex',
		justifyContent: 'center',
		width: '60%',
		margin: '0px 0px 10px 0px'
	},
	flex: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '20px 0px 0px 0px'
	}
});

function ContactSection() {
	const [input, setInput] = useState({ email: '', message: '' });
	const [validEmail, setValidEmail] = useState();
	const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
	const classes = useStyles();

	const handleInput = event => {
		const { value, name } = event.target;

		if (name === 'message' && value.length > 5) {
			const regExEmail =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			input.email.match(regExEmail) ? setValidEmail(true) : setValidEmail(false);
		}

		setInput({ ...input, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		axios
			.post(`${process.env.REACT_APP_BACKEND_DOMAIN}/mail`, { input })
			.then(response => setSendEmailSuccess(true))
			.catch(error => setSendEmailSuccess(false));
	};

	return (
		<section>
			{sendEmailSuccess && (
				<React.Fragment>
					<Typography id="kontakt" variant="h1" align="center">
						Kontakt
					</Typography>
					<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
						<Alert className={classes.alert} variant="filled" severity="success">
							Vielen Dank für deine Nachricht. Du hast uns folgende Daten mitgeteilt:
							<ul>
								<li>Deine Email: {input.email}</li>
								<li>Deine Nachricht: {input.message}</li>
							</ul>
							Wichtig: Deine Daten werden nicht gespeichert und nur an meine Inbox gesendet.
							<div className={classes.flex}>
								<Button
									variant="outlined"
									onClick={() => {
										setSendEmailSuccess(false);
										setInput({ email: '', message: '' });
										setValidEmail();
									}}
								>
									Nachricht schließen
								</Button>
							</div>
						</Alert>
					</Box>
				</React.Fragment>
			)}
			{!sendEmailSuccess && (
				<form onSubmit={handleSubmit}>
					<Typography id="kontakt" variant="h1" align="center">
						Kontakt
					</Typography>
					<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
						<TextField
							className={classes.textField}
							id="outlined-basic"
							name="email"
							label="E-Mail-Adresse"
							variant="outlined"
							onChange={event => handleInput(event)}
						/>
						<div className={classes.inputAlert}>
							{validEmail === true && (
								<Alert severity="success">Diese E-Mail-Adresse ist valide</Alert>
							)}
							{validEmail === false && (
								<Alert severity="error">Bitte nutze eine valide E-Mail-Adresse</Alert>
							)}
						</div>

						<TextField
							className={classes.textField}
							id="outlined-textarea"
							name="message"
							label="Deine Nachricht an uns"
							multiline
							rows={10}
							onChange={event => handleInput(event)}
						/>

						<CustomButton text="Jetzt absenden" type="submit" />
					</Box>
				</form>
			)}
		</section>
	);
}

export default ContactSection;
