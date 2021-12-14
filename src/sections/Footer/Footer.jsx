import React from 'react';
import { Typography, TextField, Box, Button, Alert, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from '../../assets/images/Logo.jpg';
import Disclaimer from '../Disclaimer/Disclaimer';

const useStyles = makeStyles({
	background: {
		background: '#f8CB6D',
		marginTop: '20px'
	},
	text: {
		color: 'black',
		fontFamily: 'Dosis',
		margin: '5px 0px 5px 0px'
	},
	logo: {
		width: '300px'
	},
	link: {
		textDecoration: 'none',
		fontFamily: 'Dosis',
		fontSize: '1.5em',
		color: 'black'
	}
});
function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.background}>
			<Grid container display="flex" justifyContent="center" alignItems="center">
				<div>
					<Grid
						item
						display="flex"
						justifyContent="center"
						alignItems="center"
						xs={12}
						md={12}
						lg={12}
					>
						<img className={classes.logo} src={Logo} />
					</Grid>
					<Grid
						item
						display="flex"
						justifyContent="center"
						alignItems="center"
						xs={12}
						md={12}
						lg={12}
					>
						<Typography className={classes.text} variant="h3">
							Tamara Fritsch
						</Typography>
					</Grid>
					<Grid
						item
						display="flex"
						justifyContent="center"
						alignItems="center"
						xs={12}
						md={12}
						lg={12}
					>
						<Typography className={classes.text} variant="h3">
							Musterstraße 12
						</Typography>
					</Grid>
					<Grid
						item
						display="flex"
						justifyContent="center"
						alignItems="center"
						xs={12}
						md={12}
						lg={12}
					>
						<Typography className={classes.text} variant="h3">
							12345 Berlin
						</Typography>
					</Grid>
					<Grid
						item
						display="flex"
						justifyContent="center"
						alignItems="center"
						xs={12}
						md={12}
						lg={12}
					>
						<a className={classes.link} href="tel:030123456">
							Telefon: 030 / 123456
						</a>
					</Grid>
					{/*</Grid>*/}
				</div>
			</Grid>
			<Disclaimer />
		</footer>
	);
}

export default Footer;
