import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';

import CustomButton from '../../components/CustomButton';

function HeroSection({ ...props }) {
	const { title, image, subtitle } = props.content;
	return (
		<section>
			<div
				style={{
					height: '850px',
					backgroundImage: `url(${image})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}
			>
				<Box
					display="flex"
					style={{ height: '850px' }}
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
							<CustomButton anker="leistung" text="Meine Leistung" />
						</Link>
					</Box>
				</Box>
			</div>
		</section>
	);
}

export default HeroSection;
