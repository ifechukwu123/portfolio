import { useRouter } from "next/navigation";
import Button from "components/Button";

export default function Contact() {
	const router = useRouter();

	return (
		<section className="px-sm md:px-md lg:px-lg flex flex-col items-center gap-6 md:gap-8 mb-20 md:mb-[7rem] lg:mb-40">
			<h2 className="text-center max-w-lg md:max-w-[44.375rem] lg:max-w-[56.25rem]">
				Looking for a developer who notices the small things?{" "}
				<span>That&apos;s me!!</span>
			</h2>
			<p className="text-justify max-w-[22.375rem] md:max-w-[34rem] lg:max-w-[46.875rem]">
				I have a sharp eye for detail and design, a solid full-stack foundation,
				and a love for learning. I&apos;m excited to collaborate and bring ideas
				to life—and I&apos;m looking for new opportunities to do just that.
			</p>
			<Button onClick={() => router.push("/contact")}>
				let&apos;s connect
			</Button>
		</section>
	);
}
