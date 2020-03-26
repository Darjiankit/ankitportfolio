import React from "react";
import Videoitem from "./Videoitem";

const Videolist = props => {
  console.log(props);
  const renderlist = props.videos.map(video => {
    return (
      <Videoitem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderlist}</div>;
};

export default Videolist;
