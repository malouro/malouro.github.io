import React from 'react'
import { Route } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import { Home } from '../pages'

export const MainContentStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.paper,
		margin: theme.spacing(3, 2, 0, 2),
	},
	content: {
		margin: theme.spacing(2),
		padding: theme.spacing(2)
	}
}))

export interface MainContentProps {
	id: string,
	tabIndex?: 0 | -1
}

export const MainContent = (props: MainContentProps) => {
	const classes = MainContentStyles()

	return (
		<main {...props}>
			<Paper className={classes.container}>
				<div className={classes.content}>
					<Route path="/" component={Home} />
				</div>
			</Paper>
		</main>
	)
}
