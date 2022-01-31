import React from 'react';
import { Typography, Box, CardMedia, CardContent, Card } from '@mui/material';
import { Link } from 'react-scroll';
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
			<Box display="flex" flexWrap="wrap" justifyContent="space-around" id="leistung-div">
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
			<Link activeClass="active" to="kontakt" spy={true} smooth={true} duration={3000} offset={-30}>
				<CustomButton anker="kontakt" text="Jetzt anfragen" type="button" />
			</Link>
		</section>
	);
}

export default SolutionSection;
