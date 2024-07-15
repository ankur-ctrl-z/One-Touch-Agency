import backgroundVideo from '../../assets/OneTouch video.mp4';
import React, { useState, useRef } from 'react';
import './video.css'; 

const Video = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div className="video-container mt-20">
            <video
                ref={videoRef}
                src={backgroundVideo}
                loop
                autoPlay
                muted={isMuted}
                className="video"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
            <div className="controls-overlay">
                <button onClick={handleMuteToggle} className="control-button">
                    {isMuted ? '🔇' : '🔊'}
                </button>
            </div>
        </div>
    );
};

export default Video;




