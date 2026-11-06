import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles.css";

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFound,
});

function RootComponent() {
	return (
		<div className="grain geo-grid flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

function NotFound() {
	return (
		<div className="px-6 py-32 text-center">
			<p className="font-mono text-sm uppercase tracking-widest text-warm">
				404
			</p>
			<h1 className="mt-4 font-heading text-4xl font-bold">Page not found</h1>
			<p className="mt-4 text-muted-foreground">
				This page doesn't exist. It may have moved.
			</p>
			<Link
				to="/"
				className="mt-8 inline-block font-mono text-sm text-warm underline-offset-4 hover:underline"
			>
				Back to home
			</Link>
		</div>
	);
}
