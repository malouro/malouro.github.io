import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

import { Header, SkipLink } from '../components'
import { MainContent } from './MainContent'
import { MyTheme } from './Theme'

function App() {
	return (
		<ThemeProvider theme={MyTheme}>
			<CssBaseline />
			<SkipLink />
			<Header>
				<Typography>Michael A. Louro</Typography>
			</Header>
			<Router>
				<MainContent id="main" tabIndex={-1} />
			</Router>
		</ThemeProvider>
	)
}

export default App
