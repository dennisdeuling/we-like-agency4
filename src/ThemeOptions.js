import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#B09CDB'
		},
		secondary: {
			main: '#f8cb6d'
		},
		text: {
			secondary: '#B09CDB'
		}
	},
	typography: {
		h1: {
			fontFamily: 'Vidaloka',
			fontSize: '4em',
			color: '#B09CDB',
			fontWeight: 800,
			margin: '30px 0px 10px 0px'
		},
		h2: {
			fontFamily: 'Vidaloka',
			fontSize: '3em'
		},
		h3: {
			fontFamily: 'Vidaloka',
			fontSize: '2em'
		},
		h4: {
			fontFamily: 'Vidaloka',
			fontSize: '1.5em'
		},
		h5: {
			fontFamily: 'Vidaloka',
			fontSize: '1em'
		},
		h6: {
			fontFamily: 'Vidaloka',
			fontSize: '1em'
		},
		subtitle1: {
			fontFamily: 'Dosis'
		},
		subtitle2: {
			fontFamily: 'Dosis'
		},
		body1: {
			fontFamily: 'Dosis',
			fontSize: '1.2em'
		},
		body2: {
			fontFamily: 'Dosis',
			fontSize: '1em'
		},
		button: {
			fontFamily: 'Fira Sans Extra Condensed'
		},
		caption: {
			fontFamily: 'Dosis'
		},
		overline: {
			fontFamily: 'Dosis'
		}
		// fontFamily: 'Fira Sans Extra Condensed',
		// fontSize: '1.5em'
	}
});

export default theme;
