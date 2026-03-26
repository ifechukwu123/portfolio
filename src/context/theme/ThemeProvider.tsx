import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
	theme: "light",
	toggleTheme: () => {},
});

//Allows the theme value to be accessible to all components
export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
		const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");

		function applyTheme(isDark: boolean) {
			//Always honour the user's saved preference
			if (savedTheme) {
				setTheme(savedTheme);
				document.documentElement.classList.toggle(
					"dark",
					savedTheme === "dark",
				);
				return;
			}

			//If the user doesn't have a saved preference, use the system preference
			setTheme(isDark ? "dark" : "light");
			document.documentElement.classList.toggle("dark", isDark);
		}

		applyTheme(mediaQuery.matches);

		//Listen for changes in system preference
		function handleChange(event: MediaQueryListEvent) {
			applyTheme(event.matches);
		}
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	return context;
}
