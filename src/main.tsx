import { RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { getRouter } from "./router";

// The site used hash routing (/#/projects) before. Rewrite old links that
// people may have saved or shared to the clean URL before the router starts.
if (window.location.hash.startsWith("#/")) {
	window.history.replaceState(null, "", window.location.hash.slice(1));
}

const router = getRouter();

const SITE_NAME = "Łukasz Żyszkiewicz";
const DEFAULT_TITLE = document.title;

// Keep the tab title and canonical URL in sync with the current page.
router.subscribe("onResolved", () => {
	const leaf = router.state.matches.at(-1);
	const title = leaf?.staticData.title;
	document.title = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE;

	const canonical = document.querySelector<HTMLLinkElement>(
		'link[rel="canonical"]',
	);
	if (canonical) {
		canonical.href = new URL(
			router.state.location.pathname,
			window.location.origin,
		).href;
	}
});

const rootElement = document.getElementById("app");

if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<RouterProvider router={router} />);
}
