import type { Metadata } from "next";
import "styles/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";

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
		<html lang="en" suppressHydrationWarning>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
