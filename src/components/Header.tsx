import MenuIcon from "../../public/icons/menu.svg";
import SunIcon from "../../public/icons/sun.svg";
import MobileLogo from "../../public/logo/mobileLogo.svg";
import Logo from "../../public/logo/logo.svg";

export default function Header() {
	return (
		<header className="px-sm">
			<div className="py-[0.625rem] flex justify-between items-center border-b-2 border-licorice">
				<MobileLogo className="md:hidden" />
				<div className="hidden md:block">
					<Logo />
					<span className="text-licorice/50 capitalize ">
						software developer{" "}
						<span className="text-apple-green italic">+ dreamer</span>
					</span>
				</div>

				<nav aria-label="Main" className="hidden md:block">
					<ul role="list" className="flex capitalize gap-[1.25rem]">
						<li>projects</li>
						<li>about</li>
						<li>contact</li>
						<li>resume</li>
					</ul>
				</nav>

				<div className="flex gap-[1rem]">
					<SunIcon />
					<MenuIcon className="md:hidden" />
				</div>
			</div>
		</header>
	);
}
