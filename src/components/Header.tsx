import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/projects", label: "Projects" },
	{ to: "/achievements", label: "Achievements" },
] as const;

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				{/* Logo */}
				<Link
					to="/"
					className="font-heading text-xl font-bold tracking-tight text-foreground no-underline transition-colors hover:text-warm"
				>
					<span className="text-warm">.</span>Łukasz
				</Link>

				{/* Desktop nav */}
				<div className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className="font-mono text-sm font-medium text-muted-foreground no-underline transition-colors hover:text-foreground"
							activeProps={{ className: "nav-active" }}
							activeOptions={{ exact: true }}
						>
							{link.label}
						</Link>
					))}
					<ThemeToggle />
				</div>

				{/* Mobile toggle */}
				<div className="flex items-center gap-3 md:hidden">
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setMobileOpen(!mobileOpen)}
						className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted"
						aria-label="Toggle menu"
					>
						{mobileOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</nav>

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="animate-fade-in border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
					<div className="flex flex-col gap-1 px-6 py-4">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className="rounded-lg px-3 py-2.5 font-mono text-sm font-medium text-muted-foreground no-underline transition-colors hover:bg-muted hover:text-foreground"
								activeProps={{ className: "text-warm bg-warm/5" }}
								activeOptions={{ exact: true }}
								onClick={() => setMobileOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</header>
	);
}
