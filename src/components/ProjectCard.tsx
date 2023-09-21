import React, { ReactElement } from 'react'
import { Card, CardContent, CardHeader, CardMedia, CardActions, Button, Typography, Hidden } from '@material-ui/core'
import { Chat as ChatIcon, GitHub as GitHubIcon } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import { MyTheme } from '../theme'

export interface ProjectLink {
	url: string,
	type?: 'github' | 'blog'
}

export interface ProjectData {
	title: string | ReactElement,
	subtitle?: string | ReactElement,
	description: string | ReactElement,
	thumbnail?: string,
	links?: Array<ProjectLink>,
}

interface ProjectCardProps {
	classes?:{
		root?: string,
		thumbnail?: string,
		content?: string
	},
	outlineThickness?: number,
	data: ProjectData
}

const ProjectCardStyles = (theme: typeof MyTheme) => ({
	root: {
		minWidth: theme.spacing(40),
		marginBottom: theme.spacing(4),
		display: 'flex',
		transition: 'none',
		// Desktop/Tablet?
		[theme.breakpoints.up('md')]: {
			boxShadow: (props: ProjectCardProps) =>
				`inset -${props.outlineThickness}px 0 ${theme.palette.primary.main}`
		},
		// Mobile
		[theme.breakpoints.down('sm')]: {
			boxShadow: (props: ProjectCardProps) =>
				`inset 0 -${props.outlineThickness}px ${theme.palette.primary.main}`
		}
	},
	thumbnail: {
		margin: theme.spacing(4),
		[theme.breakpoints.up('md')]: {
			height: theme.spacing(40),
			paddingLeft: theme.spacing(40),
		},
		[theme.breakpoints.down('sm')]: {
			height: theme.spacing(20),
			paddingLeft: theme.spacing(20),
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			height: theme.spacing(10),
			margin: 'auto',
			// paddingLeft: theme.spacing(20),
		},
		// filter: `drop-shadow(${
		// 	theme.spacing(1)
		// }px ${
		// 	theme.spacing(1)
		// }px 3px ${
		// 	theme.palette.common.black
		// })`
	},
	content: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(4)
		},
		[theme.breakpoints.up('md')]: {
			marginRight: theme.spacing(4)
		},
	}
})

const projectLinkIcons = {
	github: <GitHubIcon />,
	blog: <ChatIcon />
}

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps): JSX.Element => {
	const { classes, data, ...other } = props
	const { title, subtitle, description, thumbnail, links } = data

	delete other.outlineThickness

	const renderThumbnail = () => <>{thumbnail && <CardMedia className={classes.thumbnail} image={thumbnail} />}</>

	return (
		<Card className={classes.root} {...other}>
			<Hidden xsDown>{renderThumbnail()}</Hidden>
			<div className={classes.content}>
				<Hidden smUp>{renderThumbnail()}</Hidden>
				<CardHeader title={title} subheader={subtitle} titleTypographyProps={{ variant: 'h2' }} />
				<CardContent>
					<Typography>{description}</Typography>
				</CardContent>
				<CardActions>
					{links.length > 0 && links.map((link, index) => {
						return <Button
							key={`project-card-link-${index}`}
							size="small"
							variant="outlined"
							color="primary"
							startIcon={projectLinkIcons[link.type] || null}
							href={link.url}
						>{link.type}</Button>
					})}
				</CardActions>
			</div>
		</Card>
	)
}

ProjectCard.defaultProps = {
	outlineThickness: 10
}

export default withStyles(ProjectCardStyles)(ProjectCard)
