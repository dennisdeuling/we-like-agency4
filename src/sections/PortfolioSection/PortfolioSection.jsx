import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';
import CustomButton from '../../components/CustomButton';
import { makeStyles } from '@mui/styles';

import CustomCard from '../../components/CustomCard';

const useStyles = makeStyles({
	sectionHeadline: {
		marginTop: '150px',
		paddingTop: '150px'
	},
	cardHeadline: {
		color: '#f8cb6d'
	},
	text: {
		margin: '10px 20px 0px 20px'
	}
});

function PortfolioSection({ ...props }) {
	const { content: portfolio } = props;

	const classes = useStyles();

	return (
		<section>
			<Typography id="projekte" variant="h1" align="center" className={classes.sectionHeadline}>
				Meine bisherigen Projekte:
			</Typography>
			<Box display="flex" flexWrap="wrap" justifyContent="space-around">
				{portfolio.map(portfolio => {
					return <CustomCard data={portfolio} />;
				})}
			</Box>
			<Link activeClass="active" to="kontakt" spy={true} smooth={true} duration={3000} offset={-30}>
				<CustomButton anker="kontakt" text="Jetzt anfragen" type="button" />
			</Link>
		</section>
	);
}

export default PortfolioSection;
