import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

export const SkipLinkStyles = makeStyles((theme) => createStyles({
	container: {},
	skipLink: {
		left: '-999px',
		position: 'absolute',
		top: 'auto',
		width: 1,
		height: 1,
		overflow: 'hidden',
		zIndex: -999,

		color: theme.palette.getContrastText(theme.palette.primary.main),
		backgroundColor: theme.palette.background.default,
		fontSize: theme.typography.button.fontSize,

		'&:focus': {
			left: 'auto',
			width: 'auto',
			height: 'auto',
			overflow: 'auto',
			padding: theme.spacing(1, 2),
			zIndex: 999,
			...theme.palette.focusBorder
		}
	}
}))

export const SkipLink = () => {
	const classes = SkipLinkStyles()

	return (
		<div className={classes.container}>
			<Link className={classes.skipLink} href="#main">
				<Typography color="inherit">Skip to main content</Typography>
			</Link>
		</div>
	)
}
