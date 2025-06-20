import HeroSection from "./sections/HeroSection";
import CompanyState from "./sections/CompanyState";
import Partenars from "./sections/Partenars";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import SuccessStory from "./sections/SuccessStory/SuccessStory";
import FAQ from "./sections/FAQ";
import CTA from "../../components/common/CTA";
import ContactUS from "./sections/ContactUS";
import Hero from "./sections/Hero/Hero";

const Home = () => {
  return (
    <section>
      {/* <HeroSection /> */}
      <Hero />
      <CompanyState />
      <Partenars />
      <CTA
        text1={"Ready to Take Your Brand to the Next Level?"}
        btnText={"Become a Client"}
      />
      <Projects />
      <CTA
        text1={"Seen Something You Like?"}
        text2={"Let’s Make Your Project The Next Success Story"}
        btnText={"Start your Project"}
      />
      <Services />
      <CTA
        text1={"Not sure where to start?"}
        text2={"Let’s build something great together"}
        btnText={"Book a Strategy Call"}
      />
      <Testimonials />
      <SuccessStory />
      <FAQ />
      <ContactUS />
    </section>
  );
};

export default Home;
