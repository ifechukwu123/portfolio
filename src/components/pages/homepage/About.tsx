"use client";
import { useRouter } from "next/navigation";
import SmileIcon from "../../../../public/icons/smiling-emoji.svg?url";
import Image from "next/image";
import profilePic from "../../../../public/images/profile.png";
import profilePicDark from "../../../../public/images/profile-dark.png";
import Button from "@/components/ui/Button";
import { useTheme } from "context/ThemeProvider";

export default function About() {
	const router = useRouter();
	const { theme } = useTheme();

	return (
		<section className="px-sm md:px-[12%] py-[2rem] md:py-[3rem] lg:py-[4rem] h-[calc(100vh-4.4375rem)] md:h-[calc(100vh-4.6875rem)] lg:h-[calc(100vh-5.5rem)] min-h-[35.625rem] md:min-h-[30rem] flex flex-col-reverse md:flex-row justify-center md:justify-around items-center gap-4 md:gap-10 lg:gap-12">
			<div className="flex-1 flex flex-col gap-6 md:gap-9 md:flex-1 md:max-w-[31.5625rem]">
				<div className="flex flex-col items-center md:items-start md:gap-4">
					<h1 className="capitalize flex items-baseline gap-1 md:gap-2 font-semibold text-[3.5rem] leading-[5.25rem] md:text-[4.5rem] md:leading-[6.75rem] lg:text-[6rem] lg:leading-[9rem]">
						<span>hello!</span>{" "}
						<Image
							src={SmileIcon}
							alt="smiling face emoji"
							className="w-[1.5625rem] md:w-[1.9375rem] lg:w-[2.875rem] dark:invert"
						/>
					</h1>
					<p className="px-2 md:px-0 max-w-[22.25rem] md:max-w-[31.5625rem] text-center text-[1.125rem] leading-[1.75rem] md:text-xl md:leading-[2.5rem] lg:text-2xl lg:leading-[3rem] md:text-left md:mt-[-1rem]">
						I&#39;m Ife, a full-stack software developer with a simple yet
						powerful approach:{" "}
						<span className="inline-block italic capitalize text-rose-red">
							impact matters more than intent
						</span>
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
				src={theme === "light" ? profilePic : profilePicDark}
				alt="A picture of me, Ife!"
				className="flex-1 object-contain h-12 md:h-auto w-auto md:w-full md:max-h-full"
			/>
		</section>
	);
}
