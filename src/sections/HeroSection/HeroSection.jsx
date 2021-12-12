import React from 'react';
import { Typography, Box } from '@mui/material';
import HeroImage from '../../assets/images/hero-image.jpg';
import CustomButton from '../../components/CustomButton';

function HeroSection() {
	return (
		<section>
			<div
				style={{
					height: '850px',
					backgroundImage: `url(${HeroImage})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}
			>
				<Box
					display="flex"
					style={{ height: '850px' }}
					justifyContent="flex-end"
					// justifyItems="center"
					// alignContent="center"
					alignItems="center"
				>
					<Box style={{ width: '650px' }}>
						<Typography variant="h1">Lorem ipsum dolor sit amet.</Typography>
						<Typography variant="h3">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
							dolor. Aenean massa. Cum sociis natoque penatibus et.
						</Typography>
						<CustomButton color="secondary" anker="leistung" text="Meine Leistung" />
					</Box>
				</Box>
			</div>
		</section>
	);
}

export default HeroSection;
