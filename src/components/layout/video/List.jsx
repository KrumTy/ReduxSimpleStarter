import React from 'react';
import VideoListItem from './ListItem'

const VideoList = (props) => {
  const videoItems = props.videos.map(video => 
    <VideoListItem 
      onVideoSelect={props.onVideoSelect}
      video={video} 
      key={video.id.videoId} 
    />);

  return <ul className="col-md-4 list-group">
    {videoItems}
  </ul>;
}

export default VideoList;
