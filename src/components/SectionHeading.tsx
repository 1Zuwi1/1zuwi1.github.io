interface SectionHeadingProps {
	label: string;
	title: string;
	description?: string;
}

export default function SectionHeading({
	label,
	title,
	description,
}: SectionHeadingProps) {
	return (
		<div className="mb-12 max-w-2xl">
			<span className="font-mono text-xs font-medium uppercase tracking-widest text-warm">
				{label}
			</span>
			<h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				{title}
			</h2>
			{description && (
				<p className="mt-3 text-base leading-relaxed text-muted-foreground">
					{description}
				</p>
			)}
		</div>
	);
}
