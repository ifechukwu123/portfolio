import reactIcon from "/public/icons/tools/react.svg?url";
import figmaIcon from "/public/icons/tools/figma.svg?url";
import gitIcon from "/public/icons/tools/git.svg?url";
import githubIcon from "/public/icons/tools/github.svg?url";
import htmlIcon from "/public/icons/tools/html5.svg?url";
import javascriptIcon from "/public/icons/tools/javascript.svg?url";
import nextjsIcon from "/public/icons/tools/nextjs.svg?url";
import nodejsIcon from "/public/icons/tools/nodejs.svg?url";
import pythonIcon from "/public/icons/tools/python.svg?url";
import tailwindIcon from "/public/icons/tools/tailwind.svg?url";
import typescriptIcon from "/public/icons/tools/typescript.svg?url";
import Tool from "@/components/pages/homepage/Tool";

const skills = [
	{ id: 1, name: "React", image: reactIcon },
	{ id: 2, name: "HTML5", image: htmlIcon },
	{ id: 3, name: "Javascript", image: javascriptIcon },
	{ id: 4, name: "Github", image: githubIcon },
	{ id: 5, name: "Typescript", image: typescriptIcon },
	{ id: 6, name: "Git", image: gitIcon },
	{ id: 7, name: "Next.js", image: nextjsIcon },
	{ id: 8, name: "Tailwind", image: tailwindIcon },
	{ id: 9, name: "Node.js", image: nodejsIcon },
	{ id: 10, name: "Python", image: pythonIcon },
	{ id: 11, name: "Figma", image: figmaIcon },
];

export default function Skills() {
	return (
		<section className="mt-[-2rem] md:mt-0 md:flex">
			<h2 className="font-bold uppercase text-xl mb-2 md:mb-0 px-sm md:pl-12 md:pr-sm md:py-sm lg:py-10 lg:pl-lg lg:pr-6 md:bg-black-bean md:text-alabaster md:text-2xl md:leading-[2.25rem] md:border-r-2 md:border-alabaster md:w-[14.375rem] md:shrink-0 lg:size-max ">
				what i work with
			</h2>
			<div className="group py-6 md:py-0 bg-black-bean overflow-hidden md:flex md:items-center">
				<ul
					role="list"
					className="flex gap-4 md:pl-sm lg:pl-6 w-max motion-safe:animate-marquee group-hover:motion-safe:[animation-play-state:paused]"
				>
					{/* Duplicate for marquee animation */}
					{[...skills, ...skills].map((skill, index) => (
						<li key={`${skill.id}-${index}`}>
							<Tool name={skill.name} image={skill.image} />
						</li>
					))}
					{/* What happens if the user doesn't like animation? */}
				</ul>
			</div>
		</section>
	);
}
