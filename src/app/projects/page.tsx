import BeautyBinIcon from "/public/images/project.png";
import ProjectCard from "@/components/pages/projects/ProjectCard";

export default function Projects() {
	return (
		<main className="bg-alabaster dark:bg-licorice min-h-[calc(100vh-4.4375rem)] px-sm pt-8 pb-16 flex flex-col gap-12">
			<header>
				<h1 className="font-normal uppercase">projects</h1>
				<p>Check out some of my favourite projects.</p>
			</header>

			<div className="flex flex-col gap-8">
				<ProjectCard
					name="Beauty Bin"
					description="Funsies"
					iconImage={BeautyBinIcon}
					link="https://fonts.google.com/"
				/>
				<ProjectCard
					name="Beauty Bin"
					description="Funsies"
					iconImage={BeautyBinIcon}
					link="https://fonts.google.com/"
				/>
			</div>
		</main>
	);
}
