import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';

import CustomCard from '../../components/CustomCard';
import CustomButton from '../../components/CustomButton';

function PortfolioSection() {
	return (
		<section>
			<Typography id="projekte" variant="h1" align="center">
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
