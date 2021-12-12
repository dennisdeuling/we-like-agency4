import React from 'react';
import { Typography, Box } from '@mui/material';
import WeLikeAgencyImage from '../../assets/images/we-like-agency.jpg';
import CustomButton from '../../components/CustomButton';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	image: {
		maxWidth: '40%',
		margin: '10px 20px 0px 20px'
	},
	text: {
		margin: '10px 20px 0px 20px'
	}
});

function WeLikeAgencySection() {
	const classes = useStyles();
	return (
		<section>
			<Typography variant="h1" align="center">
				#welikeagency
			</Typography>
			<Box display="flex" justifyContent="center" alignItems="center">
				{/*<div className={classes.image}></div>*/}
				<img className={classes.image} src={WeLikeAgencyImage} />
				<Box>
					<Typography className={classes.text} variant="body1">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
						dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
						sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
						vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
						Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
						elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
						eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
						feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
						Aenean imperdiet.
					</Typography>
					<CustomButton color="secondary" anker="kontakt" text="Jetzt Kontakt aufnehmen" />
				</Box>
			</Box>
		</section>
	);
}

export default WeLikeAgencySection;
