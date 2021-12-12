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
		fontSize: '2em',
		margin: '10px 20px 20px 20px'
	}
});

function OfferSection() {
	const classes = useStyles();
	return (
		<section>
			<Typography variant="h1" align="center">
				Die Lösung die ich Ihnen biete:
			</Typography>
			<Box
				display="flex"
				flexDirection="row"
				flexWrap="wrap"
				justifyContent="center"
				alignItems="center"
			>
				<Box display="flex" flexWrap="wrap" justifyContent="center" style={{ width: '400px' }}>
					<OfferPic icon={faCoins} />
					<Typography className={classes.subhead} variant="h3" align="center">
						Mehr Umsatz durch eine klare Strategie
					</Typography>
				</Box>
				<Box display="flex" flexWrap="wrap" justifyContent="center" style={{ width: '400px' }}>
					<OfferPic icon={faEye} />
					<Typography className={classes.subhead} variant="h3" align="center">
						Mehr Sichtbarkeit durch visuelles Branding
					</Typography>
				</Box>
				<Box display="flex" flexWrap="wrap" justifyContent="center" style={{ width: '400px' }}>
					<OfferPic icon={faChartLine} />
					<Typography className={classes.subhead} variant="h3" align="center">
						Mehr Traffic durch relevante Inhalte
					</Typography>
				</Box>
				<Box display="flex" flexWrap="wrap" justifyContent="center" style={{ width: '400px' }}>
					<OfferPic icon={faMousePointer} />
					<Typography className={classes.subhead} variant="h3" align="center">
						Mehr Interaktion durch kreative Formate
					</Typography>
				</Box>
				<Box display="flex" flexWrap="wrap" justifyContent="center" style={{ width: '400px' }}>
					<OfferPic icon={faUsers} />
					<Typography className={classes.subhead} variant="h3" align="center">
						Mehr Neukunden durch gezielte und kreative Werbung
					</Typography>
				</Box>
				<Box display="flex" flexWrap="wrap" justifyContent="center" style={{ width: '400px' }}>
					<OfferPic icon={faBusinessTime} />
					<Typography className={classes.subhead} variant="h3" align="center">
						Sie erhalten mehr Zeit für Ihr Business
					</Typography>
				</Box>
			</Box>
		</section>
	);
}

export default OfferSection;
