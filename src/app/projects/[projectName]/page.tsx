"use client";
import { useParams, useRouter } from "next/navigation";
import { ProjectsData } from "data/projectsData";
import { useEffect } from "react";
import launchIcon from "/public/icons/launch.svg?url";
import githubIcon from "/public/icons/tools/github.svg?url";
import IconButton from "@/components/ui/IconButton";
import Image from "next/image";

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

	return (
		<div className="px-sm pt-8 pb-24 md:px-md md:pt-16 md:pb-40 lg:px-lg">
			<div className="flex gap-4 justify-between items-center flex-wrap">
				<h1 className="flex gap-4">{project.name}</h1>
				<div>
					{project.githubLink && (
						<IconButton
							icon={githubIcon}
							ariaLabel="Check out the github repository"
							iconSize="regular"
							onClick={() => {
								window.open(project.githubLink, "_blank");
							}}
						/>
					)}
					{project.deployedLink && (
						<IconButton
							icon={launchIcon}
							ariaLabel="Check out the live site"
							iconSize="regular"
							onClick={() => {
								window.open(project.deployedLink, "_blank");
							}}
						/>
					)}
				</div>
			</div>
			<section>
				<Image
					src={project.image}
					alt={`Screenshot of ${project.name} project`}
					className="w-full"
				/>
			</section>
			<section>
				<h2>Overview</h2> <p>{project.overview}</p>
			</section>
			<section>
				<h2>Key Features</h2>{" "}
				<ol>
					{project.features.map((feature) => (
						<li key={feature.id}>
							<h3 className="font-bold">{feature.name}:</h3>{" "}
							<span>{feature.description}</span>
						</li>
					))}
				</ol>
			</section>
			<section>
				<h2>Tech Stack</h2>
			</section>
			<section>
				<h2>What I learned</h2>
			</section>
		</div>
	);
}
