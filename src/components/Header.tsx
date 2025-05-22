"use client";
import MenuIcon from "/public/icons/menu.svg";
import SunIcon from "/public/icons/sun.svg";
import MoonIcon from "/public/icons/moon.svg";
import MobileLogo from "/public/logo/mobile.svg";
import MobileLogoDark from "/public/logo/mobile-dark.svg";
import Logo from "/public/logo/logo.svg";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className="px-sm bg-alabaster dark:bg-licorice">
			<div className="py-[1.5rem] flex justify-between items-center border-b-2 border-licorice dark:border-alabaster">
				<Link href="/">
					<MobileLogo className="md:hidden dark:hidden" />
					<MobileLogoDark className="hidden dark:block md:hidden md:dark:hidden" />
					<div className="hidden md:block">
						<Logo />
						<span className="text-licorice/50 capitalize ">
							software developer{" "}
							<span className="text-apple-green italic">+ dreamer</span>
						</span>
					</div>
				</Link>

				<nav aria-label="Main" className="hidden md:block">
					<ul role="list" className="flex capitalize gap-[1.25rem]">
						<li>projects</li>
						<li>about</li>
						<li>contact</li>
						<li>resume</li>
					</ul>
				</nav>

				<div className="flex gap-[0.5rem]">
					<button
						className="p-[0.7813rem]"
						aria-label={
							isDarkMode ? "Change to Light Mode" : "Change to Dark Mode"
						}
						onClick={() => setIsDarkMode(!isDarkMode)}
					>
						{isDarkMode ? (
							<MoonIcon aria-hidden="true" />
						) : (
							<SunIcon aria-hidden="true" />
						)}
					</button>
					<button
						className="p-[0.7813rem] md:hidden"
						aria-label="Display menu"
						onClick={() => {
							setIsMenuOpen(isMenuOpen);
						}}
					>
						<MenuIcon aria-hidden="true" className="dark:stroke-alabaster" />
					</button>
				</div>
			</div>
		</header>
	);
}
