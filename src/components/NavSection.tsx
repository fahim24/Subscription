import { useState } from "react";

const NavSection = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		const nav = document.getElementById("navMenu");
		console.log("click");

		if (!isOpen) {
			nav?.classList.remove("hidden");
			nav?.classList.add("flex");

			setIsOpen((prevIsLang) => !prevIsLang);
		} else {
			nav?.classList.remove("flex");
			nav?.classList.add("hidden");

			setIsOpen((prevIsLang) => !prevIsLang);
		}
	};

	const resetMenu = () => {
		const nav = document.getElementById("navMenu");

		if (isOpen) {
			nav?.classList.remove("flex");
			nav?.classList.add("hidden");

			setIsOpen((prevIsLang) => !prevIsLang);
		}
	};
	return (
		<nav className="px-5 md:px-20 w-full flex flex-col lg:flex-row items-center gap-x-20 gap-y-10 py-1">
			<div className="flex w-full lg:w-auto items-center justify-between">
				<a href="#" onClick={resetMenu} title="Go to home">
					<h2 className="text-CDark font-bold text-2xl">Brainwave.io</h2>
				</a>
				<button
					className="block lg:hidden bg-CBlue text-white font-bold rounded-lg  py-3 px-4"
					title="Open/Close nav menu"
					onClick={toggleMenu}
				>
					Menu
				</button>
			</div>
			<div
				id="navMenu"
				className="hidden lg:flex flex-col lg:flex-row w-full justify-between items-center gap-x-10 gap-y-5"
			>
				<div className="flex flex-col lg:flex-row gap-x-10 gap-y-5 text-CDark font-bold">
					<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
						Demos
					</a>
					<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
						Pages
					</a>
					<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
						Support
					</a>
					<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
						Contact
					</a>
				</div>
				<button className="bg-CBlue text-white font-bold rounded-lg px-4 py-3 justify-end">
					Get started free
				</button>
			</div>
		</nav>
	);
};

export default NavSection;
