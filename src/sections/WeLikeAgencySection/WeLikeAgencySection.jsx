import React from 'react';
import { Typography, Grid } from '@mui/material';
import { Link } from 'react-scroll';
import CustomButton from '../../components/CustomButton';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	image: {
		maxWidth: '100%'
		// margin: '10px 20px 0px 20px'
	},
	text: {
		margin: '10px 20px 0px 20px'
	}
});

function WeLikeAgencySection({ ...props }) {
	const classes = useStyles();
	const { title, image, text } = props.content;

	return (
		<section>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item xs={12} md={12} lg={12}>
					<Typography id="welikeagency" variant="h1" align="center">
						{title}
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} lg={6} alignSelf="flex-start">
					<img className={classes.image} src={image} alt={image} />
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<Typography
						className={classes.text}
						variant="body1"
						dangerouslySetInnerHTML={{ __html: text }}
					/>
					<Link
						activeClass="active"
						to="kontakt"
						spy={true}
						smooth={true}
						duration={3000}
						offset={-30}
					>
						<CustomButton anker="kontakt" text="Jetzt Kontakt aufnehmen" type="button" />
					</Link>
				</Grid>
			</Grid>
		</section>
	);
}

export default WeLikeAgencySection;
