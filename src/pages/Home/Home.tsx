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
				<div className="flex-1 flex flex-col gap-6 md:gap-9 md:flex-1 md:max-w-[31.5625rem]">
					<div className="flex flex-col items-center md:items-start md:gap-4">
						<h1 className="capitalize flex items-baseline gap-1 md:gap-2 font-semibold text-[3.5rem] leading-[5.25rem] md:text-[4.5rem] md:leading-[6.75rem] lg:text-[6rem] lg:leading-[9rem]">
							<span>hello!</span>{" "}
							<img
								src={SmileIcon}
								alt="smiling face emoji"
								className="w-[1.5625rem] md:w-[1.9375rem] lg:w-[2.875rem] dark:invert"
							/>
						</h1>
						<p className="px-2 md:px-0 max-w-[22.25rem] md:max-w-[31.5625rem] text-center text-[1.125rem] leading-[1.75rem] md:text-xl md:leading-[2.5rem] lg:text-2xl lg:leading-[3rem] md:text-left md:mt-[-1rem]">
							I&#39;m Ife, a full-stack software developer with a simple yet
							powerful approach:{" "}
							<span className="inline-block italic capitalize text-rose-red">
								impact matters more than intent
							</span>
						</p>
					</div>

					<Button
						classname="self-center md:self-start"
						onClick={() => navigate("/about")}
					>
						get to know me
					</Button>
				</div>
				<img
					src={theme === "light" ? profilePic : profilePicDark}
					alt="A picture of me, Ife!"
					className="flex-1 object-contain h-12 md:h-auto w-auto md:w-full md:max-h-full"
				/>
			</section>
			<section className={styles.skills}></section>
			<section className={styles.projects}></section>
			<section className={styles.contact}></section>
		</div>
	);
}
