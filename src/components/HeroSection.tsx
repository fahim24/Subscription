import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "antd";

import Browser from "../assets/browser.png";

const HeroSection = () => {
	return (
		<section className="container mx-auto px-5 md:px-10 py-24">
			<div className="flex flex-col gap-10 items-center w-full md:w-3/4 lg:w-2/3 mx-auto text-CDark">
				<h1 className=" font-bold text-4xl md:text-5xl text-center">
					Get things done by awesome remote team
				</h1>
				<p className="text-lg text-center opacity-70 w-5/6">
					We share common trends and strategies for improving your rental income and making sure you
					stay in high demand.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-5">
					<button className="bg-CBlue text-white font-bold rounded-lg px-4 py-3 flex items-center gap-10 hover:opacity-90">
						<span>Get started for free</span>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
					<button className=" hover:text-CBlue text-CDark font-bold rounded-lg px-4 py-3 flex items-center gap-10">
						Learn more
					</button>
				</div>
			</div>
			<div className="w-full md:w-3/4 mx-auto mt-20 shadow3 rounded-lg">
				<Image src={Browser} height={"100%"} width={"100%"} className="rounded-lg" />
			</div>
		</section>
	);
};

export default HeroSection;
