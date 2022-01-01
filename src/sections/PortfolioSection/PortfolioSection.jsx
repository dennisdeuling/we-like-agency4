import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';

import { makeStyles } from '@mui/styles';

import CustomCard from '../../components/CustomCard';
import CustomButton from '../../components/CustomButton';

const useStyles = makeStyles({
	headline: {
		marginTop: '150px'
	}
});

function PortfolioSection() {
	const classes = useStyles();
	return (
		<section>
			<Typography id="projekte" variant="h1" align="center" className={classes.headline}>
				Meine bisherigen Projekte:
			</Typography>
			<Box display="flex" flexWrap="wrap" justifyContent="space-around">
				<CustomCard />
				<CustomCard />
				<CustomCard />
			</Box>
			<Link activeClass="active" to="kontakt" spy={true} smooth={true} duration={3000} offset={-30}>
				<CustomButton anker="kontakt" text="Jetzt anfragen" />
			</Link>
		</section>
	);
}

export default PortfolioSection;
