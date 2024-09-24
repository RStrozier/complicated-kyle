import ComplicatedGIF from '../assets/memes/complicated-gif.mp4'

const VideoComplicated = () => {
  return (
    <div>
      <video width="100%" autoPlay muted loop>
        <source src={ComplicatedGIF} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


export default VideoComplicated
