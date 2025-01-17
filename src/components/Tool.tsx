interface ToolProps {
	children: React.ReactNode;
	name: string;
}

export default function Tool({ children, name }: ToolProps) {
	return (
		<div>
			{children} {name}
		</div>
	);
}
