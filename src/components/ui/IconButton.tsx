import Image, { StaticImageData } from "next/image";

interface IconButtonPropTypes {
	classname?: string;
	onClick: () => void;
	ariaLabel: string;
	icon: StaticImageData;
}

export default function Button({
	classname,
	onClick,
	ariaLabel,
	icon,
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
				className="w-[1.5625rem] h-[1.5625rem] dark:invert"
			/>
		</button>
	);
}
