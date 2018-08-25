import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect} //firstly we brougth the prop from index.js and now passing it as a prop to VideoListItem
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
