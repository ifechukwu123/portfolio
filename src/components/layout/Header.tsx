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
		setIsLightMode(!document.documentElement.classList.contains("dark"));
	}, []);

	return (
		<header className="relative px-sm md:px-md lg:px-lg bg-alabaster dark:bg-licorice md:text-base lg:text-xl">
			{/* header wrapper */}
			<div className="py-3 flex justify-between items-center border-b-2 border-licorice dark:border-alabaster">
				{/* Logo */}
				<Link href="/" className="z-10">
					{/* mobile logos */}
					<Image
						src={MobileLogo}
						alt="Logo for Ife Onuorah"
						className="dark:hidden md:hidden"
					/>
					<Image
						src={MobileLogoDark}
						alt="Logo for Ife Onuorah"
						className="hidden dark:block dark:md:hidden"
					/>

					{/* tablet/desktop logos */}
					<div className="hidden md:block">
						<Image
							src={Logo}
							alt="Logo for Ife Onuorah"
							className="dark:hidden lg:w-[12.0625rem]"
						/>
						<Image
							src={LogoDark}
							alt="Logo for Ife Onuorah"
							className="hidden dark:block lg:w-[12.0625rem]"
						/>
						<span className="block mt-[-4px] text-[0.75rem] text-licorice/50 dark:text-alabaster capitalize">
							software developer{" "}
							<span className="text-apple-green italic">+ dreamer</span>
						</span>
					</div>
				</Link>

				{/* tablet/desktop navigation links */}
				<nav
					aria-label="Main"
					className="hidden absolute inset-0 md:flex justify-center items-center"
				>
					<ul role="list" className="flex capitalize gap-5 lg:gap-9">
						<li role="listitem">
							<Link href="/projects" className="py-3">
								projects
							</Link>
						</li>
						<li role="listitem">
							<Link href="/about" className="py-3">
								about
							</Link>
						</li>
						<li role="listitem">
							<Link href="/contact" className="py-3">
								contact
							</Link>
						</li>
						<li role="listitem">
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

				{/* theme & mobile menu options */}
				<div className="flex gap-4 z-10">
					<button
						className="p-2.5"
						aria-label={
							isLightMode ? "Change to Dark Mode" : "Change to Light Mode"
						}
						onClick={() => {
							setIsLightMode(!isLightMode);
							document.documentElement.classList.toggle("dark");
							localStorage.setItem("theme", isLightMode ? "dark" : "light");
						}}
					>
						<Image
							src={SunIcon}
							alt=""
							aria-hidden="true"
							className="dark:hidden w-[1.5625rem]"
						/>
						<Image
							src={MoonIcon}
							alt=""
							aria-hidden="true"
							className="hidden dark:block w-[1.5625rem]"
						/>
					</button>
					<button
						className="p-2.5 md:hidden"
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
