import Header from "./components/Header";
import IntoductionSection from "./sections/Introduction";
import ServiceSection from "./sections/Service";
import AboutSection from './sections/About'
import TeamSection from "./sections/Team";
import ChooseUsSection from "./sections/ChooseUs";
import TestimonialsSection from "./sections/Testimonials";
import ContactUsSection from "./sections/ContactUs";
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <IntoductionSection sectionId="home"/>
      <ServiceSection sectionId="services"/>
      <AboutSection sectionId="about"/>
      <TeamSection sectionId="team"/>
      <ChooseUsSection sectionId="choose">
        {/* <TestimonialsSection /> */}
      </ChooseUsSection>
      <ContactUsSection sectionId="contact"/>
      <Footer />
    </>
  );
}

export default App;
