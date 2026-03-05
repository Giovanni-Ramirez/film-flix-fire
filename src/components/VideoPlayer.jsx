import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({ videoId }) {
	const onPlayerReady = (event) => {
    event.target.pauseVideo(); 
  };
	
	const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
	
	
	return (
	<YouTube 
      videoId={videoId} 
      opts={opts} 
      onReady={onPlayerReady} 
  />
  )
}

export default VideoPlayer;
