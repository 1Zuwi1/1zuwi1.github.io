import type { ProjectData } from "#/components/ProjectCard";
import type { Language } from "#/i18n/translations";

// ─────────────────────────────────────────────
// Edit this file to customize your portfolio!
// ─────────────────────────────────────────────

interface LocalizedString {
	en: string;
	pl: string;
}

interface LocalizedStringArray {
	en: string[];
	pl: string[];
}

export function pickLocale<T>(
	values: { en: T; pl: T },
	language: Language,
): T {
	return values[language];
}

interface PersonalInfoData {
	name: string;
	fullName: string;
	title: LocalizedString;
	tagline: LocalizedString;
	email: string;
	location: LocalizedString;
	bio: LocalizedStringArray;
	social: {
		github: string;
		linkedin: string;
	};
}

export const personalInfo: PersonalInfoData = {
	name: "Łukasz",
	fullName: "Łukasz Żyszkiewicz",
	title: {
		en: "Full-Stack Developer",
		pl: "Full-Stack Developer",
	},
	tagline: {
		en: "I craft digital experiences that merge clean code with thoughtful design.",
		pl: "Tworzę cyfrowe doświadczenia łączące czysty kod z przemyślanym designem.",
	},
	email: "zyszkiewicz.lukasz@proton.me",
	location: {
		en: "Poland, Kętrzyn",
		pl: "Polska, Kętrzyn",
	},
	bio: {
		en: [
			"I'm a passionate developer with expertise in building modern web applications. I specialize in React, TypeScript, and Node.js, with a keen eye for design and user experience.",
			"When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing.",
		],
		pl: [
			"Jestem programistą z pasją, specjalizującym się w tworzeniu nowoczesnych aplikacji webowych. Skupiam się na React, TypeScript i Node.js, dbając o design i wrażenia użytkownika.",
			"Gdy nie programuję, eksploruję nowe technologie, wspieram projekty open-source i dzielę się wiedzą poprzez teksty techniczne.",
		],
	},
	social: {
		github: "https://github.com/1Zuwi1",
		linkedin:
			"https://www.linkedin.com/in/%C5%82ukasz-%C5%BCyszkiewicz-0b541036a/",
	},
};

export interface SkillCategory {
	title: LocalizedString;
	description: LocalizedString;
	skills: string[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: {
			en: "Frontend",
			pl: "Frontend",
		},
		description: {
			en: "Building responsive, interactive UIs with modern frameworks and tooling.",
			pl: "Budowanie responsywnych, interaktywnych interfejsów z nowoczesnymi frameworkami.",
		},
		skills: [
			"React",
			"Next.js",
			"TanStack Start",
			"TanStack Query",
			"TypeScript",
			"TailwindCSS",
			"Zod",
			"Three.js",
		],
	},
	{
		title: {
			en: "Backend",
			pl: "Backend",
		},
		description: {
			en: "Designing APIs, server logic, and data layers for web applications.",
			pl: "Projektowanie API, logiki serwerowej i warstw danych dla aplikacji webowych.",
		},
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
		title: {
			en: "Tools & DevOps",
			pl: "Narzędzia i DevOps",
		},
		description: {
			en: "Streamlining development workflows, containerization, and version control.",
			pl: "Usprawnianie procesów developerskich, konteneryzacja i kontrola wersji.",
		},
		skills: ["Git", "Docker", "Linux", "GitHub Actions"],
	},
];

export const techStack = [
	"React",
	"TypeScript",
	"Next.js",
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
	degree: LocalizedString;
	school: string;
	schoolUrl?: string;
	period: string;
	description: LocalizedString;
	highlights?: LocalizedStringArray;
}

export const education: EducationItem[] = [
	{
		degree: {
			en: "Junior Software Developer",
			pl: "Technik programista",
		},
		school: "Zespół Szkół im. Marii Curie Skłodowskiej w Kętrzynie",
		schoolUrl: "https://zs.ketrzyn.pl",
		period: "2022 - 2027",
		description: {
			en: "Focused on software engineering, algorithms, and web technologies.",
			pl: "Skupienie na inżynierii oprogramowania, algorytmach i technologiach webowych.",
		},
		highlights: {
			en: [
				"Took part in many programming competitions, winning several awards at school and national level.",
			],
			pl: [
				"Udział w wielu konkursach programistycznych, zdobywając nagrody zarówno na poziomie szkolnym, jak i ogólnopolskim.",
			],
		},
	},
];

export interface LocalizedProjectData
	extends Omit<
		ProjectData,
		"description" | "subtitle" | "role" | "achievements"
	> {
	description: LocalizedString;
	subtitle?: LocalizedString;
	role: LocalizedString;
	achievements?: LocalizedStringArray;
}

export const projects: LocalizedProjectData[] = [
	{
		title: "OrderMaster",
		description: {
			en: "A full-stack application built with Next.js App Router, consolidating orders from multiple sales platforms into a single dashboard. It handles the entire order lifecycle — from synchronization, through shipping label generation and sales documents, to inventory management. The system includes authentication with 2FA, subscriptions, an admin panel, and an AI assistant for customer support.",
			pl: "Aplikacja full-stack zbudowana w oparciu o Next.js App Router, konsolidująca zamówienia z wielu platform sprzedażowych w jednym panelu. Obsługuje cały cykl życia zamówienia — od synchronizacji, przez generowanie etykiet wysyłkowych i dokumentów sprzedaży, po zarządzanie magazynem. System zawiera uwierzytelnianie 2FA, subskrypcje, panel administracyjny oraz asystenta AI do obsługi klienta.",
		},
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
		role: {
			en: "Solo Developer - project built from scratch.",
			pl: "Samodzielny programista - projekt zbudowany od zera.",
		},
		achievements: {
			en: [
				"Integrated with marketplace APIs (Allegro, eBay) and courier services (InPost, DPD) — order syncing, label generation, shipment tracking",
				"Type-safe full-stack architecture — Zod validation, parameterized SQL queries, token encryption (AES/AWS KMS), 2FA, OAuth",
				"Sales document generation (invoices, receipts) and inventory module with stock alerts and marketplace offer synchronization",
				"Internationalization (PL/EN), Redis caching, tiered subscription system, and an LLM-powered AI assistant for customer messaging",
			],
			pl: [
				"Integracja z API marketplace'ów (Allegro, eBay) i firm kurierskich (InPost, DPD) — synchronizacja zamówień, generowanie etykiet, śledzenie przesyłek",
				"Typowana architektura full-stack — walidacja Zod, sparametryzowane zapytania SQL, szyfrowanie tokenów (AES/AWS KMS), 2FA, OAuth",
				"Generowanie dokumentów sprzedaży (faktury, paragony) oraz moduł magazynowy z alertami stanów i synchronizacją ofert",
				"Internacjonalizacja (PL/EN), cache Redis, wielopoziomowy system subskrypcji i asystent AI oparty na LLM do obsługi wiadomości klientów",
			],
		},
		liveUrl: "https://ordermaster.pl",
		featured: true,
	},
	{
		title: "Warehouse Management System",
		subtitle: {
			en: `App made for "Primus Inter Pares 2026" competition that qualified for the national finals (top 3 out of 100+ teams in Poland)`,
			pl: `Aplikacja stworzona na konkurs „Primus Inter Pares 2026", która zakwalifikowała się do finału krajowego (top 3 spośród ponad 100 zespołów w Polsce)`,
		},
		description: {
			en: "Full-stack warehouse management system enabling real-time inventory tracking, 3D warehouse visualization, and barcode/QR scanning. Built a responsive Next.js frontend with a type-safe API integration layer, multi-factor authentication (WebAuthn, TOTP, email codes), and internationalization (PL/EN). Containerized the entire stack with Docker and set up automated CI/CD pipelines for building, testing, and deploying to production via GitHub Actions.",
			pl: "System zarządzania magazynem typu full-stack, umożliwiający śledzenie stanów w czasie rzeczywistym, wizualizację 3D magazynu oraz skanowanie kodów kreskowych/QR. Zbudowałem responsywny frontend w Next.js z typowaną warstwą integracji API, uwierzytelnianiem wieloskładnikowym (WebAuthn, TOTP, kody e-mail) oraz internacjonalizacją (PL/EN). Cały stack skonteneryzowałem z Dockerem i zautomatyzowałem pipeline CI/CD do budowania, testowania i wdrażania na produkcję przez GitHub Actions.",
		},
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
		role: {
			en: "Frontend & DevOps",
			pl: "Frontend i DevOps",
		},
		achievements: {
			en: [
				"Built an interactive frontend with Next.js, React 19, and Three.js — including a 3D warehouse visualization, barcode/QR scanner, voice assistant, and a full admin panel with data export (PDF, Excel, CSV)",
				"Designed a type-safe API integration layer using a custom fetch wrapper with Zod schema validation, TanStack React Query caching, and seamless 2FA challenge handling between frontend and Spring Boot backend",
				"Containerized the application with multi-stage Docker builds (Bun + Node.js for frontend, Maven + JRE for backend) and orchestrated a 6-service stack (Next.js, Spring Boot, PostgreSQL, Redis, Adminer, rembg) via Docker Compose",
				"Set up CI/CD pipelines with GitHub Actions — path-based change detection for conditional builds, automated linting/testing on PRs, and SSH-based production deployment with GHCR image publishing",
			],
			pl: [
				"Zbudowałem interaktywny frontend w Next.js, React 19 i Three.js — z wizualizacją 3D magazynu, skanerem kodów kreskowych/QR, asystentem głosowym oraz pełnym panelem administracyjnym z eksportem danych (PDF, Excel, CSV)",
				"Zaprojektowałem typowaną warstwę integracji API z customowym fetch-wrapperem, walidacją schematów Zod, cache'owaniem TanStack React Query i płynną obsługą wyzwań 2FA między frontendem a backendem Spring Boot",
				"Skonteneryzowałem aplikację wieloetapowymi buildami Dockera (Bun + Node.js dla frontendu, Maven + JRE dla backendu) i zorkiestrowałem stack 6 usług (Next.js, Spring Boot, PostgreSQL, Redis, Adminer, rembg) przez Docker Compose",
				"Skonfigurowałem pipeline CI/CD w GitHub Actions — wykrywanie zmian po ścieżkach pod warunkowe buildy, automatyczny lint/testy na PR-ach oraz wdrażanie produkcyjne przez SSH z publikacją obrazów na GHCR",
			],
		},
		repoUrl: "https://github.com/1Zuwi1/magazyn",
		featured: true,
	},
	{
		title: "ConnectUS",
		subtitle: {
			en: `App made for "Primus Inter Pares 2024" competition that took 11th place among 100+ teams in Poland`,
			pl: `Aplikacja stworzona na konkurs „Primus Inter Pares 2024", która zajęła 11. miejsce spośród ponad 100 zespołów w Polsce`,
		},
		description: {
			en: "A real-time team messaging platform supporting private and group conversations, file sharing, and user presence tracking. Responsible for the entire backend — designed the REST API and WebSocket layer, implemented authentication with LDAP support, built an admin panel with automated database backup/restore, and structured the codebase following MVC architecture.",
			pl: "Platforma do komunikacji zespołowej w czasie rzeczywistym, obsługująca rozmowy prywatne i grupowe, udostępnianie plików oraz śledzenie obecności użytkowników. Odpowiadałem za cały backend — zaprojektowałem REST API i warstwę WebSocket, wdrożyłem uwierzytelnianie z obsługą LDAP, zbudowałem panel administracyjny z automatycznym backupem/przywracaniem bazy danych i ustrukturyzowałem kod w architekturze MVC.",
		},
		role: {
			en: "Backend Developer",
			pl: "Backend Developer",
		},
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
		achievements: {
			en: [
				"Built a real-time communication backend using Express.js and Socket.IO, handling live messaging, user presence, and event broadcasting across multiple chat rooms",
				"Designed and implemented a MySQL-backed data layer with dedicated query modules following MVC architecture and separation of concerns",
				"Developed a secure authentication system with bcrypt password hashing, session management, LDAP enterprise integration, and role-based admin access over HTTPS",
				"Created an automated database backup/restore system with scheduled dumps and admin-controlled recovery, plus file upload handling with magic-byte validation",
			],
			pl: [
				"Zbudowałem backend komunikacyjny w czasie rzeczywistym z Express.js i Socket.IO, obsługujący wiadomości na żywo, status obecności i broadcasting zdarzeń w wielu pokojach",
				"Zaprojektowałem i wdrożyłem warstwę danych opartą na MySQL z dedykowanymi modułami zapytań w architekturze MVC z separacją odpowiedzialności",
				"Stworzyłem bezpieczny system uwierzytelniania z hashowaniem bcrypt, zarządzaniem sesjami, integracją LDAP oraz dostępem admin opartym na rolach przez HTTPS",
				"Stworzyłem automatyczny system backupu/przywracania bazy ze scheduled-dumpami i kontrolą admina, plus obsługę uploadu plików z walidacją magic-byte",
			],
		},
	},
	{
		title: "Limitless",
		subtitle: {
			en: "App made for a school competition that won 1st place",
			pl: "Aplikacja stworzona na konkurs szkolny, która zdobyła 1. miejsce",
		},
		description: {
			en: "An educational RPG-style web game where players answer knowledge questions in real-time combat encounters, featuring a story campaign with boss battles, a ranked mode with a global leaderboard, and a character progression system. Built the entire frontend — implemented a type-safe React architecture with file-based routing, server state caching, and Zod-validated API communication. Designed a retro 8-bit UI with animations, an audio system, and dark/light theme support.",
			pl: "Edukacyjna gra webowa w stylu RPG, w której gracze odpowiadają na pytania wiedzowe podczas walk w czasie rzeczywistym, z kampanią fabularną i bossami, trybem rankingowym z globalnym leaderboardem oraz progresją postaci. Zbudowałem cały frontend — typowaną architekturę React z routingiem opartym na plikach, cache'owaniem stanu serwera i walidowaną przez Zod komunikacją z API. Zaprojektowałem retro 8-bitowe UI z animacjami, system audio oraz obsługę motywu jasnego/ciemnego.",
		},
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
		role: {
			en: "Frontend Developer",
			pl: "Frontend Developer",
		},
		achievements: {
			en: [
				"Designed and implemented a real-time question-based combat system with critical hits, support tokens (power-ups), animated feedback, and timed rounds for both PvE and ranked game modes",
				"Built a fully type-safe data layer using Zod schema validation on every API response, TanStack Query for server state caching with optimistic updates, and a custom HTTP client with automatic error handling",
				"Developed a custom audio engine with volume control, looping, and playback rate adjustment, plus a guest account flow allowing users to trial the game before registering",
			],
			pl: [
				"Zaprojektowałem i wdrożyłem system walki w czasie rzeczywistym oparty na pytaniach, z trafieniami krytycznymi, tokenami wsparcia (power-upy), animowanym feedbackiem i rundami czasowymi w trybach PvE oraz rankingowym",
				"Zbudowałem w pełni typowaną warstwę danych z walidacją schematów Zod na każdej odpowiedzi API, TanStack Query do cache'owania stanu serwera z optymistycznymi aktualizacjami i własnym klientem HTTP z automatyczną obsługą błędów",
				"Stworzyłem własny silnik audio z kontrolą głośności, zapętlaniem i regulacją prędkości odtwarzania oraz flow konta gościa pozwalający wypróbować grę bez rejestracji",
			],
		},
		liveUrl: "https://limitless.edu.pl",
	},
];

export interface AchievementItem {
	title: LocalizedString;
	issuer: string;
	date: string;
	description: LocalizedString;
	type: "certification" | "award" | "accomplishment";
	url?: string;
}

export const achievements: AchievementItem[] = [
	{
		title: {
			en: "Primus Inter Pares 2026 - 3rd Place",
			pl: "Primus Inter Pares 2026 - 3. miejsce",
		},
		issuer: "Primus Inter Pares",
		date: "2026",
		description: {
			en: "Awarded 3rd place for developing final project in a national competition for IT students in Poland.",
			pl: "Zdobycie 3. miejsca za projekt finałowy w ogólnopolskim konkursie dla uczniów kierunków informatycznych.",
		},
		type: "award",
		url: "https://zs.ketrzyn.pl/aktualnosci/mamy-iii-miejsce/",
	},
	{
		title: {
			en: "Aplikacja Edukacyjna 2025 - 1st Place",
			pl: "Aplikacja Edukacyjna 2025 - 1. miejsce",
		},
		issuer: "Zespół Szkół im. Marii Curie Skłodowskiej w Kętrzynie",
		date: "2025/2026",
		description: {
			en: "Awarded 1st place in a school competition for developing an educational application.",
			pl: "Zdobycie 1. miejsca w konkursie szkolnym za stworzenie aplikacji edukacyjnej.",
		},
		type: "award",
		url: "https://zs.ketrzyn.pl/projekty/sprawozdanie-z-konkursu-aplikacja-edukacyjna-2025%f0%9f%92%bb%f0%9f%96%a5/",
	},
	{
		title: {
			en: "Primus Inter Pares 2024 - 11th Place",
			pl: "Primus Inter Pares 2024 - 11. miejsce",
		},
		issuer: "Primus Inter Pares",
		date: "2024",
		description: {
			en: "Taking 11th place for developing an application for team messaging in a national competition for IT students.",
			pl: "11. miejsce za aplikację do komunikacji zespołowej w ogólnopolskim konkursie dla uczniów kierunków informatycznych.",
		},
		type: "accomplishment",
		url: "https://zs.ketrzyn.pl/aktualnosci/primus-inter-pares-sprawozdanie-2024/",
	},
];
