import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
	image: {
		borderRadius: '50%',
		maxWidth: '100px',
		margin: '1em 0em 2em 0em'
	},
	section: {
		height: '400px'
	},
	slider: {
		height: '150px'
	},
	text: {
		width: '80%',
		// height: '100px',
		textAlign: 'center'
	},
	caret: {
		fontSize: '4em',
		color: '#B09CDB',
		margin: '-0.3em 0.5em 0em 0.5em',
		cursor: 'pointer'
	}
});

function TestimonialSection({ ...props }) {
	const [testimonials, setTestimonials] = useState(props.content.testimonials);
	const [activePerson, setActivePerson] = useState(0);
	const classes = useStyles();

	const handleClickLeft = () => {
		if (activePerson === 0) {
			setActivePerson(2);
		} else {
			setActivePerson(activePerson - 1);
		}
	};

	const handleClickRight = () => {
		if (activePerson === 2) {
			setActivePerson(0);
		} else {
			setActivePerson(activePerson + 1);
		}
	};

	return (
		<section>
			<Typography id="kundenmeinung" variant="h1" align="center">
				{props.content.title}
			</Typography>
			<Box className={classes.section}>
				<Box display="flex" justifyContent="center" alignItems="center" className={classes.slider}>
					<FontAwesomeIcon
						className={classes.caret}
						icon={faCaretLeft}
						onClick={() => handleClickLeft()}
					/>
					<img
						className={classes.image}
						src={testimonials[activePerson].image}
						alt={testimonials[activePerson].name}
					/>
					<FontAwesomeIcon
						className={classes.caret}
						icon={faCaretRight}
						onClick={() => handleClickRight()}
					/>
				</Box>
				<Box display="flex" justifyContent="center">
					<Typography
						className={classes.text}
						variant="subtitle1"
						dangerouslySetInnerHTML={{ __html: testimonials[activePerson].text }}
					/>
				</Box>
				<Box display="flex" justifyContent="center">
					<Typography className={classes.text} variant="subtitle1">
						{testimonials[activePerson].name}
					</Typography>
				</Box>
				<Box display="flex" justifyContent="center">
					<Typography className={classes.text} variant="subtitle1">
						{testimonials[activePerson].position}
					</Typography>
				</Box>
			</Box>
		</section>
	);
}

export default TestimonialSection;
