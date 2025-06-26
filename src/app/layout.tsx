import { Baskervville } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import type { Metadata } from "next";
import type { Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "styles/globals.css";
import Script from "next/script";

const baskervville = Baskervville({
	preload: true,
	weight: "400",
	fallback: ["Garamond", "Georgia", "serif"],
	subsets: ["latin"],
	variable: "--font-heading",
}); //font for headers (second option, use playfair display)

const nunito_sans = Nunito_Sans({
	preload: true,

	fallback: ["Arial", "Verdana", "sans-serif"],
	subsets: ["latin"],
	variable: "--font-body",
}); //font for body (second option, instrument sans?)

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
					  const systemPreference = window.matchMedia("(prefers-color-scheme:dark)").matches;
					  if (userPreference === "dark" || (!userPreference && systemPreference)) {
					  	document.documentElement.classList.add("dark");
					  } else {
						document.documentElement.classList.remove("dark");
					  }`; //need to fix the jumpiness

	return (
		<html
			lang="en"
			className={`${baskervville.variable} ${nunito_sans.variable}

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
