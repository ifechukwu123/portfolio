import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/mobile.svg";
import LogoDark from "../../assets/logo/mobile-dark.svg";
import TabletLogo from "../../assets/logo/tablet.svg";
import TabletLogoDark from "../../assets/logo/tablet-dark.svg";
import IconButton from "../IconButton/IconButton";
import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import XIcon from "../../assets/icons/x.svg";
import "./Header.scss";
import { useTheme } from "../../context/theme/ThemeProvider";

export default function Header() {
	const { theme, toggleTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		//Event to keep track of screen size to display mobile menu
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

	return (
		<header className="header">
			<div className="header-wrapper">
				{/* Logo */}
				<Link to="/" className="logo">
					{/* mobile logo */}
					<img
						src={theme === "light" ? Logo : LogoDark}
						alt="Logo for Ife Onuorah"
						className="logo-mobile"
					/>

					{/* tablet/desktop logo */}
					<div className="logo-tablet">
						<img
							src={theme === "light" ? TabletLogo : TabletLogoDark}
							alt="Logo for Ife Onuorah"
						/>

						<span className="title">
							software developer <span className="italic">+ dreamer</span>
						</span>
					</div>
				</Link>

				{/* tablet/desktop navigation links */}
				<nav aria-label="Main" className="nav">
					<ul role="list" className="nav__list">
						<li>
							<Link to="/projects" className="nav__link">
								projects
							</Link>
						</li>
						<li>
							<Link to="/about" className="nav__link">
								about
							</Link>
						</li>
						<li>
							<Link to="/contact" className="nav__link">
								contact
							</Link>
						</li>
						<li>
							<a
								href="/Ife_Onuorah_Resume.pdf"
								target="_blank"
								type="application/pdf"
								className="nav__link"
							>
								resume
							</a>
						</li>
					</ul>
				</nav>

				{/* theme & mobile menu options */}
				<div className="options">
					<IconButton
						onClick={() => {
							toggleTheme();
						}}
						ariaLabel={
							theme === "light" ? "Change to Dark Mode" : "Change to Light Mode"
						}
						icon={theme === "light" ? SunIcon : MoonIcon}
						iconSize="regular"
					/>
					<IconButton
						classname="hidden"
						ariaLabel={"Display menu options"}
						onClick={() => {
							setIsMenuOpen(true);
						}}
						icon={MenuIcon}
						iconSize="regular"
					/>

					{/* mobile menu navigation links */}
					{isMenuOpen && (
						<div className="menu">
							<div className="menu-icons">
								{/* Logo */}
								<Link
									to="/"
									onClick={() => {
										setIsMenuOpen(false);
									}}
								>
									<img
										src={theme === "light" ? Logo : LogoDark}
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
							<nav aria-label="Main" className="menuNav">
								<ul role="list" className="menuNav__list">
									<li>
										<Link
											to="/projects"
											className="menuNav__item"
											onClick={() => {
												setIsMenuOpen(false);
											}}
										>
											projects
										</Link>
									</li>
									<li>
										<Link
											to="/about"
											className="menuNav__item"
											onClick={() => {
												setIsMenuOpen(false);
											}}
										>
											about
										</Link>
									</li>
									<li>
										<Link
											to="/contact"
											className="menuNav__item"
											onClick={() => {
												setIsMenuOpen(false);
											}}
										>
											contact
										</Link>
									</li>
									<li>
										<a
											href="/Ife_Onuorah_Resume.pdf"
											target="_blank"
											type="application/pdf"
											className="menuNav__item"
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
