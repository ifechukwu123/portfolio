import RightArrowIcon from "../../public/icons/arrow-right.svg";

interface ButtonPropTypes {
	onClick: () => void;
	children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonPropTypes) {
	return (
		<button
			className="w-max p-[0.625rem] flex items-center gap-[1.25rem] rounded-sm bg-apple-green border-[1px] border-licorice uppercase"
			onClick={onClick}
		>
			{children} <RightArrowIcon />
		</button>
	);
}
