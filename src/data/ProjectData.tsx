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
		thumbnail: `${process.env.PUBLIC_URL}/assets/projects/GuntherBot.webp`,
		links: [
			{ url: 'https://github.com/malouro/gunther-bot', type: 'github' }
		]
	},
	{
		title: 'Ggis Bot',
		description: <>
			<Typography variant="body1">
				<code>ggis-bot</code> is a general-purpose <Link href="http://discord.com/">Discord</Link> chat bot. By cloning and running
				the a single command, (<code>yarn setup</code> or <code>npm run setup</code>) you&apos;ll have a bot connected to your server with
				the following features and commands:
				<ul>
					<li>
						<strong>LFG</strong>: Look for people to play games with via <code>!lfg</code>
					</li>
					<li>
						<strong>StreamLink</strong>: Announce to your server when you go live on Twitch via <code>!streamlink</code>
					</li>
					<li>
						<strong>AutoReact</strong>: Configurable automation of reactions/replies to users or key words being mentioned.
					</li>
					<li>
						Fun and random stuff, like: opening fortune cookies, fetching random Reddit posts & more
					</li>
				</ul>
			</Typography>
		</>,
		thumbnail: `${process.env.PUBLIC_URL}/assets/projects/GgisBot.png`,
		links: [
			{ url: 'https://github.com/malouro/ggis-bot', type: 'github' }
		]
	}
]

export default Projects
