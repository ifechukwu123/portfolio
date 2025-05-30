"use client";
import { useRouter } from "next/navigation";
import Button from "components/Button";
import ProjectList from "@/components/pages/homepage/ProjectList";

export default function Projects() {
	const router = useRouter();

	return (
		<section className="px-sm">
			<h2 className="border-b-2 border-dashed border-licorice pb-2 capitalize">
				browse my projects
			</h2>
			<ProjectList />
			<Button onClick={() => router.push("/projects")}>
				view all projects
			</Button>
			<div className="border-b-2 border-dashed border-licorice"></div>
		</section>
	);
}
