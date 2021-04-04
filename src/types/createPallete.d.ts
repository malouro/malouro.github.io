/**
 * Extending the createPalette types
 * Allows for type-defining of custom palette/theme variables
 */

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import * as createPalette from '@material-ui/core/styles/createPalette'
import { CSSProperties } from 'react'

declare module '@material-ui/core/styles/createPalette' {
	interface PaletteOptions {
		focus?: CSSProperties
	}

	interface Palette {
		focus: CSSProperties
	}
}
