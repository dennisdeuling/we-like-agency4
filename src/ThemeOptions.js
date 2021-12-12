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
			fontFamily: 'Vidaloka',
			fontSize: '2em',
			color: '#B09CDB',
			fontWeight: 800,
			margin: '30px 0px 10px 0px'
		},
		h2: {
			fontFamily: 'Vidaloka',
			fontSize: '1.5em'
		},
		h3: {
			fontFamily: 'Vidaloka',
			fontSize: '1.5em'
		},
		h4: {
			fontFamily: 'Vidaloka',
			fontSize: '1em'
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
			fontSize: '1em'
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
