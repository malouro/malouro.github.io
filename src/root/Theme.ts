import { createMuiTheme } from '@material-ui/core/styles'
import { grey, teal } from '@material-ui/core/colors'
import { images } from './bg.json'

export const CommonFocusStyle = {
	outline: '3px solid black',
	outlineOffset: 0
}

export const DisableFocusStyle = {
	outline: 'none'
}

export const MyTheme = createMuiTheme({
	palette: {
		contrastThreshold: 4.5,
		focusBorder: CommonFocusStyle,
		primary: {
			main: teal[700]
		}
	},
	shape: {
		borderRadius: 5
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: grey[100],
					backgroundImage: images[0]
				},
				':focus': DisableFocusStyle
			}
		},
		MuiButton: {
			root: {
				textTransform: 'none'
			}
		},
		MuiLink: {
			root: {
				'&$focusVisible': CommonFocusStyle
			}
		}
	}
})
