import {
	Check,
	Globe,
	Mail,
	Minus,
	Plug,
	Plus,
	RotateCcw,
	ShoppingCart,
	Smartphone,
} from "lucide-react";
import { useState } from "react";
import {
	type ConfiguratorModule,
	type ConfiguratorType,
	configuratorTypes,
	personalInfo,
} from "#/data/portfolio";
import { cn, formatPLN } from "#/lib/utils";
import { Button } from "./ui/button";

const icons = {
	web: Globe,
	mobile: Smartphone,
	store: ShoppingCart,
	integration: Plug,
} as const;

/** Quantity of each selected module, keyed by module id */
type Selection = Record<string, number>;

function lineTotal(module: ConfiguratorModule, qty: number) {
	return module.price * qty;
}

function lineCare(module: ConfiguratorModule, qty: number) {
	return (module.care ?? 0) * qty;
}

function buildMailto(
	type: ConfiguratorType,
	chosen: { module: ConfiguratorModule; qty: number }[],
	total: number,
	care: number,
) {
	const lines = [
		"Dzień dobry,",
		"",
		`interesuje mnie: ${type.name}, pakiet ${type.base.name} (${formatPLN(type.base.price)} netto).`,
		"",
		chosen.length > 0 ? "Wybrane moduły:" : "Bez dodatkowych modułów.",
		...chosen.map(
			({ module, qty }) =>
				`- ${module.name}${module.unit ? ` × ${qty}` : ""}: ${formatPLN(lineTotal(module, qty))}`,
		),
		"",
		`Orientacyjna cena z kalkulatora: od ${formatPLN(total)} netto.`,
		`Opieka: od ${formatPLN(care)} netto / mies.`,
		"",
		"Kilka słów o projekcie:",
		"",
	];
	const subject = `Wycena z kalkulatora: ${type.name}`;
	return `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export default function PriceConfigurator() {
	const [typeId, setTypeId] = useState(configuratorTypes[0].id);
	// One selection per project type, so switching tabs keeps your picks
	const [selections, setSelections] = useState<Record<string, Selection>>({});

	const type =
		configuratorTypes.find((t) => t.id === typeId) ?? configuratorTypes[0];
	const selection = selections[type.id] ?? {};

	const chosen = type.modules
		.filter((m) => (selection[m.id] ?? 0) > 0)
		.map((module) => ({ module, qty: selection[module.id] }));
	const total =
		type.base.price +
		chosen.reduce((sum, { module, qty }) => sum + lineTotal(module, qty), 0);
	const care =
		type.base.care +
		chosen.reduce((sum, { module, qty }) => sum + lineCare(module, qty), 0);

	function setQty(moduleId: string, qty: number) {
		setSelections((prev) => ({
			...prev,
			[type.id]: { ...prev[type.id], [moduleId]: qty },
		}));
	}

	function reset() {
		setSelections((prev) => ({ ...prev, [type.id]: {} }));
	}

	return (
		<div>
			{/* Project type */}
			<div className="grid grid-cols-2 gap-3 md:grid-cols-4">
				{configuratorTypes.map((t) => {
					const Icon = icons[t.icon];
					const active = t.id === type.id;
					return (
						<button
							key={t.id}
							type="button"
							onClick={() => setTypeId(t.id)}
							aria-pressed={active}
							className={cn(
								"flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all",
								active
									? "border-warm/60 bg-warm/10"
									: "border-border/60 bg-card/80 hover:border-warm/30",
							)}
						>
							<Icon
								size={18}
								className={active ? "text-warm" : "text-muted-foreground"}
							/>
							<span className="font-heading text-sm font-bold text-foreground">
								{t.name}
							</span>
							<span className="font-mono text-xs text-muted-foreground">
								od {formatPLN(t.base.price)}
							</span>
						</button>
					);
				})}
			</div>

			<div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
				{/* Base + modules */}
				<div className="space-y-6">
					<div className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm">
						<div className="flex items-baseline justify-between gap-3">
							<h4 className="font-heading text-lg font-bold text-foreground">
								Pakiet {type.base.name}
							</h4>
							<p className="shrink-0 font-mono text-sm text-warm">
								{formatPLN(type.base.price)}
							</p>
						</div>
						<ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
							{type.base.includes.map((item) => (
								<li
									key={item}
									className="flex items-start gap-2 text-sm text-muted-foreground"
								>
									<Check size={16} className="mt-0.5 shrink-0 text-warm" />
									{item}
								</li>
							))}
						</ul>
					</div>

					<div>
						<p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
							Dodatkowe moduły
						</p>
						<div className="grid gap-3 sm:grid-cols-2">
							{type.modules.map((module) => (
								<ModuleRow
									key={module.id}
									module={module}
									qty={selection[module.id] ?? 0}
									onChange={(qty) => setQty(module.id, qty)}
								/>
							))}
						</div>
					</div>

					{/* Running total on small screens, where the summary sits below */}
					<a
						href="#wycena"
						className="sticky bottom-4 z-10 flex items-center justify-between gap-3 rounded-2xl border border-warm/40 bg-background/95 px-5 py-3 no-underline shadow-lg backdrop-blur-xl lg:hidden"
					>
						<span>
							<span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
								Orientacyjnie od
							</span>
							<span className="font-heading text-xl font-extrabold text-foreground">
								{formatPLN(total)}
							</span>
							<span className="block font-mono text-xs text-muted-foreground">
								opieka od {formatPLN(care)} / mies.
							</span>
						</span>
						<span className="shrink-0 font-mono text-xs text-warm">
							Podsumowanie ↓
						</span>
					</a>
				</div>

				{/* Summary */}
				<aside
					id="wycena"
					className="scroll-mt-24 h-fit rounded-2xl border border-warm/30 bg-card/90 p-6 backdrop-blur-sm lg:sticky lg:top-24"
				>
					<p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
						Twoja wycena
					</p>
					<p className="mt-1 font-heading text-base font-bold text-foreground">
						{type.name}
					</p>

					<ul className="mt-4 space-y-2 border-t border-border/60 pt-4 text-sm">
						<li className="flex justify-between gap-3">
							<span className="text-muted-foreground">
								Pakiet {type.base.name}
							</span>
							<span className="shrink-0 font-mono">
								{formatPLN(type.base.price)}
							</span>
						</li>
						{chosen.map(({ module, qty }) => (
							<li key={module.id} className="flex justify-between gap-3">
								<span className="text-muted-foreground">
									{module.name}
									{module.unit && ` × ${qty}`}
								</span>
								<span className="shrink-0 font-mono">
									+{formatPLN(lineTotal(module, qty))}
								</span>
							</li>
						))}
					</ul>

					<div className="mt-4 border-t border-border/60 pt-4">
						<p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
							Orientacyjnie od
						</p>
						<p
							className="font-heading text-4xl font-extrabold tracking-tight text-foreground"
							aria-live="polite"
						>
							{formatPLN(total)}
							<span className="ml-2 font-mono text-sm font-normal tracking-normal text-muted-foreground">
								netto
							</span>
						</p>
					</div>

					<div className="mt-4 rounded-xl bg-muted/50 p-3">
						<div className="flex items-baseline justify-between gap-3">
							<span className="text-sm text-foreground">Opieka</span>
							<span className="shrink-0 font-mono text-sm text-warm">
								od {formatPLN(care)}
								<span className="text-xs text-muted-foreground">
									{" "}
									netto / mies.
								</span>
							</span>
						</div>
						<p className="mt-1 text-xs leading-relaxed text-muted-foreground">
							{type.careIncludes}
						</p>
					</div>

					<a
						href={buildMailto(type, chosen, total, care)}
						className="mt-5 block"
					>
						<Button
							size="lg"
							className="w-full gap-2 bg-warm text-warm-foreground hover:bg-warm/90"
						>
							<Mail size={16} />
							Wyślij zapytanie
						</Button>
					</a>
					{chosen.length > 0 && (
						<button
							type="button"
							onClick={reset}
							className="mt-3 inline-flex w-full items-center justify-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
						>
							<RotateCcw size={12} />
							Wyczyść moduły
						</button>
					)}
					<p className="mt-4 text-xs leading-relaxed text-muted-foreground">
						To wycena orientacyjna. Dokładną cenę podam po krótkiej rozmowie o
						projekcie.
					</p>
				</aside>
			</div>
		</div>
	);
}

function ModuleRow({
	module,
	qty,
	onChange,
}: {
	module: ConfiguratorModule;
	qty: number;
	onChange: (qty: number) => void;
}) {
	const selected = qty > 0;
	const inputId = `module-${module.id}`;

	return (
		<div
			className={cn(
				"flex gap-3 rounded-2xl border p-4 transition-colors",
				selected
					? "border-warm/50 bg-warm/5"
					: "border-border/60 bg-card/80 hover:border-warm/30",
			)}
		>
			<input
				id={inputId}
				type="checkbox"
				checked={selected}
				onChange={(e) => onChange(e.target.checked ? 1 : 0)}
				className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-warm"
			/>
			<div className="min-w-0 flex-1">
				<label
					htmlFor={inputId}
					className="flex cursor-pointer items-baseline justify-between gap-3"
				>
					<span className="text-sm font-medium text-foreground">
						{module.name}
					</span>
					<span className="shrink-0 font-mono text-xs text-warm">
						+{formatPLN(module.price)}
						{module.unit && ` / ${module.unit}`}
					</span>
				</label>
				<p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
					{module.description}
				</p>
				{module.care ? (
					<p className="mt-0.5 font-mono text-[11px] text-muted-foreground/80">
						opieka +{formatPLN(module.care)} / mies.
					</p>
				) : null}
				{module.unit && selected && (
					<div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border px-1 py-0.5">
						<button
							type="button"
							onClick={() => onChange(qty - 1)}
							className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
							aria-label={`Mniej: ${module.name}`}
						>
							<Minus size={12} />
						</button>
						<span className="min-w-6 text-center font-mono text-xs">{qty}</span>
						<button
							type="button"
							onClick={() => onChange(Math.min(qty + 1, module.max ?? 99))}
							disabled={qty >= (module.max ?? 99)}
							className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-40"
							aria-label={`Więcej: ${module.name}`}
						>
							<Plus size={12} />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
