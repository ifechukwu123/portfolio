import { Source_Serif_4 } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import type { Metadata } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import "styles/globals.css";

const source_serif_4 = Source_Serif_4({
	fallback: ["Garamond", "Georgia", "serif"],
	subsets: ["latin"],
	variable: "--font-heading",
});

const nunito_sans = Nunito_Sans({
	fallback: ["Arial", "Verdana", "sans-serif"],
	subsets: ["latin"],
	variable: "--font-body",
});

export const metadata: Metadata = {
	title: "Ife Onuorah | Software Developer",
	description: "Portfolio page for Ife Onuorah",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${source_serif_4.variable} ${nunito_sans.variable}`}
		>
			<body className="text-black-bean bg-alabaster dark:text-alabaster dark:bg-black-bean font-body">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
