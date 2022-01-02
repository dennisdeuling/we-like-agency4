import React from 'react';
import {
	Typography,
	Box,
	CardMedia,
	CardContent,
	Card,
	CardActions,
	Collapse,
	IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-scroll';
import CustomButton from '../../components/CustomButton';
import { makeStyles, styled } from '@mui/styles';
import textInArray from './helperFunction';

const useStyles = makeStyles({
	sectionHeadline: {
		marginTop: '150px'
	},
	cardHeadline: {
		color: '#f8cb6d'
	},
	text: {
		margin: '10px 20px 0px 20px'
	}
});

const ExpandMore = styled(props => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest
	})
}));

function PortfolioSection({ ...props }) {
	const { content: portfolio } = props;
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const classes = useStyles();

	// const cardBody = () => {
	// 	const bodyText = portfolio.map(project => textInArray(project.text));
	// 	return bodyText;
	// };

	return (
		<section>
			<Typography id="projekte" variant="h1" align="center" className={classes.sectionHeadline}>
				Meine bisherigen Projekte:
			</Typography>
			<Box display="flex" flexWrap="wrap" justifyContent="space-around">
				{portfolio.map(portfolio => {
					return (
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="194"
								image={portfolio.image}
								alt={portfolio.title}
							/>
							<CardContent>
								<Typography className={classes.cardHeadline} variant="h3" align="center">
									{portfolio.title}
								</Typography>
								{/*<Typography variant="body1" dangerouslySetInnerHTML={{ __html: portfolio.text }} />*/}
								{/*<CardActions disableSpacing>*/}
								{/*	<ExpandMore*/}
								{/*		expand={expanded}*/}
								{/*		onClick={handleExpandClick}*/}
								{/*		aria-expanded={expanded}*/}
								{/*		aria-label="show more"*/}
								{/*	>*/}
								{/*		<ExpandMoreIcon />*/}
								{/*	</ExpandMore>*/}
								{/*</CardActions>*/}
								{/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
								{/*	<CardContent>*/}
								{/*		<Typography paragraph>Method:</Typography>*/}
								{/*		<Typography paragraph>*/}
								{/*			Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside*/}
								{/*			for 10 minutes.*/}
								{/*		</Typography>*/}
								{/*		<Typography paragraph>*/}
								{/*			Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over*/}
								{/*			medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring*/}
								{/*			occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large*/}
								{/*			plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay*/}
								{/*			leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often*/}
								{/*			until thickened and fragrant, about 10 minutes. Add saffron broth and*/}
								{/*			remaining 4 1/2 cups chicken broth; bring to a boil.*/}
								{/*		</Typography>*/}
								{/*		<Typography paragraph>*/}
								{/*			Add rice and stir very gently to distribute. Top with artichokes and peppers,*/}
								{/*			and cook without stirring, until most of the liquid is absorbed, 15 to 18*/}
								{/*			minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking*/}
								{/*			them down into the rice, and cook again without stirring, until mussels have*/}
								{/*			opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that*/}
								{/*			don’t open.)*/}
								{/*		</Typography>*/}
								{/*		<Typography>*/}
								{/*			Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
								{/*		</Typography>*/}
								{/*	</CardContent>*/}
								{/*</Collapse>*/}
							</CardContent>
						</Card>
					);
				})}
			</Box>
			<Link activeClass="active" to="kontakt" spy={true} smooth={true} duration={3000} offset={-30}>
				<CustomButton anker="kontakt" text="Jetzt anfragen" type="button" />
			</Link>
		</section>
	);
}

export default PortfolioSection;
