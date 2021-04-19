import React from 'react'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, useTheme } from '@material-ui/core'
import { MyTheme } from '../root/Theme'

export const HomeStyles = makeStyles((theme: typeof MyTheme) => ({
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

export default function Home(): JSX.Element {
	const classes = HomeStyles()
	const avatarUrl =
		'https://avatars2.githubusercontent.com/u/31722675?s=460&u=9bc1d330dd8f219fe7be7d4e1f57cea6efcc9920&v=4'
	const { spacing } = useTheme()

	return (
		<div className={classes.container}>
			<Avatar className={classes.avatar} src={avatarUrl} />
			{/* <Typography variant="h1" className={classes.title}>
				Mike A. Louro
			</Typography> */}

			<Typography variant="body1">
				<p>Hey there! Welcome to my website.</p>
				<p>This is still a work-in-progress, so please don&apos;t mind the mess as I tidy up.</p>
				<p>Thanks for stopping by. <span role="img" aria-label="smiley face">🙂</span></p>
			</Typography>


			<figure style={{ marginTop: spacing(8) }}>
				<Typography component="figcaption" variant="body2">Points of Contact:</Typography>
				<ul>
					<li>
						<Link href="https://www.linkedin.com/in/michael-louro-4b2185149/">LinkedIn</Link>
					</li>
					<li>
						<Link href="http://github.com/malouro">GitHub</Link>
					</li>
				</ul>
			</figure>

		</div>
	)
}
