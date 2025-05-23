import Image from "next/image";
import RightArrowIcon from "/public/icons/arrow-right.svg?url";

interface ButtonPropTypes {
	onClick: () => void;
	children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonPropTypes) {
	return (
		<button
			className="px-3 py-2 md:px-4 md:py-3 flex gap-4 items-center bg-apple-green border border-licorice rounded-sm uppercase text-base md:text-lg lg:text-lg"
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
