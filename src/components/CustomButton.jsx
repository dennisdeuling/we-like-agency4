import React from 'react';
import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	root: {
		color: 'white',
		fontWeight: 800,
		fontSize: '1.5em',
		margin: '15px'
	}
});
function CustomButton({ anker, text, type }) {
	const classes = useStyles();

	switch (type) {
		case 'button':
			return (
				<Box display="flex" justifyContent="center">
					<Button
						className={classes.root}
						variant="contained"
						color="primary"
						href={`#${anker}`}
						aria-label={text}
						size="large"
						align="center"
						type="button"
					>
						{text}
					</Button>
				</Box>
			);
		case 'submit':
			return (
				<Box display="flex" justifyContent="center">
					<Button
						className={classes.root}
						variant="contained"
						color="primary"
						aria-label={text}
						size="large"
						align="center"
						type="submit"
					>
						{text}
					</Button>
				</Box>
			);
	}
}

export default CustomButton;
