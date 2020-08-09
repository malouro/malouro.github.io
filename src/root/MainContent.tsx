import React from 'react'
import { Route } from 'react-router'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Paper from '@material-ui/core/Paper'
import { Home } from '../pages'

export const MainContentStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.paper,
		maxWidth: 750,
		position: 'relative',
		marginTop: theme.spacing(-4),
		marginBottom: theme.spacing(3),
		margin: '0 auto',
		padding: theme.spacing(4, 6, 3, 6),
		borderRadius: theme.shape.borderRadius
	},
	containerSm: {
		maxWidth: 'auto',
		borderRadius: 0
	},
	content: {
		padding: theme.spacing(3)
	}
}))

export interface MainContentProps {
	id: string,
	tabIndex?: 0 | -1
}

export const MainContent = (props: MainContentProps) => {
	const theme = useTheme()
	const classes = MainContentStyles()
	const smallView = useMediaQuery(theme.breakpoints.down('xs'))

	return (
		<main {...props}>
			<Paper className={clsx(classes.container, smallView && classes.containerSm)}>
				<div className={classes.content}>
					<Route path="/" component={Home} />
				</div>
			</Paper>
		</main>
	)
}
