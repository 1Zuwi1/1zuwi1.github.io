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
		subtitle: `App made for "Primus Inter Pares 2024" competition that took 11th place among 100+ teams in Poland`,
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
		title: "Primus Inter Pares 2024 - 11th Place",
		issuer: "Primus Inter Pares",
		date: "2024",
		description:
			"Taking 11th place for developing an application for team messaging in a national competition for IT students.",
		type: "accomplishment",
		url: "https://zs.ketrzyn.pl/aktualnosci/primus-inter-pares-sprawozdanie-2024/",
	},
];
