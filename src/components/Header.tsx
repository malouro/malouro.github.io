import React from 'react'
import { makeStyles, Theme, useTheme, darken } from '@material-ui/core/styles'
import {
	AppBar,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Menu as MenuIcon, HomeOutlined as HomeIcon } from '@material-ui/icons'

export const HeaderStyles = makeStyles((theme: Theme) => ({
	container: {
		position: 'relative',
		height: theme.spacing(20),
		overflow: 'hidden',
		color: theme.palette.getContrastText(theme.palette.secondary.dark)
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
			`linear-gradient(${darken(theme.palette.secondary.dark, 0.5)}, ${theme.palette.background.default})`
	},
	gutter: {
		flexGrow: 1
	},
	menuButton: { }
}))

export const Header = () => {
	const theme = useTheme()
	const classes = HeaderStyles()
	const [anchorEl, setAnchorEl] = React.useState<Element|null>(null)

	const handleClick = (event: any) => { setAnchorEl(event.currentTarget) }
	const handleClose = () => { setAnchorEl(null) }

	const menuOptions = ['About', 'Projects', 'Art', 'Blog']

	return (
		<header className={classes.container}>
			<div className={classes.headerBg} />
			<AppBar
				component="div"
				position="static"
				color="transparent"
				elevation={0}
			>
				<Toolbar>
					<IconButton aria-label="Go to home page" component="a" href="/">
						<HomeIcon color="inherit" />
					</IconButton>
					<div style={{ flexGrow: 1 }} className={classes.gutter} />
					{useMediaQuery(theme.breakpoints.down('xs')) ? (
						// Mobile view
						<>
							<IconButton
								className={classes.menuButton}
								edge="start"
								color="inherit"
								aria-label="Open navigation menu"
								onClick={handleClick}
							>
								<MenuIcon />
							</IconButton>
							<Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
								{menuOptions.map(option => (
									<MenuItem key={`MenuOption-${option}`} button onClick={handleClose}>
										{option}
									</MenuItem>
								))}
							</Menu>
						</>
					) : (
						// Desktop view
						<>
							{menuOptions.map(option => (
								<Button
									key={`MenuOption-${option}`}
									color="inherit"
									href={`/${option.toLocaleLowerCase()}`}
								>
									{option}
								</Button>
							))}
						</>
					)}
				</Toolbar>
			</AppBar>
		</header>
	)
}
