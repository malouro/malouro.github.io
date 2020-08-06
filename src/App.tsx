import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Header } from './components/Header'

const myTheme = createMuiTheme({
	palette: {
		contrastThreshold: 4.5
	}
})

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<Header>Welcome!</Header>
		</ThemeProvider>
	)
}

export default App
