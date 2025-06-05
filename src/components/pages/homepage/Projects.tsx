"use client";
import { useRouter } from "next/navigation";
import Button from "components/Button";
import ProjectList from "@/components/pages/homepage/ProjectList";

export default function Projects() {
	const router = useRouter();

	return (
		<section className="px-sm md:px-md flex flex-col gap-12">
			<h2 className="border-b-2 border-dashed border-licorice pb-3 capitalize text-center md:text-left">
				browse my projects
			</h2>
			<ProjectList />
			<Button
				onClick={() => router.push("/projects")}
				classname="self-center my-6"
			>
				view all projects
			</Button>
			<div className="border-b-2 border-dashed border-licorice"></div>
		</section>
	);
}
