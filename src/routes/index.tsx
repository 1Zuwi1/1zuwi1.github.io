import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowDown,
	ArrowRight,
	GraduationCap,
	Mail,
	MapPin,
} from "lucide-react";
import ProjectCard from "#/components/ProjectCard";
import SectionHeading from "#/components/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	education,
	personalInfo,
	pickLocale,
	projects,
	skillCategories,
	techStack,
} from "#/data/portfolio";
import { useLanguage } from "#/i18n/context";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<div className="overflow-x-hidden">
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<EducationSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function HeroSection() {
	const { language, t } = useLanguage();

	return (
		<section className="relative flex min-h-[85vh] items-center px-6 py-24">
			{/* Decorative elements */}
			<div className="pointer-events-none absolute top-20 left-10 h-72 w-72 rounded-full bg-warm/5 blur-3xl" />
			<div className="pointer-events-none absolute right-10 bottom-20 h-96 w-96 rounded-full bg-warm/3 blur-3xl" />

			<div className="stagger-children mx-auto max-w-6xl">
				<div className="flex flex-col gap-6">
					<span className="inline-flex w-fit items-center gap-2 rounded-full border border-warm/20 bg-warm/5 px-4 py-1.5 font-mono text-xs font-medium text-warm">
						<span className="h-2 w-2 animate-pulse rounded-full bg-warm" />
						{t.home.availableForWork}
					</span>

					<h1 className="font-heading text-5xl leading-[1.1] font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
						{t.home.hiIm}{" "}
						<span className="relative inline-block">
							<span className="relative z-10">{personalInfo.name}</span>
							<span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-warm/20 sm:h-4" />
						</span>
					</h1>

					<p className="max-w-xl font-mono text-lg text-muted-foreground sm:text-xl">
						{pickLocale(personalInfo.title, language)}
					</p>

					<p className="max-w-lg text-base leading-relaxed text-muted-foreground">
						{pickLocale(personalInfo.tagline, language)}
					</p>

					<div className="flex flex-wrap items-center gap-3 pt-2">
						<a href={`mailto:${personalInfo.email}`}>
							<Button
								size="lg"
								className="gap-2 bg-warm text-warm-foreground hover:bg-warm/90"
							>
								<Mail size={16} />
								{t.home.getInTouch}
							</Button>
						</a>
					</div>

					<div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
						<span className="inline-flex items-center gap-1.5">
							<MapPin size={14} className="text-warm" />
							{pickLocale(personalInfo.location, language)}
						</span>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="mt-16 flex justify-center">
					<a
						href="#about"
						className="flex animate-bounce flex-col items-center gap-1 text-muted-foreground/40 transition-colors hover:text-warm"
					>
						<span className="font-mono text-[10px] uppercase tracking-widest">
							{t.home.scroll}
						</span>
						<ArrowDown size={16} />
					</a>
				</div>
			</div>
		</section>
	);
}

/* ═══════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════ */
function AboutSection() {
	const { language, t } = useLanguage();
	const bio = pickLocale(personalInfo.bio, language);

	return (
		<section id="about" className="scroll-mt-20 px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					label={t.home.about.label}
					title={t.home.about.title}
					description={t.home.about.description}
				/>

				<div className="grid gap-12 md:grid-cols-2">
					<div className="space-y-4">
						{bio.map((paragraph) => (
							<p
								key={paragraph.slice(0, 20)}
								className="text-base leading-relaxed text-muted-foreground"
							>
								{paragraph}
							</p>
						))}
					</div>

					{/* Tech stack cloud */}
					<div className="flex flex-col gap-4">
						<h3 className="font-mono text-xs font-medium uppercase tracking-widest text-warm">
							{t.home.about.techStack}
						</h3>
						<div className="flex flex-wrap gap-2">
							{techStack.map((tech) => (
								<Badge
									key={tech}
									variant="outline"
									className="px-3 py-1.5 font-mono text-xs transition-colors hover:border-warm/30 hover:text-warm"
								>
									{tech}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

/* ═══════════════════════════════════════════
   SKILLS
   ═══════════════════════════════════════════ */
function SkillsSection() {
	const { language, t } = useLanguage();

	return (
		<section className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					label={t.home.skills.label}
					title={t.home.skills.title}
					description={t.home.skills.description}
				/>

				<div className="grid gap-8 md:grid-cols-3">
					{skillCategories.map((category) => {
						const title = pickLocale(category.title, language);
						return (
							<div
								key={title}
								className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-warm/20 hover:shadow-lg"
							>
								<h3 className="font-heading text-lg font-bold text-foreground">
									{title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{pickLocale(category.description, language)}
								</p>
								<div className="mt-4 flex flex-wrap gap-1.5">
									{category.skills.map((skill) => (
										<Badge
											key={skill}
											variant="secondary"
											className="font-mono text-xs"
										>
											{skill}
										</Badge>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

/* ═══════════════════════════════════════════
   EDUCATION
   ═══════════════════════════════════════════ */
function EducationSection() {
	const { language, t } = useLanguage();

	return (
		<section className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					label={t.home.education.label}
					title={t.home.education.title}
					description={t.home.education.description}
				/>

				<div className="space-y-0">
					{education.map((item, i) => {
						const highlights = item.highlights
							? pickLocale(item.highlights, language)
							: undefined;

						return (
							<div
								key={item.school}
								className="relative flex gap-6 pb-12 last:pb-0"
							>
								{/* Timeline line + dot */}
								<div className="flex flex-col items-center">
									<div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-warm bg-background">
										<GraduationCap size={14} className="text-warm" />
									</div>
									{i < education.length - 1 && (
										<div className="w-px flex-1 bg-linear-to-b from-warm/40 to-transparent" />
									)}
								</div>

								{/* Content */}
								<div className="-mt-0.5 flex-1 space-y-2 pb-2">
									<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
										<h3 className="font-heading text-lg font-bold text-foreground">
											{pickLocale(item.degree, language)}
										</h3>
										{item.schoolUrl ? (
											<a
												href={item.schoolUrl}
												target="_blank"
												rel="noreferrer"
												className="font-mono text-sm text-warm transition-colors hover:text-warm/80"
											>
												@ {item.school}
											</a>
										) : (
											<span className="font-mono text-sm text-warm">
												@ {item.school}
											</span>
										)}
									</div>
									<p className="font-mono text-xs text-muted-foreground">
										{item.period}
									</p>
									<p className="text-sm leading-relaxed text-muted-foreground">
										{pickLocale(item.description, language)}
									</p>
									{highlights && highlights.length > 0 && (
										<ul className="space-y-1.5 pt-1">
											{highlights.map((highlight) => (
												<li
													key={highlight}
													className="flex items-start gap-2 text-sm text-muted-foreground"
												>
													<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm" />
													{highlight}
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

/* ═══════════════════════════════════════════
   PROJECTS
   ═══════════════════════════════════════════ */
function ProjectsSection() {
	const { t } = useLanguage();
	const featured = projects.filter((p) => p.featured);

	return (
		<section className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					label={t.home.projects.label}
					title={t.home.projects.title}
					description={t.home.projects.description}
				/>

				<div className="grid gap-8 md:grid-cols-2">
					{featured.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>

				<div className="mt-10 flex justify-center">
					<Link to="/projects">
						<Button variant="outline" size="lg" className="gap-2">
							{t.home.projects.viewAll}
							<ArrowRight size={16} />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}

/* ═══════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════ */
function ContactSection() {
	const { language, t } = useLanguage();

	return (
		<section id="contact" className="scroll-mt-20 px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					label={t.home.contact.label}
					title={t.home.contact.title}
					description={t.home.contact.description}
				/>

				<div className="flex flex-col gap-8">
					<div className="space-y-2">
						<h3 className="font-mono text-xs font-medium uppercase tracking-widest text-warm">
							{t.home.contact.email}
						</h3>
						<a
							href={`mailto:${personalInfo.email}`}
							className="text-lg text-foreground transition-colors hover:text-warm"
						>
							{personalInfo.email}
						</a>
					</div>
					<div className="space-y-2">
						<h3 className="font-mono text-xs font-medium uppercase tracking-widest text-warm">
							{t.home.contact.location}
						</h3>
						<p className="text-lg text-foreground">
							{pickLocale(personalInfo.location, language)}
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="font-mono text-xs font-medium uppercase tracking-widest text-warm">
							{t.home.contact.social}
						</h3>
						<div className="flex gap-3">
							{Object.entries(personalInfo.social).map(([name, url]) => (
								<a
									key={name}
									href={url}
									target="_blank"
									rel="noreferrer"
									className="rounded-full border border-border px-4 py-1.5 font-mono text-xs capitalize text-muted-foreground transition-all hover:border-warm/30 hover:text-warm"
								>
									{name}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
