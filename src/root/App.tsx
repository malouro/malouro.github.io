import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Header, MainContent, SkipLink } from '../components'
import { MyTheme } from './Theme'

function App() {
	return (
		<ThemeProvider theme={MyTheme}>
			<CssBaseline />
			<SkipLink />
			<div>
				<Header />
				<MainContent id="main" tabIndex={-1} />
			</div>
		</ThemeProvider>
	)
}

export default App
