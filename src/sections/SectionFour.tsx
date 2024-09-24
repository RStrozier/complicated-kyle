import ComplicatedMeme from "../assets/memes/complicated-meme.jpg";
import ChangeMindMeme from "../assets/memes/change-my-mind-meme.jpg";

const SectionFour = () => {
  return (
   <>
       <div className="bg-sub-col-2 h-[800px] flex flex-col justify-center items-center">
            <img src={ComplicatedMeme}
            className="h-[60%] w-auto"
            ></img>
            <img
                src={ChangeMindMeme}
                    className="h-[60%] w-auto"
              />
          </div>
   </>
  )
}

export default SectionFour