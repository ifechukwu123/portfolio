import SmileIcon from "/public/icons/smile-shape.svg";
//import Logo from "./Logo";
import HeartIcon from "/public/icons/heart.svg";

export default function Footer() {
	return (
		<footer>
			<div>
				<ul>
					<li>home</li>
					<li>projects</li>
					<li>about</li>
					<li>get in touch</li>
				</ul>
				<div>
					<span>
						send me a message <SmileIcon />
					</span>
					<ul>
						<li>Github</li>
						<li>Link</li>
					</ul>
				</div>
			</div>
			<div>
				{/* <Logo /> */}
				<div>
					<span>
						made with <HeartIcon /> by <span>ife onuorah</span>
					</span>
					<span>©2025, Ife Onuorah</span>
				</div>
			</div>
		</footer>
	);
}
