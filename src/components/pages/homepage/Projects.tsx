"use client";
import { useRouter } from "next/navigation";
import Button from "components/Button";
import ProjectList from "@/components/pages/homepage/ProjectList";

export default function Projects() {
	const router = useRouter();

	return (
		<section className="px-sm md:px-md flex flex-col gap-12 md:gap-[4.5rem]">
			<header className="pb-3 border-b-2 border-dashed border-licorice md:flex md:justify-between md:items-center">
				<h2 className=" capitalize text-center md:text-left">
					browse my projects
				</h2>
				<Button
					onClick={() => router.push("/projects")}
					classname="hidden md:flex"
				>
					view all projects
				</Button>
			</header>
			<ProjectList />
			<Button
				onClick={() => router.push("/projects")}
				classname="self-center my-6 md:hidden"
			>
				view all projects
			</Button>
			<div className="border-b-2 border-dashed border-licorice"></div>
		</section>
	);
}
