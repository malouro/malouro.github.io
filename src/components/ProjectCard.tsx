import React, { ReactElement } from 'react'
import { Card, CardContent, CardHeader, CardMedia, CardActions, Button, Typography } from '@material-ui/core'
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
		boxShadow: (props: ProjectCardProps) =>
			`inset -${props.outlineThickness}px 0 ${theme.palette.primary.main}`
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
		margin: theme.spacing(4),
		filter: `drop-shadow(${
			theme.spacing(1)
		}px ${
			theme.spacing(1)
		}px 3px ${
			theme.palette.common.black
		})`
	},
	content: {
		marginLeft: theme.spacing(2)
	}
})

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps): JSX.Element => {
	const { classes, data, ...other } = props
	const { title, subtitle, description, thumbnail, links } = data

	delete other.outlineThickness

	return (
		<Card className={classes.root} {...other}>
			{thumbnail && <CardMedia className={classes.thumbnail} image={thumbnail} />}
			<div className={classes.content}>
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
