import MenuIcon from "../../public/icons/menu.svg";
import SunIcon from "../../public/icons/sun.svg";
import LogoIcon from "../../public/icons/Logo.svg";

export default function Header() {
	return (
		<header className="px-sm">
			<div className="py-[0.625rem] flex justify-between items-center border-b-2 border-licorice">
				<LogoIcon />
				<div className="flex gap-[1rem]">
					<SunIcon />
					<MenuIcon />
				</div>
			</div>
		</header>
	);
}
