import ComplicatedMeme from "../assets/memes/complicated-meme.jpg";
import CSSCaptainMeme from "../assets/memes/css-captain-now-meme.jpg";
import ChangeMindMeme from "../assets/memes/change-my-mind-meme.jpg";

const SectionFour = () => {
  return (
   <>
       <div className="bg-sub-col-2 h-[800px] flex flex-col justify-center items-center">
            <img src={ComplicatedMeme}></img>
            <div className="flex flex-col justify-center items-center container-md">
              <img
                src={ChangeMindMeme}
                className="w-[50%] h-auto"
                alt="Change Mind Meme"
              />
              <img
                src={CSSCaptainMeme}
                className="w-[50%] h-auto"
                alt="CSS Captain Meme"
              />
            </div>
          </div>
   </>
  )
}

export default SectionFour