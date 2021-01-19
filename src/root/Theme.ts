import { createMuiTheme, darken } from '@material-ui/core/styles'
import { indigo, cyan, lightBlue } from '@material-ui/core/colors'
import { images } from './bg.json'

export const CommonFocusStyle = {
	outline: `4px solid ${lightBlue[300]}`,
}

export const DisableFocusStyle = {
	outline: 'none'
}

export const MyTheme = createMuiTheme({
	palette: {
		type: 'dark',
		/** @ref https://www.w3.org/TR/WCAG21/#contrast-minimum */
		contrastThreshold: 4.5,
		background: {
			default: '#111',
			paper: darken(indigo[900], 0.5),
		},
		focusBorder: CommonFocusStyle,
		primary: {
			main: indigo[500]
		},
		secondary: {
			main: lightBlue[300]
		}
	},
	typography: {
		fontFamily: [
			'Montserrat',
			'Helvetica Neue',
			'\'sans-serif\''
		].join(',')
	},
	shape: {
		borderRadius: 10
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					// backgroundImage: images[0]
				},
				':focus': DisableFocusStyle
			}
		},
		MuiButtonBase: {
			root: {
				'&$focusVisible': CommonFocusStyle
			}
		},
		MuiLink: {
			root: {
				color: 'inherit',
				'&$focusVisible': CommonFocusStyle,
				'&:hover': {
					textDecorationThickness: '5px',
				}
			}
		}
	},
	props: {
		MuiButton: {
			disableFocusRipple: true
		},
		MuiIconButton: {
			disableFocusRipple: true
		},
		MuiLink: {
			underline: 'always'
		}
	}
})
