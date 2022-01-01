import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Button, Modal } from '@mui/material';
import Impressum from '../Impressum/Impressum';

const useStyles = makeStyles({
	background: {
		background: '#A6A19E',
		marginTop: '20px'
	},
	text: {
		textDecoration: 'none',
		color: 'white',
		fontFamily: 'Dosis',
		fontSize: '1em',
		margin: '10px 0px 10px 0px'
	}
});

function Disclaimer() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const classes = useStyles();
	return (
		<div className={classes.background}>
			<Grid display="flex" justifyContent="center" alignItems="center">
				{/*<Link to="/impressum">*/}
				{/*	<Typography className={classes.text} variant="p">*/}
				{/*		IMPRESSUM*/}
				{/*	</Typography>*/}
				{/*</Link>*/}
				<Button onClick={handleOpen}>Impressum</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Impressum />
				</Modal>
			</Grid>
		</div>
	);
}

export default Disclaimer;
