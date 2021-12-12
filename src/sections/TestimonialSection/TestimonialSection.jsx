import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import Dummy from '../../assets/images/dummy.png';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const data = [
	{
		name: 'Max Mustermann',
		text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur tridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.',
		position: 'Position',
		image: Dummy
	},
	{
		name: 'Max Mustermann',
		text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur tridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.',
		position: 'Position',
		image: Dummy
	},
	{
		name: 'Max Mustermann',
		text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur tridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.',
		position: 'Position',
		image: Dummy
	}
];

const useStyles = makeStyles({
	image: {
		borderRadius: '50%'
	},
	text: {
		width: '80%',
		textAlign: 'center'
	},
	caret: {
		fontSize: '5em',
		color: '#B09CDB',
		margin: '0px 150px 0px 150px',
		cursor: 'pointer'
	}
});

function TestimonialSection() {
	const [testimonials, setTestimonials] = useState(data);
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
			<Typography variant="h1" align="center">
				Dass sagen meine Kunden:
			</Typography>
			<Box>
				<Box display="flex" justifyContent="center" alignItems="center">
					<FontAwesomeIcon
						className={classes.caret}
						icon={faCaretLeft}
						onClick={() => handleClickLeft()}
					/>
					<img className={classes.image} src={testimonials[activePerson].image} />
					<FontAwesomeIcon
						className={classes.caret}
						icon={faCaretRight}
						onClick={() => handleClickRight()}
					/>
				</Box>
				<Box display="flex" justifyContent="center">
					<Typography className={classes.text} variant="subtitle1">
						{testimonials[activePerson].text}
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
