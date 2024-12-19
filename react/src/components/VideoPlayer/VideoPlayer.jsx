import videoPlayer from "/icon/back.png"
import like from "/icon/Like.svg"
import dislike from "/icon/Dislike.svg"
import share from "/icon/Share.svg"
import more from "/icon/More.svg"
import startTime from "/icon/1.34.svg"
import allTime from "/icon/19.svg"
import progressBar from "/icon/Progress Bar.svg"
import pause from "/icon/Pause.svg"
import next from "/icon/Next.svg"
import volume from "/icon/Volume.svg"
import subtitles from "/icon/Subtitles.svg"
import settings from "/icon/Settings.svg"
import wideScreen from "/icon/Size.svg"
import fullScreen from "/icon/Full Screen.svg"

import volumeMobile from "/icon/Volume-mob.svg"
import timeMobileStart from "/icon/Time Mob Start.svg"
import timeMobile from "/icon/Time-mob.svg"
import progressBarContent from "/icon/Rectangle.svg"
import pauseMobile from "/icon/Pause-mob.svg"
import progressBarMobile from "/icon/Progress Bar Mob.svg"


import "./style.css"
import Button from "../Button/Button.jsx";

export default function VideoPlayer() {
    const videoBtnImg = [pause, next, volume]
    const screenBtn = [subtitles, settings, wideScreen, fullScreen]

    const videoBtnAlt = {
        pause: "pause",
        next: "next",
        volume: "volume",
    }

    const screenBtnAlt = {
        subtitles: "subtitles",
        settings: "settings",
        wideScreen: "wideScreen",
        fullScreen: "fullScreen"
    }

    const getVideosButtons = (BtnImg, BtnAlt) => {
        return BtnImg.map((button, index) => {
            const keys = Object.keys(videoBtnAlt);
            console.log(BtnAlt[keys[index]])
            return {
                image: button,
                alt: BtnAlt[keys[index]]
            };
        });
    }
    const videosButtons = getVideosButtons(videoBtnImg, videoBtnAlt)
    const screenButtons = getVideosButtons(screenBtn, screenBtnAlt)

    return (
        <div>
            <div className="video-player">
                <img className="video-player-background" src={videoPlayer} alt="videoPlayer"></img>
                <div className="player-mob">
                    <img src={progressBarContent} alt="progress-bar-content"></img>
                    <div className="player-mob-img-wrapper">
                        <img src={pauseMobile} alt="pauseMobile"></img>
                        <img src={timeMobileStart} alt="startTime"></img>
                        <img src={progressBarMobile} alt="progress"></img>
                        <img src={timeMobile} alt="pause"></img>
                        <img src={volumeMobile} alt="pause"></img>
                    </div>
                </div>

                <div className="video-player-wrapper">
                    <div className="video-player-time">
                        <img src={startTime} alt="time"></img>
                        <img src={allTime} alt="time"></img>
                    </div>

                    <img className="progress-bar" src={progressBar} alt="progress"></img>

                    <div className="video-btn-wrapper">
                        <div className="video-btn left">
                            {videosButtons.map((item, i) => {
                                return (
                                    <Button
                                        key={i}
                                        btnImg={item.image}
                                        btnAlt={item.alt}
                                    />)
                            })}
                        </div>
                        <div className="video-btn">
                            {screenButtons.map((item, i) => {
                                return (
                                    <Button
                                        key={i}
                                        btnImg={item.image}
                                        btnAlt={item.alt}
                                    />)
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="video-player-title">Dude You Re Getting A Telescope</h2>
            <div className="videoplayer-likes">
                <p className="view">123k views</p>
                <div className="video-player-info-likes">
                    <img src={like} alt="likes"></img>
                    <img src={dislike} alt="dislike"></img>
                    <img src={share} alt="share"></img>
                    <img className="more" src={more} alt="more"></img>
                </div>
            </div>
        </div>
    )
}