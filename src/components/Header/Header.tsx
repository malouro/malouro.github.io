import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Menu as MenuIcon } from '@material-ui/icons'

export const HeaderStyles = makeStyles((theme: Theme) => ({
	container: {
		position: 'relative',
		height: 200,
		overflow: 'hidden',
		color: theme.palette.getContrastText(theme.palette.primary.dark)
	},
	headerBg: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		width: '100%',
		height: '100%',
		backgroundImage:
			`linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
		transform: 'skewY(-4deg)',
		transformOrigin: 'top left'
	},
	title: {
		flexGrow: 1
	},
	menuButton: { }
}))

export interface HeaderProps<> {
	/* This renders in the "title" */
	children: React.ReactNode
}

export const Header = (props: HeaderProps) => {
	const theme = useTheme()
	const classes = HeaderStyles()

	return (
		<header className={classes.container}>
			<div className={classes.headerBg} />
			<AppBar position="static" color="transparent" elevation={0}>
				<Toolbar>
					<Typography className={classes.title}>{props.children}</Typography>
					{useMediaQuery(theme.breakpoints.down('xs')) ? (
						// Mobile view
						<IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="Open menu">
							<MenuIcon />
						</IconButton>
					) : (
						// Desktop view
						<>
							<Button color="inherit" href="/blog">Blog</Button>
							<Button color="inherit" href="/projects">Projects</Button>
							<Button color="inherit" href="/contact">Contact</Button>
						</>
					)}
				</Toolbar>
			</AppBar>
		</header>
	)
}
