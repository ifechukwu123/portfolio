import RightArrowIcon from "../../public/icons/arrow-right.svg";

interface ButtonPropTypes {
	children: React.ReactNode;
}

export default function Button({ children }: ButtonPropTypes) {
	return (
		<button className="p-[0.625rem] flex items-center gap-[1.25rem] rounded-sm bg-apple-green border-[1px] border-licorice uppercase">
			{children} <RightArrowIcon />
		</button>
	);
}
