"use client";
import { useRouter } from "next/navigation";
import Button from "components/Button";
import ProjectList from "@/components/pages/homepage/ProjectList";
import About from "components/pages/homepage/About";
import Skills from "@/components/pages/homepage/Skills";
import Contact from "@/components/pages/homepage/Contact";

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
			<Contact />
		</main>
	);
}
