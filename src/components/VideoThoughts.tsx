import ThoughtsGIF from '../assets/memes/thoughts-gif.mp4'

const VideoThoughts = () => {
  return (
    <div>
    <video width="100%" autoPlay muted loop>
      <source src={ThoughtsGIF} />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}

export default VideoThoughts
