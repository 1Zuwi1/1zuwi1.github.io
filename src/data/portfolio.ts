import type { ProjectData } from "#/components/ProjectCard";

// ─────────────────────────────────────────────
// Edit this file to customize your portfolio!
// ─────────────────────────────────────────────

export const personalInfo = {
	name: "Łukasz",
	fullName: "Łukasz Żyszkiewicz",
	title: "Full-Stack Developer",
	tagline:
		"I craft digital experiences that merge clean code with thoughtful design.",
	email: "zyszkiewicz.lukasz@proton.me",
	location: "Poland, Kętrzyn",
	bio: [
		"I'm a passionate developer with expertise in building modern web applications. I specialize in React, TypeScript, and Node.js, with a keen eye for design and user experience.",
		"When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing.",
	],
	social: {
		github: "https://github.com/1Zuwi1",
		linkedin:
			"https://www.linkedin.com/in/%C5%82ukasz-%C5%BCyszkiewicz-0b541036a/",
	},
};

export interface SkillCategory {
	title: string;
	description: string;
	skills: string[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: "Frontend",
		description:
			"Building responsive, interactive UIs with modern frameworks and tooling.",
		skills: [
			"React",
			"React Native",
			"Next.js",
			"Expo",
			"TanStack Start",
			"TanStack Query",
			"TypeScript",
			"TailwindCSS",
			"Zod",
			"Three.js",
		],
	},
	{
		title: "Backend",
		description:
			"Designing APIs, server logic, and data layers for web applications.",
		skills: [
			"Node.js",
			"Next.js",
			"Express",
			"REST APIs",
			"PostgreSQL",
			"MySQL",
			"Redis",
		],
	},
	{
		title: "Tools & DevOps",
		description:
			"Streamlining development workflows, containerization, and version control.",
		skills: ["Git", "Docker", "Linux", "GitHub Actions"],
	},
];

export const techStack = [
	"React",
	"React Native",
	"TypeScript",
	"Next.js",
	"Expo",
	"Node.js",
	"TanStack Start",
	"TanStack Query",
	"TailwindCSS",
	"Zod",
	"PostgreSQL",
	"MySQL",
	"Redis",
	"Docker",
	"GitHub Actions",
	"Three.js",
	"Git",
];

export interface EducationItem {
	degree: string;
	school: string;
	schoolUrl?: string;
	period: string;
	description: string;
	highlights?: string[];
}

export const education: EducationItem[] = [
	{
		degree: "Junior Software Developer",
		school: "Zespół Szkół im. Marii Curie Skłodowskiej w Kętrzynie",
		schoolUrl: "https://zs.ketrzyn.pl",
		period: "2022 - 2027",
		description:
			"Focused on software engineering, algorithms, and web technologies.",
		highlights: [
			"Took part in many programming competitions, winning several awards at school and national level.",
		],
	},
];

export const projects: ProjectData[] = [
	{
		title: "OrderMaster",
		description:
			"A full-stack application built with Next.js App Router, consolidating orders from multiple sales platforms into a single dashboard. It handles the entire order lifecycle — from synchronization, through shipping label generation and sales documents, to inventory management. The system includes authentication with 2FA, subscriptions, an admin panel, and an AI assistant for customer support.",
		technologies: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"shadcn/ui",
			"TanStack Query",
			"MySQL",
			"Redis",
			"Zod",
			"Better Auth",
			"Node.js",
			"REST API",
			"SOAP",
			"OAuth 2.0",
			"AWS KMS",
		],
		role: "Solo Developer - project built from scratch.",
		achievements: [
			"Integrated with marketplace APIs (Allegro, eBay) and courier services (InPost, DPD) — order syncing, label generation, shipment tracking",
			"Type-safe full-stack architecture — Zod validation, parameterized SQL queries, token encryption (AES/AWS KMS), 2FA, OAuth",
			"Sales document generation (invoices, receipts) and inventory module with stock alerts and marketplace offer synchronization",
			"Internationalization (PL/EN), Redis caching, tiered subscription system, and an LLM-powered AI assistant for customer messaging",
		],
		liveUrl: "https://ordermaster.pl",
		featured: true,
	},
	{
		title: "Puls Miasta",
		subtitle: `App made for the "Złota Apka" national programming competition that won 1st place`,
		description:
			"A civic reporting platform built around a React Native mobile app for residents and a React + Next.js admin panel for city officials. Residents can submit photo-based city reports with location data, browse and vote on local issues, comment, use a map or heatmap view, receive notifications, and contact officials through chat. The web panel gives officials tools for managing pulses, reports, users, status workflows, moderation, chat, and city map settings.",
		technologies: [
			"React Native",
			"Expo",
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"NativeWind",
			"TanStack Query",
			"MapLibre",
			"Zod",
			"WebAuthn",
			"Passkeys",
			"STOMP",
			"Expo Notifications",
			"Biome",
		],
		role: "Mobile & Web Developer - React Native app and Next.js admin panel.",
		achievements: [
			"Built the mobile app with Expo Router, a pulse feed, multi-step photo submission flow, GPS/manual location handling, voting, comments, profile stats, badges, push notifications, chat, and biometric/passkey login",
			"Implemented an offline-first draft queue with AsyncStorage persistence, network-aware replay, retry limits, and safeguards against duplicate submissions or missing photo files",
			"Created the Next.js admin panel for officials with pulse moderation, status updates, report handling for pulses/comments, user management, admin chat, and configurable city map settings",
			"Integrated MapLibre-based map experiences with clustered pins, category filters, heatmap mode, city presets, and viewport-based pulse loading",
		],
		repoUrl: "https://github.com/puls-miasta-app",
		featured: true,
	},
	{
		title: "Warehouse Management System",
		subtitle: `App made for "Primus Inter Pares 2026" competition that qualified for the national finals (top 3 out of 100+ teams in Poland)`,
		description: `
			Full-stack warehouse management system enabling real-time inventory tracking, 3D warehouse visualization, and barcode/QR scanning. Built a responsive Next.js frontend with a type-safe API integration layer, multi-factor authentication (WebAuthn, TOTP, email codes), and internationalization (PL/EN). Containerized the entire stack with Docker and set up automated CI/CD pipelines for building, testing, and deploying to production via GitHub Actions.`,
		technologies: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Three.js",
			"TanStack React Query",
			"TanStack React Table",
			"TanStack React Form",
			"Zustand",
			"Zod",
			"Framer Motion",
			"Biome",
			"Vitest",
			"next-intl",
			"shadcn/ui",
			"Docker",
			"GitHub Actions",
		],
		role: "Frontend & DevOps",
		achievements: [
			"Built an interactive frontend with Next.js, React 19, and Three.js — including a 3D warehouse visualization, barcode/QR scanner, voice assistant, and a full admin panel with data export (PDF, Excel, CSV)",
			"Designed a type-safe API integration layer using a custom fetch wrapper with Zod schema validation, TanStack React Query caching, and seamless 2FA challenge handling between frontend and Spring Boot backend",
			"Containerized the application with multi-stage Docker builds (Bun + Node.js for frontend, Maven + JRE for backend) and orchestrated a 6-service stack (Next.js, Spring Boot, PostgreSQL, Redis, Adminer, rembg) via Docker Compose",
			"Set up CI/CD pipelines with GitHub Actions — path-based change detection for conditional builds, automated linting/testing on PRs, and SSH-based production deployment with GHCR image publishing",
		],
		repoUrl: "https://github.com/1Zuwi1/magazyn",
		featured: true,
	},
	{
		title: "ConnectUS",
		subtitle: `App made for "Primus Inter Pares 2024" competition that took 10th place among 100+ teams in Poland`,
		description: `A real-time team messaging platform supporting private and group conversations, file sharing, and user presence tracking. Responsible for the entire backend — designed the REST API and WebSocket layer, implemented authentication with LDAP support, built an admin panel with automated database backup/restore, and structured the codebase following MVC architecture.`,
		role: "Backend Developer",
		technologies: [
			"Node.js",
			"Express.js",
			"Socket.IO",
			"MySQL",
			"bcrypt",
			"LDAP",
			"express-session",
			"HTTPS/TLS",
			"dotenv",
		],
		achievements: [
			"Built a real-time communication backend using Express.js and Socket.IO, handling live messaging, user presence, and event broadcasting across multiple chat rooms",
			"Designed and implemented a MySQL-backed data layer with dedicated query modules following MVC architecture and separation of concerns",
			"Developed a secure authentication system with bcrypt password hashing, session management, LDAP enterprise integration, and role-based admin access over HTTPS",
			"Created an automated database backup/restore system with scheduled dumps and admin-controlled recovery, plus file upload handling with magic-byte validation",
		],
	},
	{
		title: "Limitless",
		subtitle: "App made for a school competition that won 1st place",
		description: `An educational RPG-style web game where players answer knowledge questions in real-time combat encounters, featuring a story campaign with boss battles, a ranked mode with a global leaderboard, and a character progression system. Built the entire frontend — implemented a type-safe React architecture with file-based routing, server state caching, and Zod-validated API communication. Designed a retro 8-bit UI with animations, an audio system, and dark/light theme support.`,
		technologies: [
			"React",
			"TypeScript",
			"Vite",
			"TanStack Router",
			"TanStack Query",
			"TanStack Form",
			"Tailwind CSS",
			"Radix UI",
			"Zod",
			"Framer Motion",
			"Biome",
			"Turborepo",
			"Bun",
		],
		role: "Frontend Developer",
		achievements: [
			"Designed and implemented a real-time question-based combat system with critical hits, support tokens (power-ups), animated feedback, and timed rounds for both PvE and ranked game modes",
			"Built a fully type-safe data layer using Zod schema validation on every API response, TanStack Query for server state caching with optimistic updates, and a custom HTTP client with automatic error handling",
			"Developed a custom audio engine with volume control, looping, and playback rate adjustment, plus a guest account flow allowing users to trial the game before registering",
		],
		liveUrl: "https://limitless.edu.pl",
	},
];

export interface AchievementItem {
	title: string;
	issuer: string;
	date: string;
	description: string;
	type: "certification" | "award" | "accomplishment";
	url?: string;
}

export const achievements: AchievementItem[] = [
	{
		title: "Złota Apka - 1st Place",
		issuer: `Ogólnopolski Konkurs Programistyczny "Złota Apka"`,
		date: "2026",
		description:
			"Awarded 1st place for Puls Miasta, a civic reporting system built with a React Native mobile app and a React + Next.js web admin panel.",
		type: "award",
		url: "https://github.com/puls-miasta-app",
	},
	{
		title: "Primus Inter Pares 2026 - 3rd Place",
		issuer: "Primus Inter Pares",
		date: "2026",
		description:
			"Awarded 3rd place for developing final project in a national competition for IT students in Poland.",
		type: "award",
		url: "https://zs.ketrzyn.pl/aktualnosci/mamy-iii-miejsce/",
	},
	{
		title: "Aplikacja Edukacyjna 2025 - 1st Place",
		issuer: "Zespół Szkół im. Marii Curie Skłodowskiej w Kętrzynie",
		date: "2025/2026",
		description:
			"Awarded 1st place in a school competition for developing an educational application.",
		type: "award",
		url: "https://zs.ketrzyn.pl/projekty/sprawozdanie-z-konkursu-aplikacja-edukacyjna-2025%f0%9f%92%bb%f0%9f%96%a5/",
	},
	{
		title: "Primus Inter Pares 2024 - 10th Place",
		issuer: "Primus Inter Pares",
		date: "2024",
		description:
			"Taking 10th place for developing an application for team messaging in a national competition for IT students.",
		type: "accomplishment",
		url: "https://zs.ketrzyn.pl/aktualnosci/primus-inter-pares-sprawozdanie-2024/",
	},
];

// ─────────────────────────────────────────────
// Pricing — all prices are net starting points ("from") in PLN.
// Change the numbers here; the /pricing page picks them up.
// ─────────────────────────────────────────────

export interface PricingPlan {
	name: string;
	/** Who the package is for, in one sentence */
	description: string;
	/** Starting price in PLN */
	priceFrom: number;
	/** Typical delivery time */
	timeline: string;
	features: string[];
	/** Shows the plan as the recommended one */
	highlighted?: boolean;
}

export interface AppService {
	name: string;
	description: string;
	/** Starting price in PLN */
	priceFrom: number;
	timeline: string;
	icon: "web" | "mobile" | "store" | "integration";
	features: string[];
}

export interface PricingExtra {
	name: string;
	description: string;
	/** Starting price in PLN. Leave out to show "Cena do ustalenia". */
	priceFrom?: number;
	/** Shown after the price, e.g. "/ mies." */
	unit?: string;
}

/** Website packages */
export const pricingPlans: PricingPlan[] = [
	{
		name: "Starter",
		description:
			"Nowoczesna strona jednostronicowa lub landing page. Idealna na start.",
		priceFrom: 300,
		timeline: "3-7 dni",
		features: [
			"Projekt dopasowany do Twojej marki",
			"Działa na telefonach, tabletach i komputerach",
			"Formularz kontaktowy, szybkie połączenie i Mapy Google",
			"Podstawowe SEO i podglądy w social mediach",
			"Wdrożenie i podpięcie domeny",
			"3 miesiące darmowej opieki",
		],
	},
	{
		name: "Business",
		description:
			"Strona z kilkoma podstronami dla firmy lub freelancera, z miejscem na rozwój.",
		priceFrom: 600,
		timeline: "1-2 tygodnie",
		features: [
			"Do 6 podstron (oferta, o nas, galeria, kontakt…)",
			"Panel do samodzielnej edycji tekstów i zdjęć (CMS)",
			"Formularz kontaktowy, Mapy Google i statystyki",
			"Techniczne SEO i szybkie ładowanie",
			"6 miesięcy darmowej opieki",
		],
		highlighted: true,
	},
	{
		name: "Premium",
		description: "Strona z pełną funkcjonalnością i dodatkowymi usługami.",
		priceFrom: 1000,
		timeline: "2-4 tygodnie",
		features: [
			"Bez limitu podstron, blog lub aktualności",
			"Funkcje na zamówienie: rezerwacje, kalkulatory, strefa klienta",
			"Druga wersja językowa",
			"Nielimitowane poprawki w trakcie projektu",
			"Jedno odświeżenie wyglądu w ciągu 6 miesięcy",
			"12 miesięcy darmowej opieki",
		],
	},
];

/** Apps and custom software */
export const appServices: AppService[] = [
	{
		name: "Aplikacja webowa",
		description: "Systemy, panele i SaaS dopasowane do Twoich procesów.",
		priceFrom: 1500,
		timeline: "od 3 tygodni",
		icon: "web",
		features: [
			"Konta, role i bezpieczne logowanie (2FA)",
			"Panel administracyjny, tabele i raporty",
			"Baza danych i REST API",
		],
	},
	{
		name: "Aplikacja mobilna",
		description: "Jedna aplikacja na iOS i Androida, w React Native.",
		priceFrom: 3000,
		timeline: "od 4 tygodni",
		icon: "mobile",
		features: [
			"Powiadomienia push, aparat, mapy, GPS",
			"Tryb offline i logowanie kluczem dostępu",
			"Pomoc z publikacją w App Store i Google Play",
		],
	},
	{
		name: "Sklep internetowy",
		description:
			"Szybki sklep na zamówienie, bez miesięcznych opłat za platformę.",
		priceFrom: 1200,
		timeline: "od 2 tygodni",
		icon: "store",
		features: [
			"Produkty, koszyk i obsługa zamówień",
			"Płatności online (BLIK, Przelewy24, karty)",
			"Integracja z kurierami (InPost, DPD)",
		],
	},
	{
		name: "Integracje i automatyzacje",
		description:
			"Połącz narzędzia, których już używasz, i przestań przepisywać dane.",
		priceFrom: 400,
		timeline: "od 1 tygodnia",
		icon: "integration",
		features: [
			"Allegro, eBay, InPost, DPD i inne API",
			"Faktury, etykiety i synchronizacja stanów",
			"Skrypty, boty i asystenci AI",
		],
	},
];

export const pricingExtras: PricingExtra[] = [
	{
		name: "Opieka nad stroną, miesięcznie",
		description:
			"Dla stron: aktualizacje, kopie zapasowe, monitoring i drobne zmiany treści. Opieka nad aplikacją rośnie z modułami, sprawdź w kalkulatorze.",
		priceFrom: 20,
		unit: "/ mies.",
	},
	{
		name: "Opieka nad stroną, rocznie",
		description: "Ta sama opieka na cały rok, w niższej cenie.",
		priceFrom: 200,
		unit: "/ rok",
	},
	{
		name: "Poprawki i nowe funkcje",
		description:
			"Zmiany, poprawki i nowe funkcje w istniejącej stronie lub aplikacji, także nie mojego autorstwa.",
	},
];

export const pricingNotes: string[] = [
	"Wszystkie ceny są cenami netto i cenami startowymi. Ostateczna wycena zależy od zakresu i zawsze ustalamy ją przed rozpoczęciem prac.",
	"Darmowa opieka obejmuje aktualizacje, poprawki bezpieczeństwa i drobne zmiany tekstów lub zdjęć.",
	"Przy stronach domena i hosting są rozliczane osobno, po kosztach. W opiece nad aplikacją i sklepem domena i serwer są w cenie.",
	"Płatne usługi zewnętrzne (np. konto w App Store, API AI, bramka płatności) są rozliczane osobno.",
	"Prace dzielimy na etapy, z zaliczką przed pierwszym z nich.",
];

// ─────────────────────────────────────────────
// Project configurator on /pricing — a Basic package per project type
// plus optional modules. All prices are net PLN and indicative.
// ─────────────────────────────────────────────

export interface ConfiguratorModule {
	id: string;
	name: string;
	description: string;
	/** Net price in PLN (per unit when `unit` is set) */
	price: number;
	/** When set, the module has a quantity picker, e.g. "szt." */
	unit?: string;
	/** Highest quantity for modules with a unit */
	max?: number;
	/** Extra monthly care cost in PLN that this module adds (per unit) */
	care?: number;
}

export interface ConfiguratorType {
	id: string;
	name: string;
	icon: AppService["icon"];
	base: {
		name: string;
		price: number;
		/** Monthly care cost in PLN for the Basic package */
		care: number;
		includes: string[];
	};
	/** What the monthly care covers for this project type */
	careIncludes: string;
	modules: ConfiguratorModule[];
}

export const configuratorTypes: ConfiguratorType[] = [
	{
		id: "website",
		name: "Strona internetowa",
		icon: "web",
		base: {
			name: "Basic",
			price: 300,
			care: 20,
			includes: [
				"Strona jednostronicowa",
				"Wersja na telefony",
				"Formularz kontaktowy",
				"Podstawowe SEO",
				"3 miesiące darmowej opieki",
			],
		},
		careIncludes:
			"Pierwsze 3 miesiące za darmo. Aktualizacje, kopie zapasowe, monitoring i drobne zmiany treści. Domena i hosting osobno, po kosztach.",
		modules: [
			{
				id: "subpages",
				name: "Dodatkowe podstrony",
				description: "Oferta, o nas, galeria, cennik…",
				price: 40,
				care: 2,
				unit: "szt.",
				max: 20,
			},
			{
				id: "cms",
				name: "Panel edycji treści (CMS)",
				description: "Sam zmieniasz teksty i zdjęcia",
				price: 150,
				care: 5,
			},
			{
				id: "blog",
				name: "Blog lub aktualności",
				description: "Wpisy z kategoriami i zdjęciami",
				price: 100,
				care: 5,
			},
			{
				id: "gallery",
				name: "Galeria / portfolio",
				description: "Zdjęcia realizacji z podglądem",
				price: 50,
			},
			{
				id: "booking",
				name: "Rezerwacje online",
				description: "Kalendarz wizyt z potwierdzeniem e-mail",
				price: 200,
				care: 10,
			},
			{
				id: "language",
				name: "Druga wersja językowa",
				description: "Przełącznik języka, bez tłumaczenia tekstów",
				price: 150,
				care: 5,
			},
			{
				id: "analytics",
				name: "Statystyki i piksele",
				description: "Google Analytics, Meta Pixel, zgody cookies",
				price: 50,
			},
		],
	},
	{
		id: "webapp",
		name: "Aplikacja webowa",
		icon: "web",
		base: {
			name: "Basic",
			price: 1500,
			care: 80,
			includes: [
				"Rejestracja i logowanie",
				"Prosty panel administracyjny",
				"Baza danych i REST API",
				"Wersja na telefony",
				"Wdrożenie na serwer",
			],
		},
		careIncludes:
			"W cenie: domena, serwer i wdrożenie, aktualizacje, kopie zapasowe, monitoring i poprawki błędów.",
		modules: [
			{
				id: "roles",
				name: "Role i uprawnienia",
				description: "Np. admin, pracownik, klient",
				price: 200,
				care: 10,
			},
			{
				id: "2fa",
				name: "Logowanie 2FA / passkeys",
				description: "Kod z aplikacji, e-mail lub klucz dostępu",
				price: 200,
				care: 10,
			},
			{
				id: "payments",
				name: "Płatności i subskrypcje",
				description: "BLIK, Przelewy24, karty, plany abonamentowe",
				price: 400,
				care: 20,
			},
			{
				id: "notifications",
				name: "Powiadomienia e-mail",
				description: "Automatyczne wiadomości do użytkowników",
				price: 100,
				care: 5,
			},
			{
				id: "reports",
				name: "Raporty i wykresy",
				description: "Dashboard ze statystykami",
				price: 300,
				care: 10,
			},
			{
				id: "export",
				name: "Eksport PDF / Excel / CSV",
				description: "Pobieranie danych i dokumentów",
				price: 150,
				care: 5,
			},
			{
				id: "chat",
				name: "Czat w czasie rzeczywistym",
				description: "Wiadomości między użytkownikami",
				price: 400,
				care: 20,
			},
			{
				id: "i18n",
				name: "Wielojęzyczność",
				description: "Np. PL i EN",
				price: 200,
				care: 10,
			},
			{
				id: "api",
				name: "Integracja z zewnętrznym API",
				description: "Allegro, InPost, fakturownia, CRM…",
				price: 300,
				care: 15,
				unit: "szt.",
				max: 10,
			},
			{
				id: "ai",
				name: "Asystent AI",
				description: "Odpowiedzi dla klientów, analiza danych",
				price: 500,
				care: 30,
			},
		],
	},
	{
		id: "mobile",
		name: "Aplikacja mobilna",
		icon: "mobile",
		base: {
			name: "Basic",
			price: 3000,
			care: 100,
			includes: [
				"Aplikacja na iOS i Androida",
				"Logowanie i konto użytkownika",
				"Do 8 ekranów",
				"Backend z bazą danych",
			],
		},
		careIncludes:
			"W cenie: domena i serwer dla backendu, aktualizacje pod nowe wersje iOS i Androida, kopie zapasowe i poprawki błędów.",
		modules: [
			{
				id: "push",
				name: "Powiadomienia push",
				description: "Wiadomości na ekranie telefonu",
				price: 200,
				care: 10,
			},
			{
				id: "maps",
				name: "Mapy i GPS",
				description: "Lokalizacja, pinezki, trasy",
				price: 300,
				care: 10,
			},
			{
				id: "camera",
				name: "Aparat i zdjęcia",
				description: "Robienie i wysyłanie zdjęć",
				price: 150,
				care: 5,
			},
			{
				id: "offline",
				name: "Tryb offline",
				description: "Działa bez internetu, synchronizuje później",
				price: 400,
				care: 15,
			},
			{
				id: "biometrics",
				name: "Logowanie biometryczne",
				description: "Face ID, odcisk palca, passkeys",
				price: 150,
				care: 5,
			},
			{
				id: "payments",
				name: "Płatności w aplikacji",
				description: "BLIK, karty, subskrypcje",
				price: 400,
				care: 20,
			},
			{
				id: "chat",
				name: "Czat",
				description: "Wiadomości w czasie rzeczywistym",
				price: 400,
				care: 20,
			},
			{
				id: "admin",
				name: "Panel administracyjny (web)",
				description: "Zarządzanie użytkownikami i treściami",
				price: 700,
				care: 30,
			},
			{
				id: "stores",
				name: "Publikacja w sklepach",
				description: "App Store i Google Play",
				price: 200,
				care: 10,
			},
		],
	},
	{
		id: "store",
		name: "Sklep internetowy",
		icon: "store",
		base: {
			name: "Basic",
			price: 1200,
			care: 50,
			includes: [
				"Produkty, koszyk i zamówienia",
				"Jedna bramka płatności",
				"Panel do zarządzania sklepem",
				"Wersja na telefony",
			],
		},
		careIncludes:
			"W cenie: domena, serwer i wdrożenie, aktualizacje, kopie zapasowe, monitoring i poprawki błędów.",
		modules: [
			{
				id: "variants",
				name: "Warianty produktów",
				description: "Rozmiary, kolory, osobne stany",
				price: 100,
				care: 5,
			},
			{
				id: "accounts",
				name: "Konta klientów",
				description: "Historia zamówień, zapisane adresy",
				price: 150,
				care: 5,
			},
			{
				id: "discounts",
				name: "Kody rabatowe",
				description: "Procentowe i kwotowe, z datą ważności",
				price: 100,
				care: 5,
			},
			{
				id: "couriers",
				name: "Integracja z kurierami",
				description: "InPost, DPD: etykiety i śledzenie",
				price: 200,
				care: 15,
			},
			{
				id: "invoices",
				name: "Automatyczne faktury",
				description: "Wystawianie i wysyłka po zakupie",
				price: 200,
				care: 10,
			},
			{
				id: "allegro",
				name: "Integracja z Allegro",
				description: "Synchronizacja ofert i zamówień",
				price: 400,
				care: 20,
			},
			{
				id: "i18n",
				name: "Wielojęzyczność i waluty",
				description: "Np. PL/EN, PLN/EUR",
				price: 200,
				care: 10,
			},
			{
				id: "newsletter",
				name: "Newsletter",
				description: "Zapis i wysyłka do klientów",
				price: 100,
				care: 5,
			},
		],
	},
];
