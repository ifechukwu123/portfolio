import SmileIcon from "/public/icons/smile-shape.svg?url";
import HeartIcon from "/public/icons/heart.svg?url";
import emailIcon from "/public/icons/socials/envelope.svg?url";
import linkedinIcon from "/public/icons/socials/linkedin.svg?url";
import websiteIcon from "/public/icons/socials/link.svg?url";
import githubIcon from "/public/icons/socials/github.svg?url";
import instaIcon from "/public/icons/socials/instagram.svg?url";
import Logo from "/public/logo/tablet-dark.svg?url";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="px-sm py-6 md:px-md bg-black-bean text-alabaster text-sm md:text-base">
			{/* footer wrapper */}
			<div className="flex flex-col gap-6">
				{/* Links */}
				<div className="md:flex md:justify-between md:items-center">
					<Link href="/" className="hidden md:block">
						<Image
							src={Logo}
							alt="Logo for Ife Onuorah"
							className="w-[22.5rem]"
						/>
					</Link>

					<div className="flex justify-between items-center md:gap-4">
						{/* navigation */}
						<nav aria-label="Secondary">
							<ul
								role="list"
								className="capitalize flex flex-col gap-2 md:px-4 md:border-r md:border-alabaster md:text-center"
							>
								<li className="hover:underline">
									<Link href="/" className="block py-1">
										home
									</Link>
								</li>
								<li className="hover:underline">
									<Link href="/projects" className="block py-1">
										projects
									</Link>
								</li>
								<li className="hover:underline">
									<Link href="/about" className="block py-1">
										about
									</Link>
								</li>
								<li className="hover:underline">
									<Link href="contact" className="block py-1">
										contact
									</Link>
								</li>
							</ul>
						</nav>

						{/* socials */}
						<div className="flex flex-col items-center gap-2">
							<span className="flex gap-2">
								<span>Send me a message</span>{" "}
								<Image src={SmileIcon} alt="Smiling face emoji" />
							</span>
							<ul role="list" className="flex gap-2">
								<li>
									<a href="mailto:ifeonuorah@gmail.com">
										<Image src={emailIcon} alt="Send an email" />
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/ifeonuorah/"
										target="_blank"
									>
										<Image
											src={linkedinIcon}
											alt="Connect with me on LinkedIn"
										/>
									</a>
								</li>
								<li>
									<a
										href="https://www.github.com/ifechukwu123/"
										target="_blank"
									>
										<Image src={githubIcon} alt="Check out my github" />
									</a>
								</li>
								<li>
									<a href="http://ifeonuorah.com/">
										<Image src={websiteIcon} alt="Visit my website" />
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com/berrifantasyyyy/"
										target="_blank"
									>
										<Image src={instaIcon} alt="Follow me on Instagram" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* metadata */}
				<div className="flex flex-col gap-1">
					<Link href="/" className="md:hidden">
						<Image src={Logo} alt="Logo for Ife Onuorah" className="w-full" />
					</Link>
					<div className="pt-4 border-t border-alabaster border-dashed flex justify-between text-[0.625rem] leading-[0.9375rem] md:text-[0.8125rem] md:leading-[1.2188rem]">
						<span className="flex gap-1 items-center">
							Made with{" "}
							<span className="hidden md:block">
								lots and lots and lots...of
							</span>{" "}
							<Image src={HeartIcon} alt="love" /> by <span>Ife Onuorah</span>
						</span>
						<span>© 2025, Ife Onuorah</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
