import SmileIcon from "../../public/icons/smiling-emoji.svg";
import Button from "components/Button";
import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";

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
			</section>
		</main>
	);
}
