import type { ReactNode } from "react";
import { personalInfo } from "#/data/portfolio.ts";

const socials: { icon: ReactNode; href: string; label: string }[] = [
	{
		icon: (
			<svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
				<path
					fill="currentColor"
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				/>
			</svg>
		),
		href: personalInfo.social.github,
		label: "GitHub",
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
				<path
					fill="currentColor"
					d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				/>
			</svg>
		),
		href: personalInfo.social.linkedin,
		label: "LinkedIn",
	},
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border/60 px-6 py-12">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
				<div className="flex items-center gap-4">
					{socials.map((social) => (
						<a
							key={social.label}
							href={social.href}
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-warm/30 hover:text-warm hover:shadow-md"
							aria-label={social.label}
						>
							{social.icon}
						</a>
					))}
				</div>
				<div className="flex flex-col items-center gap-1 text-center">
					<p className="font-mono text-xs text-muted-foreground">
						&copy; {year} {personalInfo.fullName}. All rights reserved.
					</p>
					<p className="font-mono text-xs text-muted-foreground/60">
						Designed & built with care
					</p>
				</div>
			</div>
		</footer>
	);
}
