import React from 'react';
import { Typography, Box } from '@mui/material';
import {
	faBusinessTime,
	faEye,
	faChartLine,
	faCoins,
	faUsers,
	faMousePointer
} from '@fortawesome/free-solid-svg-icons';
import OfferPic from '../../components/OfferPic';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	subhead: {
		fontFamily: 'Dosis',
		fontSize: '1.5em',
		margin: '10px 20px 20px 20px'
	}
});

function OfferSection({ ...props }) {
	const classes = useStyles();
	const { title, icons } = props.content;
	return (
		<section>
			<Typography id="vorteile" variant="h1" align="center">
				{title}
			</Typography>
			<Box
				display="flex"
				flexDirection="row"
				flexWrap="wrap"
				justifyContent="center"
				alignItems="center"
			>
				{icons.map(icon => {
					return (
						<Box display="flex" flexWrap="wrap" justifyContent="center" style={{ width: '400px' }}>
							<OfferPic icon={icon.icon} />
							<Typography className={classes.subhead} variant="h3" align="center">
								{icon.text}
							</Typography>
						</Box>
					);
				})}
			</Box>
		</section>
	);
}

export default OfferSection;
