import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { MyTheme } from '../root/Theme'
import { ProjectCard } from '../components'
import { ProjectData } from '../components/ProjectCard'

const projects : Array<ProjectData> = [
	{
		title: 'Project A',
		description: <>
			<Typography>This is a project. It&apos;s cool. :)</Typography>
			<Typography>This is a project. It&apos;s cool. :)</Typography>
			<Typography>This is a project. It&apos;s cool. :)</Typography>
			<Typography>This is a project. It&apos;s cool. :)</Typography>
			<Typography>This is a project. It&apos;s cool. :)</Typography>
			<Typography>This is a project. It&apos;s cool. :)</Typography>
		</>,
		thumbnail: `${process.env.PUBLIC_URL}/assets/images/food-1.jpg`
	},
	{
		title: 'Project B',
		description: 'This is another project. Maybe not as cool. :('
	}
]

export const Projects = () => {
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
			{projects.map((projectData, i) =>
				<ProjectCard key={i} data={projectData} />
			)}
		</>
	)
}
