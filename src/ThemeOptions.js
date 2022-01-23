import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#f8CB6D'
		},
		secondary: {
			main: '#B09CDB'
		},
		text: {
			secondary: '#B09CDB'
		}
	},
	typography: {
		h1: {
			fontFamily: 'Heebo, sans-serif',
			fontSize: '2em',
			color: '#B09CDB',
			fontWeight: 800,
			margin: '30px 0px 10px 0px'
		},
		h2: {
			fontFamily: 'Heebo, sans-serif',
			fontSize: '1.5em'
		},
		h3: {
			fontFamily: 'Heebo, sans-serif',
			fontSize: '1.5em'
		},
		h4: {
			fontFamily: 'Heebo, sans-serif',
			fontSize: '1em'
		},
		h5: {
			fontFamily: 'Heebo, sans-serif',
			fontSize: '1em'
		},
		h6: {
			fontFamily: 'Heebo, sans-serif',
			fontSize: '1em'
		},
		subtitle1: {
			fontFamily: 'Open Sans, sans-serif'
		},
		subtitle2: {
			fontFamily: 'Open Sans, sans-serif'
		},
		body1: {
			fontFamily: 'Open Sans, sans-serif',
			fontSize: '1em'
		},
		body2: {
			fontFamily: 'Open Sans, sans-serif',
			fontSize: '1em'
		},
		button: {
			fontFamily: 'Open Sans, sans-serif'
		},
		caption: {
			fontFamily: 'Open Sans, sans-serif'
		},
		overline: {
			fontFamily: 'Open Sans, sans-serif'
		}
	}
});

export default theme;
