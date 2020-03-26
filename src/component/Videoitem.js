import React from "react";
import "../component/Videoitem.css";

const Videoitem = props => {
  return (
    <div
      onClick={() => props.onVideoSelect(props.video)}
      className="Video-item item"
    >
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default Videoitem;
