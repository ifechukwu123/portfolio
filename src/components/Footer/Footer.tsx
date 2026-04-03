import { Link } from "react-router-dom";
import TabletLogo from "../../assets/logo/tablet-dark.svg";
import SmileIcon from "../../assets/icons/smile-shape.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import emailIcon from "../../assets/icons/socials/envelope.svg";
import websiteIcon from "../../assets/icons/socials/link.svg";
import linkedinIcon from "../../assets/icons/socials/linkedin.svg";
import githubIcon from "../../assets/icons/socials/github.svg";
import instaIcon from "../../assets/icons/socials/instagram.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			{/* footer wrapper */}
			<div className={styles["footer-wrapper"]}>
				{/* Links */}
				<div className={styles.footer__links}>
					<Link to="/" className={styles.logo}>
						<img src={TabletLogo} alt="Logo for Ife Onuorah" />
					</Link>

					<div className={styles["links-wrapper"]}>
						{/* navigation */}
						<nav aria-label="Secondary" className={styles.nav}>
							<ul role="list" className={styles.nav__list}>
								<li className={styles.nav__item}>
									<Link to="/" className={styles.nav__link}>
										home
									</Link>
								</li>
								<li className={styles.nav__item}>
									<Link to="/projects" className={styles.nav__link}>
										projects
									</Link>
								</li>
								<li className={styles.nav__item}>
									<Link to="/about" className={styles.nav__link}>
										about
									</Link>
								</li>
								<li className={styles.nav__item}>
									<Link to="contact" className={styles.nav__link}>
										contact
									</Link>
								</li>
							</ul>
						</nav>

						{/* socials */}
						<div className={styles.socials}>
							<span className={styles.socials__message}>
								<span>Send me a message</span>{" "}
								<img src={SmileIcon} alt="Smiling face emoji" />
							</span>
							<ul role="list" className={styles.socials__list}>
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
				<div className={styles.metadata}>
					<Link to="/" className={styles.metadata__logo}>
						<img src={TabletLogo} alt="Logo for Ife Onuorah" />
					</Link>
					<div className={styles.author}>
						<span className={styles.spanOne}>
							Made with{" "}
							<span className={styles.spanTablet}>
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
