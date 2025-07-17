import { StaticImageData } from "next/image";
import projectImage from "/public/images/project.png";

interface Project {
	name: string;
	slug: string; //for dynamic routing
	description: string;
	githubLink?: string;
	deployedLink?: string;
	image: StaticImageData;
}

export const Projects: Project[] = [
	{
		name: "System of Silk",
		slug: "system_of_silk",
		description:
			"Access exclusive workout videos, create custom playlists, and follow the unique boxing fitness method by Michael 'Silk' Olajide Jr.",
		deployedLink: "https://systemofsilk.com/",
		image: projectImage,
	},
	{
		name: "Beauty Bin",
		slug: "beauty_bin",
		description: "Track expiration date of makeup products",
		githubLink: "https://github.com/ifechukwu123/beauty-bin",
		image: projectImage,
	},
	{
		name: "Instock",
		slug: "instock",
		description: "Full-Stack inventory management system",
		githubLink: "https://github.com/ifechukwu123/InStock",
		image: projectImage,
	},
];
