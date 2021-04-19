import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { MyTheme } from '../root/Theme'
import { ProjectCard } from '../components'
import { Projects } from '../data'

export default function ProjectsPage(): JSX.Element {
	const useStyles = makeStyles((theme: typeof MyTheme) => ({
		pageTitle: {
			marginBottom: theme.spacing(5)
		}
	}))
	const classes = useStyles()

	return (
		<>
			<Typography
				variant="h1"
				className={classes.pageTitle}
			>
				Projects
			</Typography>
			{Projects.map((projectData, i) =>
				<ProjectCard key={i} data={projectData} />
			)}
		</>
	)
}
