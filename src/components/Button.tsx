import RightArrowIcon from "../../public/icons/arrow-right.svg";

interface ButtonPropTypes {
	children: React.ReactNode;
}

export default function Button({ children }: ButtonPropTypes) {
	return (
		<button>
			{children} <RightArrowIcon />
		</button>
	);
}
