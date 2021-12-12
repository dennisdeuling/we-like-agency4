import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomButton from '../../components/CustomButton';

const useStyles = makeStyles({
	textField: {
		width: '80%',
		margin: '0px 20px 10px 20px'
	}
});

function ContactSection() {
	const [input, setInput] = useState({ email: '', message: '' });
	const classes = useStyles();

	const handleInput = event => {
		const { value, name } = event.target;

		setInput({ ...input, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
	};

	useEffect(() => {});
	return (
		<section>
			<form>
				<Typography variant="h1" align="center">
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

					<CustomButton
						variant="contained"
						color="secondary"
						text="Jetzt absenden"
						aria-label="Jetzt absenden"
						size="large"
						type="submit"
					/>
				</Box>
			</form>
		</section>
	);
}

export default ContactSection;
