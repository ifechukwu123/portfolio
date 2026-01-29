"use client";
import MenuIcon from "../../../public/icons/menu.svg?url";
import SunIcon from "../../../public/icons/sun.svg?url";
import MoonIcon from "../../../public/icons/moon.svg?url";
import XIcon from "../../../public/icons/x.svg?url";
import MobileLogo from "../../../public/logo/mobile.svg?url";
import MobileLogoDark from "../../../public/logo/mobile-dark.svg?url";
import Logo from "../../../public/logo/tablet.svg?url";
import LogoDark from "../../../public/logo/tablet-dark.svg?url";
import Link from "next/link";
import IconButton from "components/ui/IconButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "context/ThemeProvider";

export default function Header() {
	const { theme, toggleTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		//Keep track of screen size to display mobile menu
		function checkScreenSize() {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
			}
		}

		checkScreenSize();

		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);

	useEffect(() => {
		//Prevent background from scrolling when mobile menu is open
		if (isMenuOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [isMenuOpen]);

	return (
		<header className="relative px-sm md:px-md lg:px-lg bg-alabaster dark:bg-licorice md:text-base lg:text-xl">
			{/* header wrapper */}
			<div className="py-3 flex justify-between items-center border-b-2 border-licorice dark:border-alabaster">
				{/* Logo */}
				<Link href="/" className="z-10">
					{/* mobile logos */}

					<Image
						src={theme === "light" ? MobileLogo : MobileLogoDark}
						alt="Logo for Ife Onuorah"
						className="md:hidden"
					/>

					{/* tablet/desktop logos */}
					<div className="hidden md:block">
						<Image
							src={theme === "light" ? Logo : LogoDark}
							alt="Logo for Ife Onuorah"
							className="w-[9.1875rem] lg:w-[12.0625rem]"
						/>

						<span className="block mt-[-4px] text-[0.75rem] text-licorice/60 dark:text-alabaster capitalize">
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

				{/* theme & mobile menu options */}
				<div className="flex gap-4 z-10">
					<IconButton
						onClick={() => {
							toggleTheme();
							document.documentElement.classList.toggle("dark");
						}}
						ariaLabel={
							theme === "light" ? "Change to Dark Mode" : "Change to Light Mode"
						}
						icon={theme === "light" ? SunIcon : MoonIcon}
						iconSize="regular"
					/>
					<IconButton
						classname="md:hidden"
						ariaLabel={"Display menu options"}
						onClick={() => {
							setIsMenuOpen(true);
						}}
						icon={MenuIcon}
						iconSize="regular"
					/>

					{/* mobile menu navigation links */}
					{isMenuOpen && (
						<div className="bg-alabaster dark:bg-licorice fixed left-0 top-0 h-full w-full z-20 px-sm">
							<div className="py-3 flex justify-between items-center">
								{/* Logo */}
								<Link
									href="/"
									onClick={() => {
										setIsMenuOpen(false);
									}}
								>
									<Image
										src={theme === "light" ? MobileLogo : MobileLogoDark}
										alt="Logo for Ife Onuorah"
									/>
								</Link>
								<IconButton
									onClick={() => {
										setIsMenuOpen(false);
									}}
									ariaLabel="Hide menu options"
									icon={XIcon}
									iconSize="regular"
								/>
							</div>
							<nav
								aria-label="Main"
								className="py-6  h-[calc(100vh-4.4375rem)]"
							>
								<ul
									role="list"
									className="flex flex-col gap-7 text-[30px] font-light uppercase "
								>
									<li>
										<Link
											href="/projects"
											className="block py-4"
											onClick={() => {
												setIsMenuOpen(false);
											}}
										>
											projects
										</Link>
									</li>
									<li>
										<Link
											href="/about"
											className="block py-4"
											onClick={() => {
												setIsMenuOpen(false);
											}}
										>
											about
										</Link>
									</li>
									<li>
										<Link
											href="/contact"
											className="block py-4"
											onClick={() => {
												setIsMenuOpen(false);
											}}
										>
											contact
										</Link>
									</li>
									<li>
										<a
											href="/files/Ife_Onuorah_Resume.pdf"
											target="_blank"
											type="application/pdf"
											className="block py-4"
											onClick={() => {
												setIsMenuOpen(false);
											}}
										>
											resume
										</a>
									</li>
								</ul>
							</nav>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
