import { useRouter } from "next/navigation";
import SmileIcon from "/public/icons/smiling-emoji.svg?url";
import Image from "next/image";
import profilePic from "/public/images/profile.jpg";
import Button from "components/Button";

export default function About() {
	const router = useRouter();

	return (
		<section className="px-sm h-[calc(100vh-5.1875rem)] flex flex-col-reverse justify-center items-center">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col items-center">
					<h1 className="capitalize flex items-baseline gap-1">
						<span>hello!</span>{" "}
						<Image
							src={SmileIcon}
							alt="smiling face emoji"
							className="w-[1.875rem] dark:invert"
						/>
					</h1>
					<p className="w-4/5 max-w-[28.5rem] text-center leading-[1.875rem]">
						I&#39;m Ife Onuorah, a full-stack software developer with a simple
						yet powerful approach: &ldquo;{" "}
						<span className="italic capitalize text-rose-red">
							impact matters more than intent
						</span>{" "}
						&rdquo;
					</p>
				</div>

				<Button classname="self-center" onClick={() => router.push("/about")}>
					get to know me
				</Button>
			</div>
			<Image
				src={profilePic}
				alt="A picture of me, Ife Onuorah!"
				className=""
			/>
		</section>
	);
}
