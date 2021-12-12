import React from 'react';
import { Typography, Box } from '@mui/material';
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
			<CustomButton anker="kontakt" text="Jetzt anfragen" />
		</section>
	);
}

export default PortfolioSection;
