import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ProjectsData } from "../../data/projectsData";
import styles from "./Projects.module.scss";

export default function Projects() {
	return (
		<div className={styles.projects}>
			<header className={styles.header}>
				<h1 className={styles.header__title}>projects</h1>
				<p>Check out some of my favourite projects.</p>
			</header>

			<ul className={styles.projects__list} role="list">
				{ProjectsData.map((project) => (
					<li key={project.id}>
						<ProjectCard
							name={project.name}
							description={project.description}
							iconImage={project.image}
							routeName={project.slug}
							link={project.deployedLink}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
