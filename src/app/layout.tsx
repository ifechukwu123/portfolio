import type { Metadata } from "next";
import "styles/globals.css";
import Header from "components/Header";

export const metadata: Metadata = {
	title: "Ife Onuorah",
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
			</body>
		</html>
	);
}
