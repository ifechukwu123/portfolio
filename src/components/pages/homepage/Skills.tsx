import ReactIcon from "/public/icons/tools/react.svg";
import Tool from "@/components/pages/homepage/Tool";

export default function Skills() {
	return (
		<section>
			<h2 className="font-body uppercase text-xl font-bold">
				what i work with
			</h2>
			<Tool name="react">
				<ReactIcon />
			</Tool>
		</section>
	);
}
