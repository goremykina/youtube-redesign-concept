import "./style.css"

export default function Video({video, videoName,views, channelName}) {
    return (
        <div>
            <img src={video} alt="video"></img>
            <h4 className="video-title">{videoName}</h4>
            <div className="video-info-wrapper">
                <p>{views}</p>
                <p>{channelName}</p>
            </div>
        </div>
    )
}