import styles from "./IconButton.module.scss";

interface IconButtonPropTypes {
	classname?: string;
	onClick: () => void;
	ariaLabel: string;
	icon: string;
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
			className={`${styles.button} ${classname || ""}`}
			onClick={onClick}
			aria-label={ariaLabel}
		>
			<img
				src={icon}
				alt=""
				aria-hidden="true"
				className={`${iconSize == "small" ? styles.small : styles.regular}`}
			/>
		</button>
	);
}
