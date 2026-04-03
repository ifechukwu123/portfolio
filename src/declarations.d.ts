//defines the type for "styles" used in classnames
declare module "*.module.scss" {
	const styles: { [className: string]: string };
	export default styles;
}
