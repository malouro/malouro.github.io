import { CSSProperties } from 'react'
import { createMuiTheme, darken } from '@material-ui/core/styles'
import { grey, indigo, lightBlue } from '@material-ui/core/colors'

export const CommonFocusStyle: CSSProperties = {
	outline: `4px solid ${lightBlue[300]}`
}

export const DisableFocusStyle: CSSProperties = {
	outline: 'none'
}

export const MyTheme = createMuiTheme({
	palette: {
		type: 'dark',
		/** @ref https://www.w3.org/TR/WCAG21/#contrast-minimum */
		contrastThreshold: 4.5,
		background: {
			default: darken(indigo[900], 0.5),
			paper: grey[900]
		},
		focus: CommonFocusStyle,
		primary: {
			main: lightBlue[300]
		},
		secondary: {
			main: indigo[500]
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
		borderRadius: 0
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {},
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
		},
		MuiCard: {
			root: {
				backgroundColor: 'transparent'
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
