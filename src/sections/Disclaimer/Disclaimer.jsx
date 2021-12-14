import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	background: {
		background: '#A6A19E',
		marginTop: '20px'
	},
	text: {
		textDecoration: 'none',
		color: 'white',
		fontFamily: 'Dosis',
		fontSize: '1em',
		margin: '10px 0px 10px 0px'
	}
});

function Disclaimer() {
	const classes = useStyles();
	return (
		<div className={classes.background}>
			<Grid display="flex" justifyContent="center" alignItems="center">
				<Link to="/impressum">
					<Typography className={classes.text} variant="p">
						IMPRESSUM
					</Typography>
				</Link>
			</Grid>
		</div>
	);
}

export default Disclaimer;
