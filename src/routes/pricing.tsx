import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, Info, Mail } from "lucide-react";
import SectionHeading from "#/components/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import {
	type PricingPlan,
	personalInfo,
	pricingExtras,
	pricingNotes,
	pricingPlans,
} from "#/data/portfolio";
import { cn, formatPLN } from "#/lib/utils";

export const Route = createFileRoute("/pricing")({
	staticData: { title: "Pricing" },
	component: PricingPage,
});

function inquiryHref(subject: string) {
	return `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}`;
}

function PricingPage() {
	return (
		<div className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					label="Pricing"
					title="Services & pricing"
					description="Clear starting prices for the most common projects. Every project gets its own quote, so treat these as a guide, not a ceiling."
				/>

				{/* Plans */}
				<div className="stagger-children grid items-stretch gap-6 lg:grid-cols-3">
					{pricingPlans.map((plan) => (
						<PlanCard key={plan.name} plan={plan} />
					))}
				</div>

				{/* Extras */}
				<div className="mt-20">
					<h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-warm">
						Other services
					</h3>
					<div className="grid gap-4 md:grid-cols-3">
						{pricingExtras.map((extra) => (
							<div
								key={extra.name}
								className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-warm/20 hover:shadow-lg"
							>
								<h4 className="font-heading text-base font-bold text-foreground">
									{extra.name}
								</h4>
								<p className="mt-1 font-mono text-sm text-warm">
									<span className="text-xs text-muted-foreground">from </span>
									{formatPLN(extra.priceFrom)}
									<span className="text-xs text-muted-foreground"> net</span>
									{extra.unit && (
										<span className="text-xs text-muted-foreground">
											{" "}
											{extra.unit}
										</span>
									)}
								</p>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{extra.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Notes */}
				<ul className="mt-12 space-y-2">
					{pricingNotes.map((note) => (
						<li
							key={note}
							className="flex items-start gap-2 text-sm text-muted-foreground"
						>
							<Info size={14} className="mt-0.5 shrink-0 text-warm" />
							{note}
						</li>
					))}
				</ul>

				{/* CTA */}
				<div className="mt-20 rounded-4xl border border-warm/20 bg-warm/5 p-8 text-center sm:p-12">
					<h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
						Not sure which package fits?
					</h3>
					<p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
						Write a few sentences about your idea. I'll reply with questions or
						a free estimate, usually within 24 hours.
					</p>
					<a
						href={inquiryHref("Project estimate")}
						className="mt-8 inline-block"
					>
						<Button
							size="lg"
							className="gap-2 bg-warm text-warm-foreground hover:bg-warm/90"
						>
							<Mail size={16} />
							Get a free estimate
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}

function PlanCard({ plan }: { plan: PricingPlan }) {
	return (
		<Card
			className={cn(
				"relative border bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
				plan.highlighted
					? "border-warm/50 ring-warm/30"
					: "border-border/60 hover:border-warm/20",
			)}
		>
			<CardHeader>
				<div className="flex items-start justify-between gap-2">
					<CardTitle className="font-heading text-lg font-bold">
						{plan.name}
					</CardTitle>
					{plan.highlighted && (
						<Badge className="bg-warm text-warm-foreground">Most popular</Badge>
					)}
				</div>
				<p className="text-sm leading-relaxed text-muted-foreground">
					{plan.description}
				</p>
			</CardHeader>

			<CardContent className="flex-1 space-y-6">
				<div>
					<p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
						from
					</p>
					<p className="font-heading text-4xl font-extrabold tracking-tight text-foreground">
						{formatPLN(plan.priceFrom)}
						<span className="ml-2 font-mono text-sm font-normal tracking-normal text-muted-foreground">
							net
						</span>
					</p>
					<p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-warm">
						<Clock size={12} />
						{plan.timeline}
					</p>
				</div>

				<ul className="space-y-2">
					{plan.features.map((feature) => (
						<li
							key={feature}
							className="flex items-start gap-2 text-sm text-muted-foreground"
						>
							<Check size={16} className="mt-0.5 shrink-0 text-warm" />
							{feature}
						</li>
					))}
				</ul>
			</CardContent>

			<CardFooter>
				<a
					href={inquiryHref(`Project inquiry: ${plan.name}`)}
					className="w-full"
				>
					<Button
						size="lg"
						variant={plan.highlighted ? "default" : "outline"}
						className={cn(
							"w-full gap-2",
							plan.highlighted &&
								"bg-warm text-warm-foreground hover:bg-warm/90",
						)}
					>
						<Mail size={16} />
						Ask about this
					</Button>
				</a>
			</CardFooter>
		</Card>
	);
}
