import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import {Menu as MenuIcon} from '@material-ui/icons'

export const HeaderStyles = makeStyles((theme: Theme) => ({
	container: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	}
}))

export interface HeaderProps<> {
	children: React.ReactNode
}

export const Header = (props: HeaderProps) => {
	const classes = HeaderStyles()

	return (
		<div className={classes.container}>
			<AppBar position="static" color="default">
				<Toolbar>
					<IconButton className={classes.menuButton} edge="start" color="inherit">
						<MenuIcon />
					</IconButton>
					<Typography className={classes.title}>{props.children}</Typography>
					<Button color="inherit">Test</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}
