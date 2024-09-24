import TENPGIF from '../assets/memes/10-percent-gif.mp4';

const FinalSection = () => {
    return (
        <div>
          <video width="100%" autoPlay muted loop>
            <source src={TENPGIF} />
            Your browser does not support the video tag.
          </video>
        </div>
      );
}

export default FinalSection