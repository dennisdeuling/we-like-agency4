import React from 'react';
import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	root: {
		color: 'white',
		fontWeight: 800,
		fontSize: '24px',
		margin: '15px'
	}
});
function CustomButton({ color, anker, text }) {
	const classes = useStyles();
	return (
		<Box display="flex" justifyContent="center">
			<Button
				className={classes.root}
				variant="contained"
				color={color}
				href={`#${anker}`}
				aria-label={text}
				size="large"
			>
				{text}
			</Button>
		</Box>
	);
}

export default CustomButton;
