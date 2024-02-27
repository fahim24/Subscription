import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faLinkedin,
	faSquareFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "antd";

const Footer = () => {
	return (
		<section className="container mx-auto px-5 md:px-10">
			<div className="py-16 flex flex-col lg:flex-row justify-between gap-y-10">
				<div className="text-CDark basis-1/2 space-y-5">
					<h2 className="text-3xl font-bold text-center md:text-left">
						Build better landing page fast
					</h2>
					<p className="text-lg opacity-70 text-center md:text-left">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-5">
					<button className="bg-CBlue bg-opacity-10 text-CBlue font-bold rounded-lg px-4 py-3 flex items-center gap-10 order-2 md:order-1">
						<span>Learn more</span>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
					<button className="bg-CBlue text-white font-bold rounded-lg px-4 py-3 flex items-center gap-10 order-1 md:order-2">
						<span>Get it now</span>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>
			<Divider />
			<div className="py-24 flex flex-col lg:flex-row justify-between gap-y-10">
				<div className="space-y-8 text-CDark basis-1/4 order-2 lg:order-1">
					<h3 className="text-2xl font-bold text-center md:text-left">Brainwave.io</h3>
					<p className="opacity-70 text-center md:text-left">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
					<div className="flex justify-center md:justify-start gap-5">
						<a href="https://www.twitter.com" className=" hover:text-CBlue">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href="https://www.facebook.com" className=" hover:text-CBlue">
							<FontAwesomeIcon icon={faSquareFacebook} />
						</a>
						<a href="https://www.instagram.com" className=" hover:text-CBlue">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href="https://www.linkedin.com" className=" hover:text-CBlue">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-8 order-1 lg:order-2">
					<div className="flex flex-col items-center md:items-start text-center md:text-left text-CDark gap-5">
						<h6 className="opacity-70">Company</h6>
						<ul className="space-y-1">
							<li>
								<a href="#" className="hover:text-CBlue">
									About us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									Contact us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									Press
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-center md:items-start text-center md:text-left text-CDark gap-5">
						<h6 className="opacity-70">Product</h6>
						<ul className="space-y-1">
							<li>
								<a href="#" className="hover:text-CBlue">
									Features
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									Pricing
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									News
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									Help desk
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									Support
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-center md:items-start text-center md:text-left text-CDark gap-5">
						<h6 className="opacity-70">Services</h6>
						<ul className="space-y-1">
							<li>
								<a href="#" className="hover:text-CBlue">
									Digital Marketing
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									Content Writing
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									SEO for Business
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									UI Design
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-center md:items-start text-center md:text-left text-CDark gap-5">
						<h6 className="opacity-70">Legal</h6>
						<ul className="space-y-1">
							<li>
								<a href="#" className="hover:text-CBlue">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									Terms & Conditions
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-CBlue">
									Return Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
