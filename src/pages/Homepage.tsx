import HomepageHero from "../components/HomepageHero";
import ComplicatedMeme from "../assets/memes/complicated-meme.jpg";
import ChangeMindMeme from "../assets/memes/change-my-mind-meme.jpg";
import WaitingMeme from "../assets/memes/waiting-meme.jpg";
import BernieMeme from "../assets/memes/bernie-s-meme.jpg";
import MinonMeme from "../assets/memes/minons-meme.jpg";
import SlightlyComplicatedMeme from "../assets/memes/slightly-complicated-meme.jpg";
import CSSCaptainMeme from "../assets/memes/css-captain-now-meme.jpg";
import SameCodeMeme from "../assets/memes/same-code-meme.jpg";

const Homepage = () => {
  return (
    <>
      <>
        <div className="container-fluid">
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
          <div className="bg-submain-col h-[800px] flex justify-center items-center">
            <img src={BernieMeme} alt="Bernie Meme" />
          </div>
          <div className="bg-sub-col-1 h-[800px] flex justify-center items-center">
            <img src={WaitingMeme}></img>
          </div>
          <div className="bg-sub-col-2 h-[800px]">
            <img src={ComplicatedMeme}></img>
            <img src={SameCodeMeme}></img>
          </div>
          <div className="bg-main-col h-[360px]">
            <img src={MinonMeme} alt="Minion Meme" className="w-auto h-full" />
            <img
              src={SlightlyComplicatedMeme}
              alt="Slightly Complicated Meme"
              className="w-auto h-full"
            />
          </div>
        </div>
      </>
    </>
  );
};

export default Homepage;
