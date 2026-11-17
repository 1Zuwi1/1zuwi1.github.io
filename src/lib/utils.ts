import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const plnFormat = new Intl.NumberFormat("pl-PL", {
	style: "currency",
	currency: "PLN",
	maximumFractionDigits: 0,
});

/** Formats a whole-złoty amount, e.g. 12000 → "12 000 zł". */
export function formatPLN(value: number) {
	return plnFormat.format(value);
}
