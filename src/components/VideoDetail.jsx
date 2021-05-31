const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe
          src={videoSrc}
          title="Youtube video player"
          width="200"
          height="250"
          frameBorder="0"
          allowFullScreen
          webkitallowfullscreen
          mzallowfullscreen
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="ui description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
