import { Link } from "react-router-dom";
import TabletLogo from "../../assets/logo/tablet-dark.svg";
import SmileIcon from "../../assets/icons/smile-shape.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import emailIcon from "../../assets/icons/socials/envelope.svg";
import websiteIcon from "../../assets/icons/socials/link.svg";
import linkedinIcon from "../../assets/icons/socials/linkedin.svg";
import githubIcon from "../../assets/icons/socials/github.svg";
import instaIcon from "../../assets/icons/socials/instagram.svg";
import "./Footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			{/* footer wrapper */}
			<div className="flex flex-col gap-6">
				{/* Links */}
				<div className="md:flex md:justify-between md:items-center">
					<Link to="/" className="hidden md:block">
						<img
							src={TabletLogo}
							alt="Logo for Ife Onuorah"
							className="w-[22.5rem]"
						/>
					</Link>

					<div className="flex justify-between items-center md:gap-4">
						{/* navigation */}
						<nav aria-label="Secondary">
							<ul
								role="list"
								className="capitalize flex flex-col gap-2 md:px-4 md:border-r md:border-alabaster md:text-center"
							>
								<li className="hover:underline">
									<Link to="/" className="block py-1">
										home
									</Link>
								</li>
								<li className="hover:underline">
									<Link to="/projects" className="block py-1">
										projects
									</Link>
								</li>
								<li className="hover:underline">
									<Link to="/about" className="block py-1">
										about
									</Link>
								</li>
								<li className="hover:underline">
									<Link to="contact" className="block py-1">
										contact
									</Link>
								</li>
							</ul>
						</nav>

						{/* socials */}
						<div className="flex flex-col items-center gap-2">
							<span className="flex gap-2">
								<span>Send me a message</span>{" "}
								<img src={SmileIcon} alt="Smiling face emoji" />
							</span>
							<ul role="list" className="flex gap-2">
								<li>
									<a href="mailto:ifeonuorah@gmail.com">
										<img src={emailIcon} alt="Send an email" />
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/ifeonuorah/"
										target="_blank"
									>
										<img src={linkedinIcon} alt="Connect with me on LinkedIn" />
									</a>
								</li>
								<li>
									<a
										href="https://www.github.com/ifechukwu123/"
										target="_blank"
									>
										<img src={githubIcon} alt="Check out my github" />
									</a>
								</li>
								<li>
									<a href="http://ifeonuorah.com/">
										<img src={websiteIcon} alt="Visit my website" />
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com/berrifantasyyyy/"
										target="_blank"
									>
										<img src={instaIcon} alt="Follow me on Instagram" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* metadata */}
				<div className="flex flex-col gap-1">
					<Link to="/" className="md:hidden">
						<img
							src={TabletLogo}
							alt="Logo for Ife Onuorah"
							className="w-full"
						/>
					</Link>
					<div className="pt-4 border-t border-alabaster border-dashed flex justify-between text-[0.625rem] leading-[0.9375rem] md:text-[0.8125rem] md:leading-[1.2188rem]">
						<span className="flex gap-1 items-center">
							Made with{" "}
							<span className="hidden md:block">
								lots and lots and lots...of
							</span>{" "}
							<img src={HeartIcon} alt="love" /> by <span>Ife Onuorah</span>
						</span>
						<span>© 2025, Ife Onuorah</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
