import React, { useState } from 'react';
import { Typography, TextField, Box, Button, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles({
	textField: {
		width: '80%',
		margin: '0px 20px 10px 20px'
	},
	alert: {
		fontFamily: 'Dosis',
		fontSize: '1em',
		margin: '0px 10px 0px 10px'
	}
});

function ContactSection() {
	const [input, setInput] = useState({ email: '', message: '' });
	const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
	const classes = useStyles();

	const handleInput = event => {
		const { value, name } = event.target;

		setInput({ ...input, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		axios
			.post(`${process.env.REACT_APP_BACKEND}/mail`, { input })
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

						<TextField
							className={classes.textField}
							id="outlined-textarea"
							name="message"
							label="Deine Nachricht an uns"
							multiline
							rows={10}
							onChange={event => handleInput(event)}
						/>

						<Button
							variant="contained"
							color="primary"
							aria-label="Jetzt absenden"
							size="large"
							align="center"
							type="submit"
						>
							Jetzt absenden
						</Button>
					</Box>
				</form>
			)}
		</section>
	);
}

export default ContactSection;
