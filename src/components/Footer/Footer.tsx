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
			<div className="footer-wrapper">
				{/* Links */}
				<div className="footer__links">
					<Link to="/" className="logo">
						<img src={TabletLogo} alt="Logo for Ife Onuorah" />
					</Link>

					<div className="links-wrapper">
						{/* navigation */}
						<nav aria-label="Secondary" className="nav">
							<ul role="list" className="nav__list">
								<li className="nav__item">
									<Link to="/" className="nav__link">
										home
									</Link>
								</li>
								<li className="nav__item">
									<Link to="/projects" className="nav__link">
										projects
									</Link>
								</li>
								<li className="nav__item">
									<Link to="/about" className="nav__link">
										about
									</Link>
								</li>
								<li className="nav__item">
									<Link to="contact" className="nav__link">
										contact
									</Link>
								</li>
							</ul>
						</nav>

						{/* socials */}
						<div className="socials">
							<span className="socials__message">
								<span>Send me a message</span>{" "}
								<img src={SmileIcon} alt="Smiling face emoji" />
							</span>
							<ul role="list" className="socials__list">
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
				<div className="metadata">
					<Link to="/" className="metadata__logo">
						<img src={TabletLogo} alt="Logo for Ife Onuorah" />
					</Link>
					<div className="author">
						<span className="spanOne">
							Made with{" "}
							<span className="spanTablet">lots and lots and lots...of</span>{" "}
							<img src={HeartIcon} alt="love" /> by <span>Ife Onuorah</span>
						</span>
						<span>© 2025, Ife Onuorah</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
