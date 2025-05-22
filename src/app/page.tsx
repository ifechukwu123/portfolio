"use client";

import { useRouter } from "next/navigation";
import SmileIcon from "../../public/icons/smiling-emoji.svg";
import Button from "components/Button";
import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";
import ReactIcon from "../../public/icons/tools/react.svg";
import Tool from "components/Tool";
import ProjectList from "components/ProjectList";

export default function Home() {
	const router = useRouter();

	return (
		<main className="bg-alabaster dark:bg-licorice">
			<section className="px-sm flex flex-col gap-[1.5rem] md:px-[6rem] md:flex-row md:items-center">
				<div>
					<div className="flex items-end">
						<div>
							<h1 className="font-heading capitalize font-bold flex gap-[0.5625rem]">
								hello! <SmileIcon />
							</h1>
							<p>
								I&lsquo;m Ife Onuorah, a full-stack software developer with a
								simple yet powerful approach: &ldquo;
								<span className="italic capitalize text-rose-red">
									impact matters more than intent
								</span>
								&ldquo;
							</p>
						</div>
						<Image
							src={profilePic}
							alt="A picture of me, Ife Onuorah!"
							className="w-1/2 md:hidden"
						/>
					</div>
					<p>
						I enjoy building inclusive digital experiences and learning
						alongside others. With creativity, a collaborative spirit, and a
						growing technical skill set, I&apos;m excited to contribute to
						meaningful projects and make a difference through code.
					</p>
					<Button onClick={() => router.push("/about")}>get to know me</Button>
				</div>
				<Image
					src={profilePic}
					alt="A picture of me, Ife Onuorah!"
					className="w-1/3 hidden md:block"
				/>
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
				<Button onClick={() => router.push("/projects")}>
					view all projects
				</Button>
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
				<Button onClick={() => router.push("/contact")}>
					let&apos;s connect
				</Button>
			</section>
		</main>
	);
}
