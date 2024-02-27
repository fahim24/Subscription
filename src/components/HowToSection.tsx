import Card from "../assets/card2.png";
import Event from "../assets/event2.png";
import Cal from "../assets/calender.png";
import { Divider } from "antd";

const HowToSection = () => {
	return (
		<section className="container mx-auto px-5 md:px-10">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-24 py-16">
				<div className="flex  gap-8 text-CDark">
					<h2 className="font-bold text-5xl ">1M+</h2>
					<p className="opacity-70 text-lg">Customers visit Albino every months</p>
				</div>
				<div className="flex gap-8 text-CDark">
					<h2 className="font-bold text-5xl ">93%</h2>
					<p className="opacity-70  text-lg">Satisfaction rate from our customers.</p>
				</div>
				<div className="flex  gap-8 text-CDark">
					<h2 className="font-bold text-5xl ">4.9</h2>
					<p className="opacity-70 text-lg">Average customer ratings out of 5.00!</p>
				</div>
			</div>
			<Divider />
			<div className="py-24 space-y-20">
				<div className="flex flex-col gap-4 items-center w-full md:w-3/4 lg:w-1/2 mx-auto text-CDark">
					<h3 className=" font-bold text-3xl text-center">Manage your projects fast</h3>
					<p className="text-lg text-center opacity-70">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
					<div className="relative h-[200px] md:h-[380px]">
						<img
							src={Card}
							alt=""
							className="absolute top-0 left-0 opacity-80 hover:opacity-100 hover:z-[1] hover:shadow-lg w-1/2 h-[200px] md:h-[380px]"
						/>
						<img
							src={Cal}
							alt=""
							className="absolute right-0 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 hover:z-[1] hover:shadow-lg w-2/5 h-[150px] md:h-[264px]"
						/>
						<img
							src={Event}
							alt=""
							className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-[110px] md:h-[166px] w-2/3 shadow1"
						/>
					</div>
					<div className="space-y-8">
						<div className="flex items-center gap-5">
							<div className="bg-CBlue bg-opacity-10 rounded-full size-10 text-center text-CBlue font-bold py-1.5 shrink-0">
								1
							</div>
							<div className="sapce-y-2 text-CDark">
								<h4 className="text-xl font-bold">Create a project</h4>
								<p className="opacity-70">
									With lots of unique blocks, you can easily build a page without coding.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-5">
							<div className="bg-CBlue bg-opacity-10 rounded-full size-10 text-center text-CBlue font-bold py-1.5 shrink-0">
								2
							</div>
							<div className="space-y-2 text-CDark">
								<h4 className="text-xl font-bold">Assign related people</h4>
								<p className="opacity-70">
									With lots of unique blocks, you can easily build a page without coding.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-5">
							<div className="bg-CBlue bg-opacity-10 rounded-full size-10 text-center text-CBlue font-bold py-1.5 shrink-0">
								3
							</div>
							<div className="space-y-2 text-CDark">
								<h4 className="text-xl font-bold">Make it done on-time</h4>
								<p className="opacity-70">
									With lots of unique blocks, you can easily build a page without coding.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowToSection;
