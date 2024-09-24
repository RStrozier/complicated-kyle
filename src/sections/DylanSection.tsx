import Dylan1 from '../assets/memes/dylan-1.jpg'
import Dylan2 from '../assets/memes/dylan-2.jpg'

const DylanSection = () => {
  return (
    <div className="bg-sub-col-2 h-[800px] flex flex-col justify-center items-center">
    <img src={Dylan1} alt="Minion Meme" className='h-[40%]'/>
    <img
      src={Dylan2}
      alt="Slightly Complicated Meme"
       className='h-[40%]'
    />
  </div>
  )
}

export default DylanSection