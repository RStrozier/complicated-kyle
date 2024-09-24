import HomepageHero from "../components/HomepageHero"
import CSSCaptainMeme from "../assets/memes/css-captain-now-meme.jpg";
import ChangeMindMeme from "../assets/memes/change-my-mind-meme.jpg";

const SectionOne = () => {
  return (
    <>
     <div className="bg-main-col h-[400px]">
            <HomepageHero />
            <div className="flex justify-center items-center container-md">
              <img
                src={ChangeMindMeme}
                className="w-auto h-[10rem] mx-2"
                alt="Change Mind Meme"
              />
              <img
                src={CSSCaptainMeme}
                className="w-auto h-[10rem] mx-2"
                alt="CSS Captain Meme"
              />
            </div>
          </div>
    </>
  )
}

export default SectionOne