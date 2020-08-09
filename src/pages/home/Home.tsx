import React from 'react'

import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core'

export const Home = () => (
	<>
		<Typography variant="h3" component="h1" style={{ textAlign: 'center' }}>Welcome!</Typography>
		<Typography>Main content goes here.</Typography>
		<Link href="google.com">Google link</Link>
	</>
)
