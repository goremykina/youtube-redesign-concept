import Video from "./Video/Video.jsx";
import knob from "/icon/knob.svg"
import "./style.css"
import first from "/icon/1.png"
import second from "/icon/2.png"
import third from "/icon/3.png"
import fourth from "/icon/4.png"


export default function NextVideos() {
    const videoInfo = [first, second, third, fourth]
    const videoName = {
        first: "Baby Monitor Technology",
        second: "A Good Autoresponder",
        third: "Selecting The Right Hotel",
        fourth: "Selecting The Right Hotel"
    }

    const videos = videoInfo.map((video, index) => {
        const keys = Object.keys(videoName);
        return {
            image: video,
            title: videoName[keys[index]]
        };
    });

    return (
        <div className="next-video-wrapper">
            <div className="next-video">
                <h2 className="next-video-title">Next</h2>
                <div className="next-video-autoplay">
                    <h3 className="next-video-autoplay-title">Autoplay</h3>
                    <img src={knob} alt="play"></img>
                </div>
            </div>
            <>
                {videos.map((video, i) => {
                    return (
                        <Video
                            key={i}
                            video={video.image}
                            videoName={video.title}
                            views={'123k views'}
                            channelName={"Dollie Blair"}
                        />)
                })}
            </>
        </div>
    )
}