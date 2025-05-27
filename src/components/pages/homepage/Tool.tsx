import Image, { StaticImageData } from "next/image";

interface ToolProps {
	name: string;
	image: StaticImageData;
}

export default function Tool({ name, image }: ToolProps) {
	return (
		<span className="bg-alabaster border border-licorice rounded-md flex flex-row-reverse items-center gap-1 md:gap-2 px-2.5 py-1.5 md:px-3 size-max">
			<span className="dark:text-licorice font-semibold text-sm md:text-base lg:text-base">
				{name}
			</span>
			<Image
				src={image}
				alt=""
				aria-hidden="true"
				className="w-[0.9375.rem] md:w-[1.125rem]"
			/>
		</span>
	);
}
