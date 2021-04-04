import React from 'react'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'

export const HomeStyles = makeStyles((theme: Theme) => ({
	container: {
		textAlign: 'center'
	},
	title: {
		marginBottom: theme.spacing(4)
	},
	avatar: {
		width: theme.spacing(30),
		height: theme.spacing(30),
		backgroundColor: theme.palette.primary.main,
		textAlign: 'center',
		margin: 'auto',
		marginBottom: theme.spacing(5)
	}
}))

export const Home = () => {
	const classes = HomeStyles()
	const avatarUrl =
		'https://avatars2.githubusercontent.com/u/31722675?s=460&u=9bc1d330dd8f219fe7be7d4e1f57cea6efcc9920&v=4'

	return (
		<div className={classes.container}>
			<Avatar className={classes.avatar} src={avatarUrl} />
			<Typography variant="h1" className={classes.title}>
				Mike A. Louro
			</Typography>
			<Typography>Main content goes here.</Typography>
			<Link href="http://google.com">Google link</Link>
		</div>
	)
}
