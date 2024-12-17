import videoPlayer from "../../../public/icon/back.png"
import like from "../../../public/icon/Like.svg"
import dislike from "../../../public/icon/Dislike.svg"
import share from "../../../public/icon/Share.svg"
import more from "../../../public/icon/More.svg"
import startTime from "../../../public/icon/1.34.svg"
import allTime from "../../../public/icon/19.svg"
import progressBar from "../../../public/icon/Progress Bar.svg"
import pause from "../../../public/icon/Pause.svg"
import next from "../../../public/icon/Next.svg"
import volume from "../../../public/icon/Volume.svg"
import subtitles from "../../../public/icon/Subtitles.svg"
import settings from "../../../public/icon/Settings.svg"
import wideScreen from "../../../public/icon/Size.svg"
import fullScreen from "../../../public/icon/Full Screen.svg"
import "./style.css"

export default function VideoPlayer() {
    return (
        <div>
            <div className="video-player">
                <img src={videoPlayer} alt="videoPlayer"></img>
                <div className="video-player-wrapper">
                    <div className="video-player-time">
                        <img src={startTime} alt="time"></img>
                        <img src={allTime} alt="time"></img>
                    </div>

                    <img className="progress-bar" src={progressBar} alt="progress"></img>
                    <div className="video-btn-wrapper">
                        <div className="video-btn left">
                            <button>
                                <img src={pause} alt="pause"></img>
                            </button>
                            <button>
                                <img src={next} alt="next"></img>
                            </button>
                            <button>
                                <img src={volume} alt="volume"></img>
                            </button>
                        </div>
                        <div className="video-btn">
                            <button>
                                <img src={subtitles} alt="subtitles"></img>
                            </button>
                            <button>
                                <img src={settings} alt="settings"></img>
                            </button>
                            <button>
                                <img src={wideScreen} alt="wide-screen"></img>
                            </button>
                            <button>
                                <img src={fullScreen} alt="full-screen"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Dude You Re Getting A Telescope</h2>
            <div className="videoplayer-likes">
                <p>123k views</p>
                <div>
                    <img src={like} alt="likes"></img>
                    <img src={dislike} alt="dislike"></img>
                    <img src={share} alt="share"></img>
                    <img src={more} alt="more"></img>
                </div>
            </div>
        </div>
    )
}