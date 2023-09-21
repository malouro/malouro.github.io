import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Header, MainContent, SkipLink } from '../components'
import { MyTheme } from '../theme'

function App() {
	return (
		<ThemeProvider theme={MyTheme}>
			<CssBaseline />
			<SkipLink />
			<Header />
			<Router>
				<MainContent id="main" tabIndex={-1} />
			</Router>
		</ThemeProvider>
	)
}

export default App
