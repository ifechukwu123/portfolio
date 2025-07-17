import ProjectCard from "@/components/pages/projects/ProjectCard";
import { ProjectsData } from "data/projectsData";

export default function Projects() {
	return (
		<div className="px-sm pt-8 pb-24 md:px-md md:pt-16 md:pb-40 lg:px-lg flex flex-col gap-12">
			<header>
				<h1 className="font-normal uppercase">projects</h1>
				<p>Check out some of my favourite projects.</p>
			</header>

			<ul
				className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
				role="list"
			>
				{ProjectsData.map((project) => (
					<li key={project.id}>
						<ProjectCard
							name={project.name}
							description={project.description}
							iconImage={project.image}
							routeName={project.slug}
							link={project.deployedLink}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
