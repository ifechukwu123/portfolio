import { Source_Serif_4 } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import type { Metadata } from "next";
import type { Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "styles/globals.css";
import Script from "next/script";

const source_serif_4 = Source_Serif_4({
	fallback: ["Garamond", "Georgia", "serif"],
	subsets: ["latin"],
	variable: "--font-heading",
}); //font for headers

const nunito_sans = Nunito_Sans({
	fallback: ["Arial", "Verdana", "sans-serif"],
	subsets: ["latin"],
	variable: "--font-body",
}); //font for body

export const metadata: Metadata = {
	title: "Ife Onuorah | Software Developer",
	description: "Portfolio page for Ife Onuorah",
	creator: "Ife Onuorah",
	icons: [
		{
			media: "(prefers-color-scheme: light)",
			url: "/logo/mobile.svg",
			type: "image/svg",
		},
		{
			media: "(prefers-color-scheme: dark)",
			url: "/logo/mobile-dark.svg",
			type: "image/svg",
		},
	],
};

export const viewport: Viewport = {
	colorScheme: "light dark",
}; //light & dark color schemes available on this portfolio

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const setTheme = `const userPreference = localStorage.getItem("theme");
	const systemPreference = window.matchMedia(
		"(prefers-color-scheme:dark)"
	).matches;

	if (userPreference === "dark" || (!userPreference && systemPreference)) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}`; //need to fix the jumpiness

	return (
		<html
			lang="en"
			className={`${source_serif_4.variable} ${nunito_sans.variable}

		`}
		>
			<head>
				<Script
					id="set-theme"
					dangerouslySetInnerHTML={{ __html: setTheme }}
					strategy="beforeInteractive"
				/>
			</head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
