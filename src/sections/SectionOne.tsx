import HomepageHero from "../components/HomepageHero";
import CSSCaptainMeme from "../assets/memes/css-captain-now-meme.jpg";

const SectionOne = () => {
  return (
    <>
      <div className="bg-main-col h-[300px]">
        <HomepageHero />
      </div>
      <div className="flex justify-center items-center">
        <img src={CSSCaptainMeme}></img>
      </div>
    </>
  );
};

export default SectionOne;
