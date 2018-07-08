import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  var videoTitle = video.snippet.title;
  var thumbnailUrl = video.snippet.thumbnails.default.url;

  return <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={thumbnailUrl}/>
      </div>
      <div className="media-body">
        <div className="media-heading">
          {videoTitle}
        </div>
      </div>
    </div>
  </li>;
}

export default VideoListItem;
