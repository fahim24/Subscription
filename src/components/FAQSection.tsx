import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQSection = () => {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2  gap-16">
				<div className="flex gap-5">
					<div className="bg-CGreen rounded-full h-8 w-8 text-center text-white font-bold py-1 shrink-0 translate-y-1/2">
						?
					</div>
					<div className="flex flex-col gap-5 text-white">
						<h4 className="text-xl font-bold">Can I use Albino for my clients?</h4>
						<p className="opacity-70">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
							sagittis interdum Melisandre.
						</p>
						<button className="text-CGreen font-bold flex gap-3 items-center ">
							Click to learn more
							<span>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</button>
					</div>
				</div>
				<div className="flex gap-5">
					<div className="bg-CGreen rounded-full h-8 w-8 text-center text-white font-bold py-1 shrink-0 translate-y-1/2">
						?
					</div>
					<div className="flex flex-col gap-5 text-white">
						<h4 className="text-xl font-bold">Does it work with WordPress?</h4>
						<p className="opacity-70">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
							sagittis interdum Melisandre.
						</p>
					</div>
				</div>
				<div className="flex gap-5">
					<div className="bg-CGreen rounded-full h-8 w-8 text-center text-white font-bold py-1 shrink-0 translate-y-1/2">
						?
					</div>
					<div className="flex flex-col gap-5 text-white">
						<h4 className="text-xl font-bold">Do I get free updates?</h4>
						<p className="opacity-70">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
							sagittis interdum Melisandre.
						</p>
					</div>
				</div>
				<div className="flex gap-5">
					<div className="bg-CGreen rounded-full h-8 w-8 text-center text-white font-bold py-1 shrink-0 translate-y-1/2">
						?
					</div>
					<div className="flex flex-col gap-5 text-white">
						<h4 className="text-xl font-bold">Will you provide support?</h4>
						<p className="opacity-70">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
							sagittis interdum Melisandre.
						</p>
					</div>
				</div>
			</div>
			<p className="text-white text-center mt-16">
				Haven’t got your answer?{" "}
				<a href="#" className="text-CGreen">
					Contact our support now
				</a>
			</p>
		</>
	);
};

export default FAQSection;
