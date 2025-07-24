import Image, { StaticImageData } from "next/image";

interface ToolProps {
	name: string;
	icon: StaticImageData;
}

export default function Tool({ name, icon }: ToolProps) {
	//Add tooltip for the skills
	return (
		<span className="bg-alabaster border border-licorice rounded-md flex flex-row-reverse items-center gap-1 md:gap-2 px-2.5 py-1.5 md:px-3 size-max">
			<span className="dark:text-licorice font-semibold text-sm md:text-base lg:text-base">
				{name}
			</span>
			<Image
				src={icon}
				alt=""
				aria-hidden="true"
				className="w-[0.9375rem] md:w-[1.125rem]"
			/>
		</span>
	);
}
