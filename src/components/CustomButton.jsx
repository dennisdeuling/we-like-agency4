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
function CustomButton({ anker, text }) {
	const classes = useStyles();
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
			>
				{text}
			</Button>
		</Box>
	);
}

export default CustomButton;
