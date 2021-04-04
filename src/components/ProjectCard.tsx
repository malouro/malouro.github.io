import React, { ReactElement } from 'react'
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { MyTheme } from '../root/Theme'

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
		boxShadow: (props: ProjectCardProps) => ([
			`inset 0 -${props.outlineThickness}px 0 ${theme.palette.primary.main}`,
			`inset -${props.outlineThickness}px 0 ${theme.palette.primary.main}`
		].join(','))
	},
	thumbnail: {
		[theme.breakpoints.down('sm')]: {
			height: theme.spacing(20),
			paddingLeft: theme.spacing(20),
		},
		[theme.breakpoints.up('md')]: {
			height: theme.spacing(40),
			paddingLeft: theme.spacing(40),
		},
	},
	content: {
		marginLeft: theme.spacing(2)
	}
})

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps): JSX.Element => {
	const { classes, data, ...other } = props
	const { title, subtitle, description, thumbnail } = data

	return (
		<Card className={classes.root} {...other}>
			{thumbnail && <CardMedia className={classes.thumbnail} image={thumbnail} />}
			<div className={classes.content}>
				<CardHeader title={title} subheader={subtitle} titleTypographyProps={{ variant: 'h2' }} />
				<CardContent>
					<Typography>{description}</Typography>
				</CardContent>
			</div>
		</Card>
	)
}

ProjectCard.defaultProps = {
	outlineThickness: 10
}

export default withStyles(ProjectCardStyles)(ProjectCard)
