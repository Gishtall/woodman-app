import React, { Component } from "react";
import "./video.css";
import YouTube from 'react-youtube';
import { BrowserRouter, Route, Link } from "react-router-dom";
// https://youtu.be/kh4S11uHwk4
// https://youtu.be/nvga5aQBFkA
class VideoBoxOne extends React.Component {
  render() {
    
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    const { videoId } = this.props

    return (
      <BrowserRouter>
        <YouTube
          videoId={videoId}
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
