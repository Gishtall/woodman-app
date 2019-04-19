import React from "react";
import YouTube from 'react-youtube';
import { BrowserRouter} from "react-router-dom";
// https://youtu.be/kh4S11uHwk4

class VideoBoxOne extends React.Component {
  render() {
    
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };
    
    return (
      <BrowserRouter>
        <YouTube
          videoId={'kh4S11uHwk4'}
          opts={opts}
          onReady={this.videoOnReady}
        />
      </BrowserRouter>
    );
  }

  videoOnReady(event) {
    event.target.pauseVideo();
  }
}

export default VideoBoxOne;
