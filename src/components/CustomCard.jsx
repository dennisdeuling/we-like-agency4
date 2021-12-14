import React, { useEffect } from 'react';
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
function CustomCard({ ...props }) {
	const classes = useStyles();

	console.log(props);

	return (
		<Card sx={{ maxWidth: 345 }}>
			{/*<CardMedia component="img" height="194" image={props.offer.image} alt={props.offer.title} />*/}
			{/*<CardContent>*/}
			{/*	<Typography className={classes.headline} variant="h3" align="center">*/}
			{/*		{props.offer.title}*/}
			{/*	</Typography>*/}
			{/*	<Typography variant="body1" dangerouslySetInnerHTML={{ __html: props.offer.text }} />*/}
			{/*</CardContent>*/}
		</Card>
	);
}

export default CustomCard;
