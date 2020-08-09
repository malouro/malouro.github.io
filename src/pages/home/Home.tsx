import React from 'react'

import Typography from '@material-ui/core/Typography'
import { Link, makeStyles } from '@material-ui/core'

export const HomeStyles = makeStyles(theme => ({
	title: {
		marginBottom: theme.spacing(4)
	}
}))

export const Home = () => {
	const classes = HomeStyles()

	return (
		<>
			<Typography variant="h4" component="h1" className={classes.title}>
				Welcome! <span role="img" aria-label="Hand waving 'hello'">👋</span>
			</Typography>
			<Typography>Main content goes here.</Typography>
			<Link href="google.com">Google link</Link>
		</>
	)
}
