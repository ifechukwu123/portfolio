"use client";
import { useRouter } from "next/navigation";
import Button from "components/Button";

export default function Contact() {
	const router = useRouter();

	return (
		<section className="px-sm md:px-md lg:px-lg flex flex-col items-center gap-5 mb-20 md:mb-[7rem] lg:mb-40">
			<h2 className="text-center max-w-[32.5rem] md:max-w-[44rem] lg:max-w-[56.25rem]">
				Looking for a developer who notices the small things?{" "}
				<span className="inline-block">That&apos;s me!!</span>
			</h2>
			<p className="text-center leading-[1.875rem] md:leading-[2.25rem] w-[80vw] md:w-[75vw] max-w-[30.75rem] md:max-w-[36.25rem] lg:max-w-[50rem]">
				I have a sharp eye for detail and design, a solid full-stack foundation,
				and a love for learning. I&apos;m excited to collaborate and bring ideas
				to life—and I&apos;m looking for new opportunities to do just that.
			</p>
			<Button onClick={() => router.push("/contact")} classname="mt-2 md:mt-4">
				let&apos;s connect
			</Button>
		</section>
	);
}
