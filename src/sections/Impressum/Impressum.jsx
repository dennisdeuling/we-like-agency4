import React from 'react';
import { Typography, Box } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
};

function Impressum() {
	return (
		<React.Fragment>
			<Box sx={style}>
				<Typography variant="h1">Impressum</Typography>
				<Typography variant="h2">Angaben gemäß § 5 TMG</Typography>
				<Typography variant="p">
					Tamara Fritsch
					<br />
					Welikeagency
					<br />
					[Straße]
					<br />
					[Postleitzahl] [Ort]
				</Typography>
				<br />
				<Typography variant="p">
					Telefon: [Telefonnummer]
					<br />
					E-Mail: [E-Mail-Adresse]
				</Typography>
				<br />
				<Typography variant="h2">
					Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
				</Typography>
				<br />
				<Typography variant="p">
					Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
					Verbraucherschlichtungsstelle teilzunehmen.
				</Typography>
				<br />
				<Typography variant="p">
					Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
				</Typography>
			</Box>
		</React.Fragment>
	);
}

export default Impressum;
