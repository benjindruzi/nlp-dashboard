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
                    title: title,
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
        <div className="container text-center mt-4">
            <h1>Introduction to Machine Learning</h1>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        placeholder="Search videos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="form-control"
                    />
                </div>
            </div>
            <div className="row mt-5 gx-4 gy-4 justify-content-center">
                {filteredVideos.map(video => (
                    <div className="col-sm-6 col-md-4 col-lg-3 d-flex" key={video.title}>
                        <VideoCard
                            video={video}
                            onClick={() => setSelectedVideo(video)}
                        />
                    </div>
                ))}
            </div>
            {selectedVideo && (
                <VideoModal
                    video={selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </div>
    )
}

export default App
