import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import VideoCard from "./VideoCard"
import VideoModal from "./VideoModal"
import "./App.css"

function App() {
    const [videos, setVideos] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        fetch("/video_keywords_new.json")
            .then(res => res.json())
            .then(data => {
                const videoArray = Object.keys(data).map(title => ({
                    title,
                    keywords: data[title].keywords,
                    videoUrl: data[title].videoUrl,
                    thumbnail: data[title].thumbnail
                }))
                setVideos(videoArray)
            })
            .catch(err => console.error("Error fetching JSON:", err))
    }, [])

    function handleSearchChange(e) {
        setSearchTerm(e.target.value)
    }

    const filteredVideos = videos.filter(video => {
        const term = searchTerm.toLowerCase()
        if (video.title.toLowerCase().includes(term)) return true
        if (video.keywords.some(kw => kw.toLowerCase().includes(term))) return true
        return false
    })

    return (
        <div className="app-wrapper">
            <div className="header-wrapper text-center">
                <h1 className="mb-4">Introduction to Machine Learning</h1>
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search videos..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            {filteredVideos.length === 0 ? (
                <p className="text-center text-muted">No videos match your search.</p>
            ) : (
                <div className="video-grid-wrapper">
                    {filteredVideos.map(video => (
                        <div key={video.title} className="video-grid-card">
                            <VideoCard video={video} onClick={() => setSelectedVideo(video)} />
                        </div>
                    ))}
                </div>
            )}

            {selectedVideo && (
                <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
            )}
        </div>
    )
}

export default App
