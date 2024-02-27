import FAQSection from "./FAQSection";

const PriceSection = () => {
	return (
		<section className="bg-CDark">
			<div className="container mx-auto px-5 md:px-10 py-20 space-y-20">
				<div className="flex flex-col gap-4 items-center w-full md:w-3/4 lg:w-1/2 mx-auto">
					<p className="text-white font-bold text-3xl ">Pricing & Plans</p>
					<h3 className="text-white text-lg text-center opacity-70">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</h3>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="bg-white rounded-lg border border-solid border-CLine p-4 flex flex-col gap-10 items-center">
						<div className="bg-CBlue bg-opacity-10 px-5 py-2 rounded-full text-xs font-bold text-CBlue uppercase">
							Basic
						</div>
						<div className="space-y-3 text-center text-CDark">
							<h3 className="font-bold text-5xl">$29</h3>
							<p className="opacity-70">One time purchase</p>
						</div>
						<p className="text-CDark text-center">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page.
						</p>
						<button className="hover:opacity-90 bg-CBlue w-full text-white font-bold rounded-lg px-4 py-3 justify-end">
							Get started for free
						</button>
					</div>

					<div className="bg-white rounded-lg border border-solid border-CLine p-4 flex flex-col gap-10 items-center">
						<div className="bg-CBlue bg-opacity-10 px-5 py-2 rounded-full text-xs font-bold text-CBlue uppercase">
							Standard
						</div>
						<div className="space-y-3 text-center text-CDark">
							<h3 className="font-bold text-5xl">$49</h3>
							<p className="opacity-70">One time purchase</p>
						</div>
						<p className="text-CDark text-center">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page.
						</p>
						<button className="hover:opacity-90 bg-CBlue w-full text-white font-bold rounded-lg px-4 py-3 justify-end">
							Get started for free
						</button>
					</div>
					<div className="bg-white rounded-lg border border-solid border-CLine p-4 flex flex-col gap-10 items-center">
						<div className="bg-CBlue bg-opacity-10 px-5 py-2 rounded-full text-xs font-bold text-CBlue uppercase">
							Premium
						</div>
						<div className="space-y-3 text-center text-CDark">
							<h3 className="font-bold text-5xl">$99</h3>
							<p className="opacity-70">One time purchase</p>
						</div>
						<p className="text-CDark text-center">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page.
						</p>
						<button className="hover:opacity-90 bg-CBlue w-full text-white font-bold rounded-lg px-4 py-3 justify-end">
							Get started for free
						</button>
					</div>
				</div>

				<FAQSection />
			</div>
		</section>
	);
};

export default PriceSection;
