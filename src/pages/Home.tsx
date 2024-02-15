import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowToSection from "../components/HowToSection";
import NavSection from "../components/NavSection";
import PriceSection from "../components/PriceSection";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
	return (
		<>
			<NavSection />
			<HeroSection />
			<FeatureSection />
			<AboutSection />
			<HowToSection />
			<TestimonialSection />
			<PriceSection />
			<Footer />
		</>
	);
};

export default Home;
