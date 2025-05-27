interface ToolProps {
	name: string;
	children: React.ReactNode;
}

export default function Tool({ children, name }: ToolProps) {
	return (
		<div>
			{children} {name}
		</div>
	);
}
