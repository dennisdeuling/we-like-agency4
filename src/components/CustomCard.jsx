import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import CardImage from '../assets/images/dummy.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	headline: {
		color: '#f8cb6d'
	},
	text: {
		margin: '10px 20px 0px 20px'
	}
});
function CustomCard() {
	const classes = useStyles();
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia component="img" height="194" image={CardImage} alt="Paella dish" />
			<CardContent>
				<Typography className={classes.headline} variant="h3" align="center">
					Leistung 1
				</Typography>
				<Typography variant="body1">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
					dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
					sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
					vulputate
				</Typography>
			</CardContent>
		</Card>
	);
}

export default CustomCard;
