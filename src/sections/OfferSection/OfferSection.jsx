import React from 'react';
import { Typography, Box, CardMedia, CardContent, Card } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	headline: {
		color: '#f8cb6d'
	},
	text: {
		margin: '10px 20px 0px 20px'
	}
});

function SolutionSection({ ...props }) {
	const { title, offers } = props.content;
	const classes = useStyles();

	return (
		<section>
			<Typography id="leistung" variant="h1" align="center">
				{title}
			</Typography>
			<Box display="flex" flexWrap="wrap" justifyContent="space-around">
				{offers.map(offer => {
					return (
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia component="img" height="194" image={offer.image} alt={offer.title} />
							<CardContent>
								<Typography className={classes.headline} variant="h3" align="center">
									{offer.title}
								</Typography>
								<Typography variant="body1" dangerouslySetInnerHTML={{ __html: offer.text }} />
							</CardContent>
						</Card>
					);
				})}
			</Box>
			<CustomButton anker="kontakt" text="Jetzt anfragen" />
		</section>
	);
}

export default SolutionSection;
