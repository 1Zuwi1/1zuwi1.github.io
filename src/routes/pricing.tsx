import { createFileRoute } from "@tanstack/react-router";
import {
	Check,
	Clock,
	Globe,
	Info,
	Mail,
	Plug,
	ShoppingCart,
	Smartphone,
} from "lucide-react";
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
	type AppService,
	appServices,
	type PricingPlan,
	personalInfo,
	pricingExtras,
	pricingNotes,
	pricingPlans,
} from "#/data/portfolio";
import { cn, formatPLN } from "#/lib/utils";

export const Route = createFileRoute("/pricing")({
	staticData: { title: "Cennik" },
	component: PricingPage,
});

const appIcons = {
	web: Globe,
	mobile: Smartphone,
	store: ShoppingCart,
	integration: Plug,
} as const;

function inquiryHref(subject: string) {
	return `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}`;
}

function PricingPage() {
	return (
		<div lang="pl" className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					label="Cennik"
					title="Usługi i cennik"
					description="Od prostej strony po aplikację webową lub mobilną na zamówienie. Jasne ceny startowe, a każdy projekt wyceniam indywidualnie."
				/>

				{/* Website plans */}
				<h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-warm">
					Strony internetowe
				</h3>
				<div className="stagger-children grid items-stretch gap-6 lg:grid-cols-3">
					{pricingPlans.map((plan) => (
						<PlanCard key={plan.name} plan={plan} />
					))}
				</div>

				{/* Apps */}
				<div className="mt-20">
					<h3 className="font-mono text-xs font-medium uppercase tracking-widest text-warm">
						Aplikacje i oprogramowanie
					</h3>
					<p className="mt-2 mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
						Gdy sama strona nie wystarczy. Te same technologie, w których
						zbudowałem OrderMaster i nagradzaną aplikację Puls Miasta.
					</p>
					<div className="grid gap-6 md:grid-cols-2">
						{appServices.map((service) => (
							<AppCard key={service.name} service={service} />
						))}
					</div>
				</div>

				{/* Extras */}
				<div className="mt-20">
					<h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-warm">
						Opieka i dodatkowe prace
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
									{extra.priceFrom === undefined ? (
										"Cena do ustalenia"
									) : (
										<>
											<span className="text-xs text-muted-foreground">od </span>
											{formatPLN(extra.priceFrom)}
											<span className="text-xs text-muted-foreground">
												{" "}
												netto
											</span>
											{extra.unit && (
												<span className="text-xs text-muted-foreground">
													{" "}
													{extra.unit}
												</span>
											)}
										</>
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
						Nie wiesz, który pakiet wybrać?
					</h3>
					<p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
						Napisz w kilku zdaniach, czego potrzebujesz. Odpowiem z pytaniami
						albo darmową wyceną, zwykle w ciągu 24 godzin.
					</p>
					<a
						href={inquiryHref("Wycena projektu")}
						className="mt-8 inline-block"
					>
						<Button
							size="lg"
							className="gap-2 bg-warm text-warm-foreground hover:bg-warm/90"
						>
							<Mail size={16} />
							Darmowa wycena
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
						<Badge className="bg-warm text-warm-foreground">
							Najczęściej wybierany
						</Badge>
					)}
				</div>
				<p className="text-sm leading-relaxed text-muted-foreground">
					{plan.description}
				</p>
			</CardHeader>

			<CardContent className="flex-1 space-y-6">
				<div>
					<p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
						od
					</p>
					<p className="font-heading text-4xl font-extrabold tracking-tight text-foreground">
						{formatPLN(plan.priceFrom)}
						<span className="ml-2 font-mono text-sm font-normal tracking-normal text-muted-foreground">
							netto
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
					href={inquiryHref(`Zapytanie o stronę: ${plan.name}`)}
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
						Zapytaj o wycenę
					</Button>
				</a>
			</CardFooter>
		</Card>
	);
}

function AppCard({ service }: { service: AppService }) {
	const Icon = appIcons[service.icon];

	return (
		<div className="flex flex-col rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-warm/20 hover:shadow-lg">
			<div className="flex items-start justify-between gap-4">
				<div className="rounded-xl bg-warm/10 p-2.5">
					<Icon size={20} className="text-warm" />
				</div>
				<div className="text-right">
					<p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
						od
					</p>
					<p className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
						{formatPLN(service.priceFrom)}
						<span className="ml-1.5 font-mono text-xs font-normal tracking-normal text-muted-foreground">
							netto
						</span>
					</p>
				</div>
			</div>

			<h4 className="mt-4 font-heading text-lg font-bold text-foreground">
				{service.name}
			</h4>
			<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
				{service.description}
			</p>

			<ul className="mt-4 flex-1 space-y-2">
				{service.features.map((feature) => (
					<li
						key={feature}
						className="flex items-start gap-2 text-sm text-muted-foreground"
					>
						<Check size={16} className="mt-0.5 shrink-0 text-warm" />
						{feature}
					</li>
				))}
			</ul>

			<div className="mt-5 flex items-center justify-between gap-3">
				<span className="inline-flex items-center gap-1.5 font-mono text-xs text-warm">
					<Clock size={12} />
					{service.timeline}
				</span>
				<a
					href={inquiryHref(`Zapytanie: ${service.name}`)}
					className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 font-mono text-xs font-medium text-muted-foreground transition-all hover:border-warm/30 hover:text-foreground"
				>
					<Mail size={13} />
					Zapytaj o wycenę
				</a>
			</div>
		</div>
	);
}
