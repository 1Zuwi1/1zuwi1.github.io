import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { type Language, translations, type UIStrings } from "./translations";

interface LanguageContextValue {
	language: Language;
	setLanguage: (lang: Language) => void;
	toggleLanguage: () => void;
	t: UIStrings;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
	undefined,
);

const STORAGE_KEY = "language";

function getInitialLanguage(): Language {
	if (typeof window === "undefined") return "en";
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === "en" || stored === "pl") return stored;
	const browserLang = window.navigator.language.toLowerCase();
	if (browserLang.startsWith("pl")) return "pl";
	return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>("en");

	useEffect(() => {
		const initial = getInitialLanguage();
		setLanguageState(initial);
		document.documentElement.lang = initial;
	}, []);

	const setLanguage = useCallback((lang: Language) => {
		setLanguageState(lang);
		document.documentElement.lang = lang;
		window.localStorage.setItem(STORAGE_KEY, lang);
	}, []);

	const toggleLanguage = useCallback(() => {
		setLanguage(language === "en" ? "pl" : "en");
	}, [language, setLanguage]);

	const value = useMemo<LanguageContextValue>(
		() => ({
			language,
			setLanguage,
			toggleLanguage,
			t: translations[language],
		}),
		[language, setLanguage, toggleLanguage],
	);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage(): LanguageContextValue {
	const ctx = useContext(LanguageContext);
	if (!ctx) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return ctx;
}
