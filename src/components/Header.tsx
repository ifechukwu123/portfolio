"use client";
import MenuIcon from "/public/icons/menu.svg?url";
import SunIcon from "/public/icons/sun.svg?url";
import MoonIcon from "/public/icons/moon.svg?url";
import MobileLogo from "/public/logo/mobile.svg?url";
import MobileLogoDark from "/public/logo/mobile-dark.svg?url";
import Logo from "/public/logo/tablet.svg?url";
import LogoDark from "/public/logo/tablet-dark.svg?url";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
	const [isLightMode, setIsLightMode] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const userPreference = localStorage.getItem("theme");
		const systemPreference = window.matchMedia(
			"(prefers-color-scheme:dark)"
		).matches;

		if (userPreference === "dark" || (!userPreference && systemPreference)) {
			document.documentElement.classList.add("dark");
			setIsLightMode(false);
		} else {
			document.documentElement.classList.remove("dark");
			setIsLightMode(true);
		}
	}, []);

	return (
		<header className="relative px-sm md:px-md bg-alabaster dark:bg-licorice">
			<div className="py-[1rem] flex justify-between items-center border-b-2 border-licorice dark:border-alabaster">
				<Link href="/" className="z-10">
					<Image
						src={isLightMode ? MobileLogo : MobileLogoDark}
						alt="Logo for Ife Onuorah"
						className="md:hidden"
					/>

					<div className="hidden md:block">
						<Image
							src={isLightMode ? Logo : LogoDark}
							alt="Logo for Ife Onuorah"
							className="lg:w-[12.0625rem]"
						/>
						<span className="block text-[0.75rem] text-licorice/50 capitalize ">
							software developer{" "}
							<span className="text-apple-green italic">+ dreamer</span>
						</span>
					</div>
				</Link>

				<nav
					aria-label="Main"
					className="hidden absolute inset-0 md:flex justify-center items-center"
				>
					<ul role="list" className="flex capitalize gap-[1.25rem]">
						<li>
							<Link href="/projects" className="py-3">
								projects
							</Link>
						</li>
						<li>
							<Link href="/about" className="py-3">
								about
							</Link>
						</li>
						<li>
							<Link href="/contact" className="py-3">
								contact
							</Link>
						</li>
						<li>
							<a
								href="/files/Ife_Onuorah_Resume.pdf"
								target="_blank"
								type="application/pdf"
								className="py-3"
							>
								resume
							</a>
						</li>
					</ul>
				</nav>

				<div className="flex gap-[0.5rem] z-10">
					<button
						className="p-[0.75rem] md:p-[0.625rem]"
						aria-label={
							isLightMode ? "Change to Dark Mode" : "Change to Light Mode"
						}
						onClick={() => setIsLightMode(!isLightMode)}
					>
						<Image
							src={isLightMode ? SunIcon : MoonIcon}
							alt=""
							aria-hidden="true"
							className="w-[1.5625rem]"
						/>
					</button>
					<button
						className="p-[0.75rem] md:hidden"
						aria-label="Display menu"
						onClick={() => {
							setIsMenuOpen(isMenuOpen);
						}}
					>
						<Image
							src={MenuIcon}
							alt=""
							aria-hidden="true"
							className="dark:invert"
						/>
					</button>
				</div>
			</div>
		</header>
	);
}
