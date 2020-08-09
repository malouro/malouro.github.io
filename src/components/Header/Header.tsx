import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { Menu as MenuIcon } from '@material-ui/icons'
import { Hidden } from '@material-ui/core'

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
			<AppBar position="static" color="transparent" elevation={0}>
				<Toolbar>
					<Hidden smUp>
						<IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="Open menu">
							<MenuIcon />
						</IconButton>
					</Hidden>

					<Typography className={classes.title}>{props.children}</Typography>

					<Hidden xsDown>
						<Button color="inherit" href="/blog">Blog</Button>
						<Button color="inherit" href="/projects">Projects</Button>
						<Button color="inherit" href="/contact">Contact</Button>
					</Hidden>
				</Toolbar>
			</AppBar>
		</div>
	)
}
