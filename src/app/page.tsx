import About from "components/pages/homepage/About";
import Skills from "@/components/pages/homepage/Skills";
import Contact from "@/components/pages/homepage/Contact";
import Projects from "@/components/pages/homepage/Projects";

export default function Home() {
	return (
		<main className="bg-alabaster dark:bg-licorice flex flex-col gap-[4.5rem] md:gap-24">
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
