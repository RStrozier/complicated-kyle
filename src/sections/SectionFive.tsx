import MinonMeme from "../assets/memes/minons-meme.jpg";
import SlightlyComplicatedMeme from "../assets/memes/slightly-complicated-meme.jpg";

const SectionFive = () => {
  return (
    <>
       <div className="bg-main-col h-[800px] flex flex-col justify-center items-center">
            <img src={MinonMeme} alt="Minion Meme"/>
            <img
              src={SlightlyComplicatedMeme}
              alt="Slightly Complicated Meme"
            />
          </div>
    </>
  )
}

export default SectionFive