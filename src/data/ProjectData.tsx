import * as React from 'react'
import { Link, Typography } from '@material-ui/core'
import { ProjectData } from '../components/ProjectCard'

const Projects: ReadonlyArray<ProjectData> = [
	{
		title: 'Ggis Bot',
		description: <>
			<Typography variant="body1">
				<code>ggis-bot</code> is a general-purpose <Link href="http://discord.com/">Discord</Link> chat bot written in NodeJS.
				By cloning the project and running a single command, you&apos;ll have a bot connected to your server with the following features and commands:
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
			<Typography>
				<strong>Quick Startup Guide:</strong>
				<ol>
					<li>
						Clone the project via git and run <code>yarn setup</code> or <code>npm run setup</code>
					</li>
					<li>
						Answer the prompts with the information requested. Make sure you have a <Link
							href="https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token">
							Discord application & bot token
						</Link> at the ready.
					</li>
					<li>
						Run <code>yarn start</code> or <code>npm run start</code>, and watch your bot go online!
					</li>
				</ol>
			</Typography>
			<Typography variant="caption">
				Check the <Link href="https://github.com/malouro/ggis-bot/blob/master/README.md">README</Link>{' '}
				for more detailed instructions & documentation.
			</Typography>
		</>,
		thumbnail: `${process.env.PUBLIC_URL}/assets/projects/GgisBot.png`,
		links: [
			{ url: 'https://github.com/malouro/ggis-bot', type: 'github' }
		]
	},
	{
		title: 'Gunther Bot',
		description: <>
			<Typography variant="body1">
				<code>gunther-bot</code> is a <Link href="http://discord.com/">Discord</Link> chat bot, written NodeJS and TypeScript,
				that is able to answer your questions regarding <Link href="http://stardewvalley.net">Stardew Valley</Link>.
				With data extrapolated from the <Link href="https://stardewvalleywiki.com/">Stardew Valley Wiki</Link>, it can help
				you with...
				<ul>
					<li><strong>Characters & villagers</strong>
						<ul>
							<li>Displays birthdays and favorite gifts</li>
						</ul>
					</li>
					<li><strong>Calendar</strong>
						<ul>
							<li>View a whole season&apos;s calendar</li>
							<li>Get upcoming events</li>
						</ul>
					</li>
				</ul>
			</Typography>
		</>,
		thumbnail: `${process.env.PUBLIC_URL}/assets/projects/GuntherBot.webp`,
		links: [
			{ url: 'https://github.com/malouro/gunther-bot', type: 'github' }
		]
	},
]

export default Projects
