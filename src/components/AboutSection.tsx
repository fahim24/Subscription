import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Event from "../assets/event.png";
import U1 from "../assets/user1.png";
import U2 from "../assets/user2.png";
import U3 from "../assets/user3.png";

const AboutSection = () => {
	return (
		<section className="bg-CGray">
			<div className="container mx-auto px-5 md:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
				<div className="flex flex-col  justify-center gap-10 text-CDark text-center lg:text-left w-full lg:w-5/6">
					<h3 className="font-bold text-3xl">Getting started with Albino is easier than ever</h3>
					<p className="text-lg opacity-70">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page so quickly with Albino.
					</p>
					<button className="bg-CBlue text-white font-bold rounded-lg px-5 py-3 flex items-center gap-10 w-fit mx-auto lg:m-0">
						<span>Get started for free</span>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
				<div className="relative h-[250px] md:h-[450px] w-full md:w-[500px] mx-auto">
					<img
						src={Event}
						alt=""
						className="absolute top-0 left-0 opacity-40 hover:opacity-100 hover:z-[1] hover:shadow-lg w-1/2 h-[250px] md:h-[450px]"
					/>
					<img
						src={U2}
						alt=""
						className="absolute right-0 bottom-0 opacity-60 hover:opacity-100 hover:z-[1] hover:shadow-lg w-2/5 h-[120px] md:h-[200px]"
					/>
					<img
						src={U3}
						alt=""
						className="absolute right-0 top-0 opacity-20 hover:opacity-100 hover:z-[1] hover:shadow-lg w-1/3 h-[100px] md:h-[164px]"
					/>

					<img
						src={U1}
						alt=""
						className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2  h-[150px] md:h-[288px] shadow2"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
