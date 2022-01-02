import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';

import CustomButton from '../../components/CustomButton';

function HeroSection({ ...props }) {
	const { title, image, subtitle } = props.content;

	return (
		<section>
			<div
				style={{
					minWidth: '100%',
					minHeight: 'auto',
					backgroundImage: `url(${image})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}
			>
				<Box
					display="flex"
					style={{ height: '850px' }}
					// style={{ minWidth: '100%', minHeight: '100%' }}
					justifyContent="flex-end"
					alignItems="center"
				>
					<Box style={{ width: '650px' }}>
						<Typography variant="h1">{title}</Typography>
						<Typography variant="h3">{subtitle}</Typography>
						<Link
							activeClass="active"
							to="leistung"
							spy={true}
							smooth={true}
							duration={3000}
							offset={-30}
						>
							<CustomButton anker="leistung" text="Meine Leistung" type="button" />
						</Link>
					</Box>
				</Box>
			</div>
		</section>
	);
}

export default HeroSection;
