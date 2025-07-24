"use client";
import { useParams, useRouter } from "next/navigation";
import { ProjectsData } from "data/projectsData";
import { useEffect } from "react";
import launchIcon from "/public/icons/launch.svg?url";
import githubIcon from "/public/icons/tools/github.svg?url";
import IconButton from "@/components/ui/IconButton";
import Image from "next/image";
import Tool from "@/components/ui/Tool";

export default function Project() {
	const router = useRouter();

	//Retrieving the specific project details
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
		<div className="px-sm pt-8 pb-24 md:px-md md:pt-16 md:pb-40 lg:px-lg flex flex-col gap-10 md:gap-14">
			<div className="flex flex-col gap-10 md:gap-14 max-w-3xl my-0 mx-auto">
				<div className="flex gap-4 justify-between items-center flex-wrap">
					<h1 className="lg:text-[3.5rem] lg:leading-[5.25rem]">
						{project.name}
					</h1>
					<div className="flex gap-4">
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
				<section className="mt-[-1.5rem] md:mt-[-2.5rem]">
					<Image
						src={project.image}
						alt={`Screenshot of ${project.name} project`}
						className="w-full border border-licorice rounded-sm"
					/>
				</section>
				<section className="flex flex-col gap-4">
					<h2 className="lg:text-[2.5rem] lg:leading-[3.75rem]">Overview</h2>{" "}
					<p>{project.overview}</p>
				</section>
				<section className="flex flex-col gap-4">
					<h2 className="lg:text-[2.5rem] lg:leading-[3.75rem]">
						Key Features
					</h2>{" "}
					<ol className="list-decimal pl-4 flex flex-col gap-2">
						{project.features.map((feature) => (
							<li key={feature.id}>
								<h3 className="inline-block font-bold font-body text-base md:text-lg">
									{feature.name}:
								</h3>{" "}
								<span>{feature.description}</span>
							</li>
						))}
					</ol>
				</section>
				<section className="flex flex-col gap-4">
					<h2 className="lg:text-[2.5rem] lg:leading-[3.75rem]">Tech Stack</h2>
					<ul className="flex flex-wrap gap-4">
						{project.tools.map((tool) => (
							<li key={tool.id}>
								<Tool name={tool.name} icon={tool.icon} />
							</li>
						))}
					</ul>
				</section>
				<section className="flex flex-col gap-4">
					<h2 className="lg:text-[2.5rem] lg:leading-[3.75rem]">
						What I learned
					</h2>
					<p>{project.lessons}</p>
				</section>
			</div>
		</div>
	);
}
