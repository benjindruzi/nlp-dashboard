import React from "react"
import "./VideoCard.css"

function VideoCard({ video, onClick }) {
    return (
        <div className="video-card d-flex flex-column">
            {video.thumbnail && (
                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            )}
            <div className="video-card-content">
                <h3 className="video-title">{video.title}</h3>
                <div className="tag-container">
                    {video.keywords.map((kw, i) => (
                        <span key={i} className="tag">{kw}</span>
                    ))}
                </div>
            </div>
            <div className="mt-auto">
                <button className="play-btn" onClick={onClick}>Play Video</button>
            </div>
        </div>
    )
}

export default VideoCard
