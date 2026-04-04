import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/theme/ThemeProvider";
import Button from "../../components/Button/Button";
import SmileIcon from "../../assets/icons/smiling-emoji.svg";
import profilePic from "../../assets/images/profile.png";
import profilePicDark from "../../assets/images/profile-dark.png";
import styles from "./Home.module.scss";

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
			<section className={styles.skills}></section>
			<section className={styles.projects}></section>
			<section className={styles.contact}></section>
		</div>
	);
}
