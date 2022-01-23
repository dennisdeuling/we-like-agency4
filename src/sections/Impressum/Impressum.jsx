import React from 'react';
import { Typography, Box } from '@mui/material';
import { content } from '../../content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const { name, street, zipcode, city, telephone, email } = content.personalData;

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

function Impressum({ ...props }) {
	const closeModal = () => {
		props.close();
	};

	return (
		<React.Fragment>
			<Box sx={style}>
				<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
					<FontAwesomeIcon
						style={{
							fontSize: '1em'
						}}
						icon={faTimes}
						onClick={closeModal}
					/>
				</div>
				<Typography variant="h1">Impressum</Typography>
				<Typography variant="h2">Angaben gemäß § 5 TMG</Typography>
				<Typography variant="p">
					{name}
					<br />
					WeLike Agency
					<br />
					{street}
					<br />
					{`${zipcode} ${city}`}
				</Typography>
				<br />
				<Typography variant="p">
					{`Telefon: ${telephone}`}
					<br />
					{`E - Mail: ${email}`}
				</Typography>
				<br />
				<br />
				<Typography variant="h2">
					Verbraucherstreitbeilegung / Universalschlichtungsstelle
				</Typography>
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
