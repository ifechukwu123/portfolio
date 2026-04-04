import Button from "../../components/Button/Button";
import SmileIcon from "../../assets/icons/smiling-emoji.svg";
import profilePic from "../../assets/images/profile.png";
import profilePicDark from "../../assets/images/profile-dark.png";
import reactIcon from "../../assets/icons/tools/react.svg";
import figmaIcon from "../../assets/icons/tools/figma.svg";
import gitIcon from "../../assets/icons/tools/git.svg";
import githubIcon from "../../assets/icons/tools/github.svg";
import htmlIcon from "../../assets/icons/tools/html5.svg";
import javascriptIcon from "../../assets/icons/tools/javascript.svg";
import nextjsIcon from "../../assets/icons/tools/nextjs.svg";
import nodejsIcon from "../../assets/icons/tools/nodejs.svg";
import pythonIcon from "../../assets/icons/tools/python.svg";
import tailwindIcon from "../../assets/icons/tools/tailwind.svg";
import typescriptIcon from "../../assets/icons/tools/typescript.svg";
import projectImage from "../../assets/images/project.png";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/theme/ThemeProvider";
import styles from "./Home.module.scss";
import Tool from "../../components/Tool/Tool";

const skills = [
	{ id: 1, name: "React", icon: reactIcon },
	{ id: 2, name: "HTML5", icon: htmlIcon },
	{ id: 3, name: "Javascript", icon: javascriptIcon },
	{ id: 4, name: "Github", icon: githubIcon },
	{ id: 5, name: "Typescript", icon: typescriptIcon },
	{ id: 6, name: "Git", icon: gitIcon },
	{ id: 7, name: "Next.js", icon: nextjsIcon },
	{ id: 8, name: "Tailwind", icon: tailwindIcon },
	{ id: 9, name: "Node.js", icon: nodejsIcon },
	{ id: 10, name: "Python", icon: pythonIcon },
	{ id: 11, name: "Figma", icon: figmaIcon },
];

export default function Home() {
	const navigate = useNavigate();
	const { theme } = useTheme();

	return (
		<div className={styles.home}>
			<section className={styles.about}>
				<div className={styles.about__content}>
					<div className={styles.about__message}>
						<h1 className={styles.about__title}>
							<span>hello!</span>{" "}
							<img src={SmileIcon} alt="smiling face emoji" />
						</h1>
						<p className={styles.about__description}>
							I&#39;m Ife, a full-stack software developer with a simple yet
							powerful approach:{" "}
							<span className={styles.italic}>
								impact matters more than intent
							</span>
						</p>
					</div>

					<Button
						classname={styles.about__button}
						onClick={() => navigate("/about")}
					>
						get to know me
					</Button>
				</div>
				<img
					src={theme === "light" ? profilePic : profilePicDark}
					alt="A picture of me, Ife!"
					className={styles.about__image}
				/>
			</section>
			<section className={styles.skills}>
				<h2 className={styles.skills__heading}>what i work with</h2>
				<div className={styles["skills-container"]}>
					<ul role="list" className={styles.skills__list}>
						{/* Duplicate for marquee animation */}
						{[...skills, ...skills].map((skill, index) => (
							<li key={`${skill.id}-${index}`}>
								<Tool name={skill.name} icon={skill.icon} />
							</li>
						))}
						{/* What happens if the user doesn't like animation? Can they even scroll? */}
					</ul>
				</div>
			</section>
			<section className={styles.projects}>
				<header className={styles.projects__header}>
					<h2 className={styles.projects__title}>browse my projects</h2>
					<Button
						onClick={() => navigate("/projects")}
						classname={`${styles.button} ${styles["button--tablet"]}`}
					>
						view all projects
					</Button>
				</header>
				<ul role="list" className={styles.projects__list}>
					<li className={styles.projects__item}>
						<Link
							to="/projects/system_of_silk"
							className={styles.projects__link}
						>
							<h3 className={styles.projects__name}>System of Silk</h3>
							<img
								src={projectImage}
								alt="Snapshot of the System of Silk project"
								className={styles.projects__image}
							/>
						</Link>
						<div className={styles.projects__tools}>
							{/* Add tooltip */}
							<img src={typescriptIcon} alt="Typescript" />
							<img src={nextjsIcon} alt="Nextjs" />
							<img src={tailwindIcon} alt="Tailwind" />
							<img src={nodejsIcon} alt="Nodejs" />
						</div>
					</li>
					<li className={styles.projects__item}>
						<Link to="/projects/beauty_bin" className={styles.projects__link}>
							<h3 className={styles.projects__name}>Beauty Bin</h3>
							<img
								src={projectImage}
								alt="Snapshot of the System of Silk project"
								className={styles.projects__image}
							/>
						</Link>

						<div className={styles.projects__tools}>
							<img src={javascriptIcon} alt="Javascript" />
							<img src={reactIcon} alt="React" />
							<img src={nodejsIcon} alt="Nodejs" />
						</div>
					</li>
					<li className={styles.projects__item}>
						<Link to="/projects/instock" className={styles.projects__link}>
							<h3 className={styles.projects__name}>Instock</h3>
							<img
								src={projectImage}
								alt="Snapshot of the System of Silk project"
								className={styles.projects__image}
							/>
						</Link>
						<div className={styles.projects__tools}>
							<img src={javascriptIcon} alt="Javascript" />
							<img src={reactIcon} alt="React" />
							<img src={nodejsIcon} alt="Nodejs" />
						</div>
					</li>
				</ul>
				<Button
					onClick={() => navigate("/projects")}
					classname={`${styles.button} ${styles["button--mobile"]}`}
				>
					view all projects
				</Button>
				<div className={styles.divider}></div>
			</section>
			<section className={styles.contact}>
				<h2 className={styles.contact__heading}>
					Looking for a developer who notices the small things?{" "}
					<span>That&apos;s me!!</span>
				</h2>
				<p className={styles.contact__message}>
					I have a sharp eye for detail and design, a solid full-stack
					foundation, and a love for learning. I&apos;m excited to collaborate
					and bring ideas to life—and I&apos;m looking for new opportunities to
					do just that.
				</p>
				<Button
					onClick={() => navigate("/contact")}
					classname={styles.contact__button}
				>
					let&apos;s connect
				</Button>
			</section>
		</div>
	);
}
