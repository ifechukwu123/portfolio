import Image from "next/image";
import projectImage from "/public/images/project.png";
import typescriptIcon from "/public/icons/tools/typescript.svg?url";
import javascriptIcon from "/public/icons/tools/javascript.svg?url";
import reactIcon from "/public/icons/tools/react.svg?url";
import nextjsIcon from "/public/icons/tools/nextjs.svg?url";
import tailwindIcon from "/public/icons/tools/tailwind.svg?url";
import nodejsIcon from "/public/icons/tools/nodejs.svg?url";
import Link from "next/link";

export default function ProjectList() {
	return (
		<ul
			role="list"
			className="flex flex-col gap-24 items-center *:flex *:flex-col *:items-center *:gap-4"
		>
			<li role="listitem">
				<Link
					href="/projects/system_of_silk"
					className="border border-licorice rounded-md w-[75vw] max-w-[25rem] aspect-square text-center flex flex-col h-full"
				>
					<Image
						src={projectImage}
						alt="Snapshot of the System of Silk project"
						className="flex-1 rounded-t-md"
					/>
					<h3 className="py-3 border-t border-licorice flex-shrink-0">
						System of Silk
					</h3>
				</Link>
				<div className="*:w-5 flex gap-2">
					{/* Add tooltip */}
					<Image src={typescriptIcon} alt="Typescript" />
					<Image src={nextjsIcon} alt="Nextjs" />
					<Image src={tailwindIcon} alt="Tailwind" />
					<Image src={nodejsIcon} alt="Nodejs" />
				</div>
			</li>
			<li role="listitem">
				<Link
					href="/projects/beauty_bin"
					className="border border-licorice rounded-md w-[75vw] max-w-[25rem] aspect-square text-center flex flex-col h-full"
				>
					<Image
						src={projectImage}
						alt="Snapshot of the System of Silk project"
						className="flex-1 rounded-t-md"
					/>
					<h3 className="py-3 border-t border-licorice flex-shrink-0">
						Beauty Bin
					</h3>
				</Link>
				<div className="*:w-5 flex gap-2">
					<Image src={javascriptIcon} alt="Javascript" />
					<Image src={reactIcon} alt="React" />
					<Image src={nodejsIcon} alt="Nodejs" />
				</div>
			</li>
			<li role="listitem">
				<Link
					href="/projects/instock"
					className="border border-licorice rounded-md w-[75vw] max-w-[25rem] aspect-square text-center flex flex-col h-full"
				>
					<Image
						src={projectImage}
						alt="Snapshot of the System of Silk project"
						className="flex-1 rounded-t-md"
					/>
					<h3 className="py-3 border-t border-licorice flex-shrink-0">
						Instock
					</h3>
				</Link>
				<div className="*:w-5 flex gap-2">
					<Image src={javascriptIcon} alt="Javascript" />
					<Image src={reactIcon} alt="React" />
					<Image src={nodejsIcon} alt="Nodejs" />
				</div>
			</li>
		</ul>
	);
}
