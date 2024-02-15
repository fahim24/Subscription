import Code from "../assets/code.svg";
import Time from "../assets/time.svg";
import Mob from "../assets/mobile.svg";

const FeatureSection = () => {
	return (
		<section className="container mx-auto px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-20">
			<div className="flex flex-col items-start gap-5 text-CDark">
				<img src={Code} alt="" className="h-10" />
				<h5 className="text-xl font-bold">Project management</h5>
				<p className="opacity-70">
					With lots of unique blocks, you can easily build a page without coding. Build your next
					landing page.
				</p>
			</div>
			<div className="flex flex-col items-start gap-5 text-CDark">
				<img src={Time} alt="" className="h-10" />
				<h5 className="text-xl font-bold">Time tracking</h5>
				<p className="opacity-70">
					With lots of unique blocks, you can easily build a page without coding. Build your next
					landing page.
				</p>
			</div>
			<div className="flex flex-col items-start gap-5 text-CDark">
				<img src={Mob} alt="" className="h-10" />
				<h5 className="text-xl font-bold">Beautiful mobile app</h5>
				<p className="opacity-70">
					With lots of unique blocks, you can easily build a page without coding. Build your next
					landing page.
				</p>
			</div>
		</section>
	);
};

export default FeatureSection;
