import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

export const SkipLinkStyles = makeStyles((theme) => createStyles({
	skipLink: {
		left: '-999px',
		position: 'absolute',
		top: 'auto',
		width: 1,
		height: 1,
		overflow: 'hidden',
		zIndex: -999,
		'&:focus': {
			color: theme.palette.getContrastText(theme.palette.primary.main),
			backgroundColor: theme.palette.primary.main,
			left: 'auto',
			width: 'auto',
			height: 'auto',
			overflow: 'auto',
			padding: 5,
			textAlign: 'center',
			fontSize: theme.typography.body1.fontSize,
			zIndex: 999,
			...theme.palette.focusBorder
		}
	}
}))

export const SkipLink = () => {
	const classes = SkipLinkStyles()

	return (
		<Link className={classes.skipLink} href="#main">
			<Typography>Skip to main content</Typography>
		</Link>
	)
}
