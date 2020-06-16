import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    // video.snippet.title contains the video title
    // video.snippet.thumbnails.medium.url contains the medium quality thumbnail
    // So many divisions are added for asthetic purposes using semantic list 
    return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img 
            alt={video.snippet.title} 
            className="ui image" 
            src={video.snippet.thumbnails.medium.url} 
        />
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
    </div>)
};

export default VideoItem;