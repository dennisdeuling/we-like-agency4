import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	sectionHeadline: {
		marginTop: '150px'
	},
	cardHeadline: {
		color: '#f8cb6d'
	},
	text: {
		margin: '10px 20px 0px 20px'
	},
	flex: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	button: {
		color: 'black'
	},
	space: {
		margin: '0px 30px 0px 0px'
	}
});

function CustomCard({ ...props }) {
	const { image, text, title } = props.data;
	const [showText, setShowText] = useState(false);
	const classes = useStyles();

	const textInArray = text => {
		const closingPtags = text.split('</p>').length - 1;
		const textInArray = text.split('</p>', closingPtags);
		const textNew = textInArray.map(text => {
			return text + '</p>';
		});
		return textNew;
	};

	const showBody = (text, showText) => {
		const newText = textInArray(text);

		let bodyText;

		if (showText) {
			bodyText = newText.map(text => {
				return <Typography variant="body1" dangerouslySetInnerHTML={{ __html: text }} />;
			});
		} else {
			bodyText = newText.map((text, index) => {
				if (index < 2) {
					return <Typography variant="body1" dangerouslySetInnerHTML={{ __html: text }} />;
				}
			});
		}
		return bodyText;
	};

	const buttonShowMore = (text, showText) => {
		let button;
		if (!(textInArray(text).length <= 1)) {
			button = (
				<div className={classes.flex}>
					<Button
						className={classes.button}
						variant="text"
						onClick={() => {
							setShowText(!showText);
						}}
					>
						{showText ? 'Weniger lesen' : 'Mehr lesen'}
					</Button>
				</div>
			);
		}
		return button;
	};

	return (
		<Card sx={{ maxWidth: 345 }} className={classes.space}>
			<CardMedia component="img" height="194" image={image} alt={title} />
			<CardContent>
				<Typography className={classes.cardHeadline} variant="h3" align="center">
					{title}
				</Typography>
				{showBody(text, showText)}
				{buttonShowMore(text, showText)}
			</CardContent>
		</Card>
	);
}

export default CustomCard;
