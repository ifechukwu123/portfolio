import styles from "./Tool.module.scss";

interface ToolProps {
	name: string;
	icon: string;
}

export default function Tool({ name, icon }: ToolProps) {
	//Add tooltip for the skills
	return (
		<span className={styles.tool}>
			<span className={styles.title}>{name}</span>
			<img src={icon} alt="" aria-hidden="true" />
		</span>
	);
}
