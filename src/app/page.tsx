"use client";
import { useRouter } from "next/navigation";
import Button from "components/Button";
import ProjectList from "@/components/pages/homepage/ProjectList";
import About from "components/pages/homepage/About";
import Skills from "@/components/pages/homepage/Skills";

export default function Home() {
	const router = useRouter();

	return (
		<main className="bg-alabaster dark:bg-licorice flex flex-col gap-[4.5rem]">
			<About />
			<Skills />
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
