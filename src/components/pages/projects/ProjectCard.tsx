"use client";
import Image, { StaticImageData } from "next/image";
import externalLinkIcon from "/public/icons/launch.svg?url";
import IconButton from "@/components/ui/IconButton";
import Link from "next/link";

interface ProjectCardProps {
	name: string;
	description: string;
	iconImage: StaticImageData;
	routeName: string;
	// colour: string;    //Add colour for different projects. Maybe on hover.
	link?: string;
}

export default function ProjectCard({
	name,
	description,
	iconImage,
	routeName,
	link,
}: ProjectCardProps) {
	return (
		<Link href={`/projects/${routeName}`} className="group">
			<article className="p-4 border border-licorice rounded-[0.5rem] flex gap-4 items-center relative">
				<Image
					src={iconImage}
					alt={`Icon for ${name} project`}
					className="w-[3.75rem] h-[3.75rem] border border-licorice rounded-[0.5rem]"
				/>
				<div className="flex flex-col gap-1">
					<h2 className="text-2xl">{name}</h2>
					<p className="text-base">{description}</p>
				</div>
				{link && (
					<IconButton
						classname="hidden group-hover:block absolute top-0 right-0"
						onClick={() => {
							window.open(link, "_blank");
						}}
						ariaLabel={`Open ${name} project in new tab`}
						icon={externalLinkIcon}
						iconSize="small"
					/>
				)}
			</article>
		</Link>
	);
}
