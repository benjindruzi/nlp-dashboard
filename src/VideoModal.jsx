import React from "react"
import Modal from "react-modal"
import "./VideoModal.css"

Modal.setAppElement("#root")

function VideoModal({ video, onClose }) {
    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <button className="close-button" onClick={onClose}>&times;</button>
            <h2>{video.title}</h2>
            <video width="100%" controls>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Modal>
    )
}

export default VideoModal
