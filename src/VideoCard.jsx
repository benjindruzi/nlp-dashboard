import React from "react"
import "./VideoCard.css"

function VideoCard({ video, onClick }) {
    return (
        <div className="card video-card w-100">
            {video.thumbnail && (
                <img src={video.thumbnail} alt={video.title} className="card-img-top" />
            )}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{video.title}</h5>
                <div className="tag-container mb-3">
                    {video.keywords.map((kw, i) => (
                        <span key={i} className="badge bg-secondary me-1 mb-1">{kw}</span>
                    ))}
                </div>
                <button className="btn btn-success mt-auto" onClick={onClick}>
                    Play Video
                </button>
            </div>
        </div>
    )
}

export default VideoCard
