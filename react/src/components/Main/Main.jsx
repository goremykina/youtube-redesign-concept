import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";
import Channel from "../Channel/Channel.jsx";
import NextVideos from "../NextVideos/NextVideos.jsx";
import "./style.css"

export default function Main() {
    return (
        <div className="app-wrapper">
            <div className="app-container">
                <VideoPlayer/>
                <hr></hr>
                <Channel />
            </div>
            <NextVideos/>
        </div>
    )
}