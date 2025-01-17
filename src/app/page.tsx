import SmileIcon from "../../public/icons/smiling-emoji.svg";
import Button from "components/Button";
import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";
import ReactIcon from "../../public/icons/tools/react.svg";
import Tool from "components/Tool";
import ProjectList from "components/ProjectList";

export default function Home() {
	return (
		<main>
			<section>
				<h1>
					hello! <SmileIcon />
				</h1>
				<p>
					I&apos;m Ife Onuorah, a full-stack software developer with a simple
					yet powerful approach: &quot;
					<span>Impact Matters More Than Intent</span>
					&quot;
				</p>
				<p>
					I enjoy building inclusive digital experiences and learning alongside
					others. With creativity, a collaborative spirit, and a growing
					technical skill set, I&apos;m excited to contribute to meaningful
					projects and make a difference through code.
				</p>
				<Button>get to know me</Button>

				<Image src={profilePic} alt="A picture of me, Ife Onuorah" />
			</section>
			<section>
				<h2>what i work with</h2>
				<Tool name="react">
					<ReactIcon />
				</Tool>
			</section>
			<section>
				<h2>browse my selected projects</h2>
				<ProjectList />
				<Button>view all projects</Button>
			</section>
			<section>
				<h2>
					looking for a developer who notices the small things and is committed
					delivering exceptional quality? <span>that&apos;s me!</span>
				</h2>
				<p>
					With a sharp eye for detail and design, a strong foundation in
					full-stack development, and a passion for continuous learning,
					I&apos;m eager to collaborate and make ideas happen. I&apos;m
					currently seeking new opportunities to bring my skills and enthusiasm
					to exciting projects.
				</p>
				<Button>let&apos;s connect</Button>
			</section>
		</main>
	);
}
