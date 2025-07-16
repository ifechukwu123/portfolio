import Image, { StaticImageData } from "next/image";

interface IconButtonPropTypes {
	classname?: string;
	onClick: () => void;
	ariaLabel: string;
	icon: StaticImageData;
	iconSize: "small" | "regular";
}

export default function IconButton({
	classname,
	onClick,
	ariaLabel,
	icon,
	iconSize,
}: IconButtonPropTypes) {
	return (
		<button
			className={`p-2.5 ${classname || ""}`}
			onClick={onClick}
			aria-label={ariaLabel}
		>
			<Image
				src={icon}
				alt=""
				aria-hidden="true"
				className={`${
					iconSize == "small"
						? "w-[1.125rem] h-[1.125rem]"
						: "w-[1.5625rem] h-[1.5625rem]"
				} dark:invert`}
			/>
		</button>
	);
}
