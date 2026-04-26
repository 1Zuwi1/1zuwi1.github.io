import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LanguageProvider } from "../i18n/context";

import "../styles.css";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<LanguageProvider>
			<div className="grain geo-grid flex min-h-screen flex-col">
				<Header />
				<main className="flex-1">
					<Outlet />
				</main>
				<Footer />
			</div>
		</LanguageProvider>
	);
}
