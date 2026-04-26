export type Language = "en" | "pl";

export interface UIStrings {
	nav: {
		home: string;
		projects: string;
		achievements: string;
		toggleMenu: string;
	};
	language: {
		label: string;
		switchTo: string;
	};
	home: {
		availableForWork: string;
		hiIm: string;
		getInTouch: string;
		scroll: string;
		about: {
			label: string;
			title: string;
			description: string;
			techStack: string;
		};
		skills: {
			label: string;
			title: string;
			description: string;
		};
		education: {
			label: string;
			title: string;
			description: string;
		};
		projects: {
			label: string;
			title: string;
			description: string;
			viewAll: string;
		};
		contact: {
			label: string;
			title: string;
			description: string;
			email: string;
			location: string;
			social: string;
		};
	};
	projectsPage: {
		label: string;
		title: string;
		description: string;
		featured: string;
		more: string;
	};
	achievementsPage: {
		label: string;
		title: string;
		description: string;
		stats: {
			certifications: string;
			awards: string;
			accomplishments: string;
		};
		types: {
			certification: string;
			award: string;
			accomplishment: string;
		};
		viewCredential: string;
	};
	projectCard: {
		featured: string;
		liveDemo: string;
		source: string;
	};
	footer: {
		copyright: string;
		tagline: string;
	};
}

export const translations: Record<Language, UIStrings> = {
	en: {
		nav: {
			home: "Home",
			projects: "Projects",
			achievements: "Achievements",
			toggleMenu: "Toggle menu",
		},
		language: {
			label: "Language",
			switchTo: "Switch to Polish",
		},
		home: {
			availableForWork: "Available for work",
			hiIm: "Hi, I'm",
			getInTouch: "Get in touch",
			scroll: "Scroll",
			about: {
				label: "01 / About",
				title: "A bit about me",
				description: "Getting to know the person behind the code.",
				techStack: "Tech Stack",
			},
			skills: {
				label: "02 / Skills",
				title: "What I bring to the table",
				description: "Core competencies honed through building real projects.",
			},
			education: {
				label: "03 / Education",
				title: "Where I studied",
				description: "My academic background and qualifications.",
			},
			projects: {
				label: "04 / Projects",
				title: "Selected work",
				description: "A showcase of projects I'm most proud of.",
				viewAll: "View all projects",
			},
			contact: {
				label: "05 / Contact",
				title: "Let's work together",
				description: "Have a project in mind? I'd love to hear about it.",
				email: "Email",
				location: "Location",
				social: "Social",
			},
		},
		projectsPage: {
			label: "Projects",
			title: "All projects",
			description:
				"A complete collection of my work — from featured highlights to smaller experiments.",
			featured: "Featured",
			more: "More Projects",
		},
		achievementsPage: {
			label: "Achievements",
			title: "Milestones & recognition",
			description:
				"Certifications, awards, and notable accomplishments throughout my career.",
			stats: {
				certifications: "Certifications",
				awards: "Awards",
				accomplishments: "Accomplishments",
			},
			types: {
				certification: "Certification",
				award: "Award",
				accomplishment: "Accomplishment",
			},
			viewCredential: "View credential",
		},
		projectCard: {
			featured: "Featured",
			liveDemo: "Live Demo",
			source: "Source",
		},
		footer: {
			copyright: "All rights reserved.",
			tagline: "Designed & built with care",
		},
	},
	pl: {
		nav: {
			home: "Start",
			projects: "Projekty",
			achievements: "Osiągnięcia",
			toggleMenu: "Przełącz menu",
		},
		language: {
			label: "Język",
			switchTo: "Przełącz na angielski",
		},
		home: {
			availableForWork: "Dostępny do pracy",
			hiIm: "Cześć, jestem",
			getInTouch: "Skontaktuj się",
			scroll: "Przewiń",
			about: {
				label: "01 / O mnie",
				title: "Kilka słów o mnie",
				description: "Poznaj osobę stojącą za kodem.",
				techStack: "Stack technologiczny",
			},
			skills: {
				label: "02 / Umiejętności",
				title: "Co mogę zaoferować",
				description:
					"Kluczowe kompetencje rozwijane podczas pracy nad realnymi projektami.",
			},
			education: {
				label: "03 / Edukacja",
				title: "Gdzie się uczyłem",
				description: "Moje wykształcenie i kwalifikacje.",
			},
			projects: {
				label: "04 / Projekty",
				title: "Wybrane projekty",
				description: "Przegląd projektów, z których jestem najbardziej dumny.",
				viewAll: "Zobacz wszystkie projekty",
			},
			contact: {
				label: "05 / Kontakt",
				title: "Pracujmy razem",
				description: "Masz projekt na oku? Chętnie o nim porozmawiam.",
				email: "E-mail",
				location: "Lokalizacja",
				social: "Social media",
			},
		},
		projectsPage: {
			label: "Projekty",
			title: "Wszystkie projekty",
			description:
				"Kompletna kolekcja moich prac — od wyróżnionych projektów po mniejsze eksperymenty.",
			featured: "Wyróżnione",
			more: "Więcej projektów",
		},
		achievementsPage: {
			label: "Osiągnięcia",
			title: "Kamienie milowe i wyróżnienia",
			description:
				"Certyfikaty, nagrody i znaczące osiągnięcia z mojej dotychczasowej drogi.",
			stats: {
				certifications: "Certyfikaty",
				awards: "Nagrody",
				accomplishments: "Osiągnięcia",
			},
			types: {
				certification: "Certyfikat",
				award: "Nagroda",
				accomplishment: "Osiągnięcie",
			},
			viewCredential: "Zobacz certyfikat",
		},
		projectCard: {
			featured: "Wyróżniony",
			liveDemo: "Demo na żywo",
			source: "Kod źródłowy",
		},
		footer: {
			copyright: "Wszelkie prawa zastrzeżone.",
			tagline: "Zaprojektowane i zbudowane z dbałością",
		},
	},
};
