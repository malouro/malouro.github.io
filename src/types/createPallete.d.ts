/* Extending the createPalette types */
import * as createPalette from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
	interface PaletteOptions {
		focusBorder?: object
	}

	interface Palette {
		focusBorder: object
	}
}
