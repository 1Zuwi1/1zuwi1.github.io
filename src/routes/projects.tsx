import { createFileRoute } from "@tanstack/react-router";
import ProjectCard from "#/components/ProjectCard";
import SectionHeading from "#/components/SectionHeading";
import { projects } from "#/data/portfolio";
import { useLanguage } from "#/i18n/context";

export const Route = createFileRoute("/projects")({
	component: ProjectsPage,
});

function ProjectsPage() {
	const { t } = useLanguage();
	const featured = projects.filter((p) => p.featured);
	const other = projects.filter((p) => !p.featured);

	return (
		<div className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					label={t.projectsPage.label}
					title={t.projectsPage.title}
					description={t.projectsPage.description}
				/>

				{/* Featured */}
				{featured.length > 0 && (
					<div className="mb-16">
						<h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-warm">
							{t.projectsPage.featured}
						</h3>
						<div className="grid gap-8 md:grid-cols-2">
							{featured.map((project) => (
								<ProjectCard key={project.title} project={project} />
							))}
						</div>
					</div>
				)}

				{/* Other projects */}
				{other.length > 0 && (
					<div>
						<h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-warm">
							{t.projectsPage.more}
						</h3>
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{other.map((project) => (
								<ProjectCard key={project.title} project={project} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
