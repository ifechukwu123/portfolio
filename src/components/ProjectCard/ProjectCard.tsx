import { Link } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import externalLinkIcon from "../../assets/icons/launch.svg";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
	name: string;
	description: string;
	iconImage: string;
	routeName: string;
	// colour: string;    //Add colour for different projects. Maybe on hover.
	link?: string;
}

export default function ProjectCard({
	name,
	description,
	iconImage,
	routeName,
	link,
}: ProjectCardProps) {
	return (
		<Link to={`/projects/${routeName}`} className={styles["card-link"]}>
			<article className={styles.card}>
				<img
					src={iconImage}
					alt={`${name} Logo`}
					className={styles.card__image}
				/>
				<div className={styles.card__info}>
					<h2 className={styles.card__name}>{name}</h2>
					<p className={styles.card__description}>{description}</p>
				</div>
				{link && (
					<IconButton
						classname={styles.card__button}
						onClick={() => {
							window.open(link, "_blank");
						}}
						ariaLabel={`Open ${name} project in new tab`}
						icon={externalLinkIcon}
						iconSize="small"
					/>
				)}
			</article>
		</Link>
	);
}
