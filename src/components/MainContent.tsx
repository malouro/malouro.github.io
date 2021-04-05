import React from 'react'
import { Route } from 'react-router'
import clsx from 'clsx'

import { Box, useMediaQuery } from '@material-ui/core'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import { Home, Projects } from '../pages'

const MainContentStyles = makeStyles((theme: Theme) => ({
	container: {
		backgroundColor: 'transparent',
		outline: `2px dotted ${theme.palette.primary.main}`,
		width: '100%',
		position: 'relative',
		marginTop: theme.spacing(-4),
		marginBottom: theme.spacing(3),
		margin: '0 auto',
		padding: theme.spacing(4, 6, 3, 6),
		borderRadius: theme.shape.borderRadius
	},
	containerSm: {
		maxWidth: 'auto',
		borderRadius: 0,
		padding: theme.spacing(4, 0, 3, 0)
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
			<Box className={clsx(classes.container, smallView && classes.containerSm)}>
				<div className={classes.content}>
					<Route path="/" exact component={Home} />
					<Route path="/projects" component={Projects} />
				</div>
			</Box>
		</main>
	)
}
