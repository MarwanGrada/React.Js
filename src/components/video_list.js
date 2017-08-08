import React from 'react';

const VideoList = function(props) {
  return (
      <ul className="col-md-4 list-group" >
        {props.videos.length}
      </ul>
    )
}

export default VideoList;