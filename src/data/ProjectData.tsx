import * as React from 'react'
import { Link, Typography } from '@material-ui/core'
import { ProjectData } from '../components/ProjectCard'

const Projects: ReadonlyArray<ProjectData> = [
	{
		title: 'Gunther Bot',
		description: <>
			<Typography variant="body1">
				<code>gunther-bot</code> is a <Link href="http://discord.com/">Discord</Link> chat bot that is able to parse
				questions about <Link href="http://stardewvalley.net">Stardew Valley</Link>, sent by the user, and reply back
				with responses. The scope of the questions that <code>gunther-bot</code> is able to answer is limited to the following:
				<ul>
					<li>Characters & villagers</li>
					<li>Calendar events</li>
					<li>Items & resources</li>
				</ul>
			</Typography>
		</>,
		thumbnail: 'https://camo.githubusercontent.com/d9e122702811c8fe400d0f96052a588d7457136f6dc998824ab1953defd07073/68747470733a2f2f73746172646577636f6d6d756e69747977696b692e636f6d2f6d6564696177696b692f696d616765732f332f33642f47756e746865722e706e67'
	},
	{
		title: 'Project B',
		description: 'This is another project. Maybe not as cool. :('
	}
]

export default Projects
