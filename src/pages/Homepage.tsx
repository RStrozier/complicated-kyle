
import VideoComplicated from "../components/VideoComplicated";
import VideoThoughts from "../components/VideoThoughts";
import DylanSection from "../sections/DylanSection";
import DylanSection2 from "../sections/DylanSection2";
import DylanSection3 from "../sections/DylanSection3";
import FinalSection from "../sections/FinalSection";
import SectionFive from "../sections/SectionFive";
import SectionFour from "../sections/SectionFour";
import SectionOne from "../sections/SectionOne";
import SectionThree from "../sections/SectionThree";
import SectionTwo from "../sections/SectionTwo";

const Homepage = () => {
  return (
      <>
        <div className="container-fluid">
          <VideoComplicated />
          <SectionOne />
          <DylanSection />
          <VideoThoughts />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <DylanSection2 />
          <SectionFive />
          <DylanSection3 />
          <FinalSection />
        </div>
      </>
  );
};

export default Homepage;
