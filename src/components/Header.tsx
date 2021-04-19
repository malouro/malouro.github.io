import React from 'react'
import { makeStyles, Theme, useTheme, darken } from '@material-ui/core/styles'
import {
	AppBar,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Link,
	Toolbar,
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
	Menu as MenuIcon,
	HomeOutlined as HomeIcon,
	Info as AboutIcon,
	Brush as ArtIcon,
	Build as ProjectIcon,
	QuestionAnswer as BlogIcon
} from '@material-ui/icons'

const HeaderStyles = makeStyles((theme: Theme) => ({
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
			`linear-gradient(${
				darken(theme.palette.secondary.dark, 0.5)
			}, ${
				theme.palette.background.default
			})`
	},
	gutter: {
		flexGrow: 1
	},
	menuButton: { },
	optionButton: {
		marginLeft: theme.spacing(2)
	}
}))

export default function Header (): JSX.Element {
	const theme = useTheme()
	const classes = HeaderStyles()
	const [anchorEl, setAnchorEl] = React.useState<Element|null>(null)

	const handleClick = (event: any) => { setAnchorEl(event.currentTarget) }
	const handleClose = () => { setAnchorEl(null) }

	const menuOptions = [
		{ title: 'About', icon: AboutIcon },
		{ title: 'Projects', icon: ProjectIcon },
		{ title: 'Art', icon: ArtIcon },
		{ title: 'Blog', icon: BlogIcon }
	]

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
							<Menu
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								{[...menuOptions.map(({ title }, index) => (
									<MenuItem
										key={`option-${index}`}
										onClick={handleClose}
										button
									>
										<Link href={`/${title.toLocaleLowerCase()}`}>{title}</Link>
									</MenuItem>
								))]}
							</Menu>
						</>
					) : (
						// Desktop view
						<>
							{[...menuOptions.map(({ title, icon: OptionIcon }, index) => (
								<Button
									key={`option-${index}`}
									className={classes.optionButton}
									color="inherit"
									href={`/${title.toLocaleLowerCase()}`}
									startIcon={<OptionIcon />}
								>
									{title}
								</Button>
							))]}
						</>
					)}
				</Toolbar>
			</AppBar>
		</header>
	)
}
