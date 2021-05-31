import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import useVideos from "./hooks/useVideos";

const App = () => {
  const [videos, searchVideos] = useVideos("reactjs");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <>
      <Navbar />
      <div className="App ui container">
        <SearchBar onSubmit={(term) => searchVideos(term)} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={videos}
                onVideoSelect={(video) => setSelectedVideo(video)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
