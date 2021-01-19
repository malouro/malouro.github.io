import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Header, MainContent, SkipLink } from '../components'
import { MyTheme } from './Theme'

function App() {
	return (
		<div id="root">
			<ThemeProvider theme={MyTheme}>
				<CssBaseline />
				<SkipLink />
				<Header />
				<Router>
					<MainContent id="main" tabIndex={-1} />
				</Router>
			</ThemeProvider>
		</div>
	)
}

export default App
