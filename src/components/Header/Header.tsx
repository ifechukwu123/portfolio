import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/mobile.svg";
import TabletLogo from "../../assets/logo/tablet.svg";
import IconButton from "../IconButton/IconButton";
import SunIcon from "../../assets/icons/sun.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import XIcon from "../../assets/icons/x.svg";
import "./Header.scss";

export default function Header() {
	// const { theme, toggleTheme } = useTheme(); add theme
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
					<img src={Logo} alt="Logo for Ife Onuorah" className="logo-mobile" />

					{/* tablet/desktop logo */}
					<div className="logo-tablet">
						<img src={TabletLogo} alt="Logo for Ife Onuorah" />

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
							// toggleTheme();
							document.documentElement.classList.toggle("dark");
						}}
						ariaLabel={"Change to Dark Mode"}
						icon={SunIcon}
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
									<img src={Logo} alt="Logo for Ife Onuorah" />
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
							<nav aria-label="Main" className="nav">
								<ul role="list" className="nav__list">
									<li>
										<Link
											to="/projects"
											className="nav__item"
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
											className="nav__item"
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
											className="nav__item"
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
											className="nav__item"
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
