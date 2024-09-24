import Dylan3 from '../assets/memes/dylan-3.jpg'
import Dylan4 from '../assets/memes/dylan-4.jpg'

const DylanSection2 = () => {
    return (
        <div className="bg-sub-col-1 h-[800px] flex flex-col justify-center items-center">
        <img src={Dylan3} alt="Minion Meme" className='h-[40%]'/>
        <img
          src={Dylan4}
          alt="Slightly Complicated Meme"
           className='h-[40%]'
        />
      </div>
      )
}

export default DylanSection2