import Image from "next/image";
import RightArrowIcon from "../../../public/icons/arrow-right.svg?url";

interface ButtonPropTypes {
	classname?: string;
	onClick: () => void;
	children: React.ReactNode;
}

export default function Button({
	classname,
	onClick,
	children,
}: ButtonPropTypes) {
	return (
		<button
			className={`px-3 py-2 flex gap-4 items-center bg-apple-green border border-licorice rounded-sm uppercase text-base dark:text-licorice md:text-lg lg:text-lg ${classname}`}
			onClick={onClick}
		>
			{children}{" "}
			<Image
				src={RightArrowIcon}
				alt=""
				aria-hidden="true"
				className="md:w-[1.125rem]"
			/>
		</button>
	);
}
