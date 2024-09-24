
import VideoComplicated from "../components/VideoComplicated";
import DylanSection from "../sections/DylanSection";
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
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
        </div>
      </>
  );
};

export default Homepage;
