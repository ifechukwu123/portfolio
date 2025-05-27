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
		<section>
			<h2 className="font-body uppercase text-xl font-bold mb-2 px-sm md:hidden">
				what i work with
			</h2>
			<div className="py-6 md:py-0 bg-black-bean md:flex items-center">
				<h2 className="hidden md:block font-body text-alabaster uppercase text-2xl leading-[2.25rem] font-bold pl-12 pr-sm py-sm lg:py-10 lg:pl-lg lg:pr-6 border-r-2 border-alabaster w-[13.75rem] shrink-0 lg:size-max">
					what i work with
				</h2>
				<ul role="list" className="flex gap-4 overflow-scroll md:pl-sm lg:pl-6">
					{skills.map((skill) => (
						<li key={skill.id} role="listitem">
							<Tool name={skill.name} image={skill.image} />
						</li>
					))}
				</ul>

				<ul role="list" className="flex gap-4 overflow-scroll mt-6 md:hidden">
					{skills.map((skill) => (
						<li key={skill.id} role="listitem">
							<Tool name={skill.name} image={skill.image} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
