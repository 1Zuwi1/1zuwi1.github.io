import { createFileRoute } from "@tanstack/react-router";
import { Award, BadgeCheck, ExternalLink, Star } from "lucide-react";
import SectionHeading from "#/components/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import {
	type AchievementItem,
	achievements,
	pickLocale,
} from "#/data/portfolio";
import { useLanguage } from "#/i18n/context";

export const Route = createFileRoute("/achievements")({
	component: AchievementsPage,
});

const typeConfig = {
	certification: {
		icon: BadgeCheck,
		color: "text-emerald-500 dark:text-emerald-400",
		bg: "bg-emerald-500/10",
	},
	award: {
		icon: Award,
		color: "text-warm",
		bg: "bg-warm/10",
	},
	accomplishment: {
		icon: Star,
		color: "text-blue-500 dark:text-blue-400",
		bg: "bg-blue-500/10",
	},
} as const;

function AchievementsPage() {
	const { t } = useLanguage();
	const certifications = achievements.filter((a) => a.type === "certification");
	const awards = achievements.filter((a) => a.type === "award");
	const accomplishments = achievements.filter(
		(a) => a.type === "accomplishment",
	);

	return (
		<div className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					label={t.achievementsPage.label}
					title={t.achievementsPage.title}
					description={t.achievementsPage.description}
				/>

				{/* Stats */}
				<div className="mb-16 grid grid-cols-3 gap-4">
					<StatCard
						number={certifications.length}
						label={t.achievementsPage.stats.certifications}
					/>
					<StatCard
						number={awards.length}
						label={t.achievementsPage.stats.awards}
					/>
					<StatCard
						number={accomplishments.length}
						label={t.achievementsPage.stats.accomplishments}
					/>
				</div>

				{/* All achievements */}
				<div className="stagger-children grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{achievements.map((achievement) => (
						<AchievementCard
							key={achievement.title.en}
							achievement={achievement}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function StatCard({ number, label }: { number: number; label: string }) {
	return (
		<div className="rounded-2xl border border-border/60 bg-card/80 p-6 text-center backdrop-blur-sm">
			<p className="font-heading text-3xl font-bold text-warm">{number}</p>
			<p className="mt-1 font-mono text-xs text-muted-foreground">{label}</p>
		</div>
	);
}

function AchievementCard({ achievement }: { achievement: AchievementItem }) {
	const { language, t } = useLanguage();
	const config = typeConfig[achievement.type];
	const Icon = config.icon;

	return (
		<Card className="border border-border/60 bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-warm/20 hover:shadow-lg">
			<CardHeader>
				<div className="flex items-start justify-between gap-2">
					<div className={`rounded-xl ${config.bg} p-2.5`}>
						<Icon size={20} className={config.color} />
					</div>
					<Badge variant="outline" className="font-mono text-xs">
						{achievement.date}
					</Badge>
				</div>
				<CardTitle className="mt-3 font-heading text-base font-bold leading-snug">
					{pickLocale(achievement.title, language)}
				</CardTitle>
				<p className="font-mono text-xs text-warm">{achievement.issuer}</p>
			</CardHeader>
			<CardContent>
				<p className="text-sm leading-relaxed text-muted-foreground">
					{pickLocale(achievement.description, language)}
				</p>
				{achievement.url && (
					<a
						href={achievement.url}
						target="_blank"
						rel="noreferrer"
						className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-warm transition-colors hover:text-warm/80"
					>
						<ExternalLink size={12} />
						{t.achievementsPage.viewCredential}
					</a>
				)}
			</CardContent>
		</Card>
	);
}
