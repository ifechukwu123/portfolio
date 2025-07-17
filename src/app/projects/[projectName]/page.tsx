"use client";
import { useParams, useRouter } from "next/navigation";
import { ProjectsData } from "data/projectsData";
import { useEffect } from "react";

export default function Project() {
	const router = useRouter();

	//Retrieving the specific project information
	const { projectName } = useParams<{ projectName: string }>();
	const project = ProjectsData.find((project) => project.slug === projectName);

	useEffect(() => {
		if (!project) {
			//redirect back to Projects page if project doesn't exist
			router.push("/projects");
		}
	}, [project]);

	if (!project) return null;

	return <div className="px-sm">{project.name}</div>;
}
