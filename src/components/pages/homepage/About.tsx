"use client";
import { useRouter } from "next/navigation";
import SmileIcon from "/public/icons/smiling-emoji.svg?url";
import Image from "next/image";
import profilePic from "/public/images/profile.jpg";
import Button from "components/Button";

export default function About() {
	const router = useRouter();

	return (
		<section className="px-sm py-[2rem] md:px-md lg:px-lg h-[calc(100dvh-4.4375rem)] md:h-[calc(100vh-5.4375rem)] flex flex-col-reverse md:flex-row justify-center items-center gap-4 md:gap-4 lg:gap-24">
			<div className="flex flex-col gap-6 md:gap-9 md:flex-1 md:max-w-[31.25rem]">
				<div className="flex-1 flex flex-col items-center md:items-start">
					<h1 className="capitalize flex items-baseline gap-1 md:gap-2">
						<span>hello!</span>{" "}
						<Image
							src={SmileIcon}
							alt="smiling face emoji"
							className="w-[1.5625rem] md:w-[2.75rem] dark:invert"
						/>
					</h1>
					<p className="px-2 mt-[-0.5rem] max-w-[22.25rem] md:max-w-[31.25rem] text-center leading-[1.75rem] text-[1.125rem] md:text-2xl md:text-left md:leading-[2.5rem]">
						I&#39;m Ife, a full-stack software developer with a simple yet
						powerful approach: &ldquo;
						<span className="italic capitalize text-rose-red">
							impact matters more than intent
						</span>{" "}
						&rdquo;
					</p>
				</div>

				<Button
					classname="self-center md:self-start"
					onClick={() => router.push("/about")}
				>
					get to know me
				</Button>
			</div>
			<Image
				src={profilePic}
				alt="A picture of me, Ife!"
				className="flex-1 w-auto md:flex-1 md:max-w-[20.625rem]"
			/>
		</section>
	);
}
