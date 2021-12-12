import React from 'react';
import CustomCard from '../../components/CustomCard';
import { Typography, Box } from '@mui/material';
import CustomButton from '../../components/CustomButton';

function SolutionSection() {
	return (
		<section>
			<Typography variant="h1" align="center">
				Meine Leistungen im Detail:
			</Typography>
			<Box display="flex" flexWrap="wrap" justifyContent="space-around">
				<CustomCard />
				<CustomCard />
				<CustomCard />
			</Box>
			<CustomButton color="secondary" anker="kontakt" text="Jetzt anfragen" />
		</section>
	);
}

export default SolutionSection;
