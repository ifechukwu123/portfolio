import RightArrowIcon from "../../assets/icons/arrow-right.svg";
import styles from "./Button.module.scss";

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
		<button className={`${styles.button} ${classname}`} onClick={onClick}>
			{children}
			<img src={RightArrowIcon} alt="" aria-hidden="true" />
		</button>
	);
}
