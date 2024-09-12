import AboutComp from "./component/AboutComp";
import Hero from "./component/Hero";
import Highlights from "./component/Highlights";
import Testimonials from "./component/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <AboutComp />
    </>
  );
};

export default Home;
