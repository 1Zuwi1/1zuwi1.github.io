import { useLanguage } from "#/i18n/context";

export default function LanguageToggle() {
	const { language, toggleLanguage, t } = useLanguage();
	const nextLabel = language === "en" ? "PL" : "EN";

	return (
		<button
			type="button"
			onClick={toggleLanguage}
			aria-label={t.language.switchTo}
			title={t.language.switchTo}
			className="rounded-full border border-border bg-card px-2.5 py-1.5 font-mono text-xs font-semibold text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-warm/30 hover:text-warm hover:shadow-md"
		>
			{nextLabel}
		</button>
	);
}
