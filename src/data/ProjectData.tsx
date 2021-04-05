import * as React from 'react'
import { Typography } from '@material-ui/core'
import { ProjectData } from '../components/ProjectCard'

const Projects: ReadonlyArray<ProjectData> = [
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

export default Projects
