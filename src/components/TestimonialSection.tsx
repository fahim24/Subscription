import P1 from "../assets/person1.png";
import P2 from "../assets/person2.png";
const TestimonialSection = () => {
	return (
		<section className="bg-CGray">
			<div className="container mx-auto px-5 md:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div className="px-0 md:px-20 flex flex-col items-center gap-10 text-CDark text-center">
					<div>
						<img src={P1} alt="" className="object-cover rounded-full" />
					</div>
					<q className="text-2xl font-bold">You made it so simple</q>
					<p className="opacity-70 text-lg">
						My new site is so much faster and easier to work with than my old site.
					</p>
					<div className="flex flex-col gap-2">
						<p className="font-bold">Corey Valdez</p>
						<p className="opacity-70 text-sm">Founder at Zenix</p>
					</div>
				</div>
				<div className="px-0 md:px-20 flex flex-col items-center gap-10 text-CDark text-center">
					<div>
						<img src={P2} alt="" className="object-cover rounded-full" />
					</div>
					<q className="text-2xl font-bold">Simply the best</q>
					<p className="opacity-70 text-lg">
						Better than all the rest. I’d recommend this product to beginners.
					</p>
					<div className="flex flex-col gap-2">
						<p className="font-bold">Ian Klein</p>
						<p className="opacity-70 text-sm">Digital Marketer</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialSection;
