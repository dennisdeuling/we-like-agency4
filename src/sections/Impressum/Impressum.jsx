import React from 'react';
import { Grid, Typography } from '@mui/material';

function Impressum() {
	return (
		<React.Fragment>
			<Grid container display="flex" justifyContent="center" alignItems="center">
				<Grid
					item
					display="flex"
					justifyContent="center"
					alignItems="center"
					xs={12}
					md={12}
					lg={12}
				>
					<Typography variant="h1">Impressum</Typography>
				</Grid>
				<Grid
					item
					display="flex"
					justifyContent="center"
					alignItems="center"
					xs={12}
					md={12}
					lg={12}
				>
					<Typography variant="h2">Angaben gem&auml;&szlig; &sect; 5 TMG</Typography>
				</Grid>
				<Grid
					item
					display="flex"
					justifyContent="center"
					alignItems="center"
					xs={12}
					md={12}
					lg={12}
				>
					<Typography variant="p">
						Tamara Fritsch
						<br />
						Welikeagency
						<br />
						&#91;Stra&szlig;e&#93;
						<br />
						&#91;Postleitzahl&#93; &#91;Ort&#93;
					</Typography>
				</Grid>
				<Grid
					item
					display="flex"
					justifyContent="center"
					alignItems="center"
					xs={12}
					md={12}
					lg={12}
				>
					<Typography variant="h2">Kontakt</Typography>
				</Grid>
				<Grid
					item
					display="flex"
					justifyContent="center"
					alignItems="center"
					xs={12}
					md={12}
					lg={12}
				>
					<Typography variant="p">
						Telefon: &#91;Telefonnummer&#93;
						<br />
						E-Mail: &#91;E-Mail-Adresse&#93;
					</Typography>
				</Grid>
				<Grid
					item
					display="flex"
					justifyContent="center"
					alignItems="center"
					xs={12}
					md={12}
					lg={12}
				>
					<Typography variant="h2">
						Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
					</Typography>
				</Grid>
				<Grid
					item
					display="flex"
					justifyContent="center"
					alignItems="center"
					xs={12}
					md={12}
					lg={12}
				>
					<Typography variant="p">
						Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
						Verbraucherschlichtungsstelle teilzunehmen.
					</Typography>
				</Grid>
				<Grid
					item
					display="flex"
					justifyContent="center"
					alignItems="center"
					xs={12}
					md={12}
					lg={12}
				>
					<Typography variant="p">
						Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default Impressum;
