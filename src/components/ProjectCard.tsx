import { Code, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

export interface ProjectData {
	/** Project title */
	title: string;
	/** Optional subtitle or role */
	subtitle?: string;
	/** Short description of the project */
	description: string;
	/** URL to a screenshot or preview image */
	image?: string;
	/** Technologies / tools used */
	technologies: string[];
	/** Your role in the project */
	role: string;
	/** Key achievements or highlights */
	achievements?: string[];
	/** Link to live demo */
	liveUrl?: string;
	/** Link to source code */
	repoUrl?: string;
	/** Whether this is a featured/highlighted project */
	featured?: boolean;
}

interface ProjectCardProps {
	project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Card className="group/project border border-border/60 bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-warm/20 hover:shadow-lg">
			{/* Image */}
			{project.image && (
				<div className="relative overflow-hidden">
					<img
						src={project.image}
						alt={`${project.title} preview`}
						className="aspect-video w-full object-cover transition-transform duration-500 group-hover/project:scale-105"
					/>
					{project.featured && (
						<div className="absolute top-3 right-3">
							<Badge className="bg-warm text-warm-foreground">Featured</Badge>
						</div>
					)}
				</div>
			)}

			<CardHeader>
				<div className="flex items-start justify-between gap-2">
					<div>
						<CardTitle className="font-heading text-lg font-bold">
							{project.title}
						</CardTitle>
						<h2>
							<CardDescription className="font-mono text-xs text-muted-foreground">
								{project.subtitle}
							</CardDescription>
						</h2>
						<CardDescription className="mt-1 font-mono text-xs text-warm">
							{project.role}
						</CardDescription>
					</div>
					{!project.image && project.featured && (
						<Badge className="bg-warm text-warm-foreground">Featured</Badge>
					)}
				</div>
			</CardHeader>

			<CardContent className="space-y-4">
				<p className="text-sm leading-relaxed text-muted-foreground">
					{project.description}
				</p>

				{/* Achievements */}
				{project.achievements && project.achievements.length > 0 && (
					<ul className="space-y-1.5">
						{project.achievements.map((achievement) => (
							<li
								key={achievement}
								className="flex items-start gap-2 text-sm text-muted-foreground"
							>
								<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm" />
								{achievement}
							</li>
						))}
					</ul>
				)}

				{/* Technologies */}
				<div className="flex flex-wrap gap-1.5">
					{project.technologies.map((tech) => (
						<Badge key={tech} variant="secondary" className="font-mono text-xs">
							{tech}
						</Badge>
					))}
				</div>
			</CardContent>

			{/* Links */}
			{(project.liveUrl || project.repoUrl) && (
				<CardFooter className="gap-3">
					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 rounded-full bg-warm px-4 py-1.5 font-mono text-xs font-medium text-warm-foreground transition-all hover:opacity-90"
						>
							<ExternalLink size={13} />
							Live Demo
						</a>
					)}
					{project.repoUrl && (
						<a
							href={project.repoUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 font-mono text-xs font-medium text-muted-foreground transition-all hover:border-warm/30 hover:text-foreground"
						>
							<Code size={13} />
							Source
						</a>
					)}
				</CardFooter>
			)}
		</Card>
	);
}
