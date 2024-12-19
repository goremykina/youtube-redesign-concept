import channelImg from "/icon/channelName.png"
import Button from "../Button/Button.jsx";
import "./style.css"

export default function Channel() {
    return (
        <div className="channel-wrapper">
            <div className="channel-wrapper-info">
                <img className="channelImg" src={channelImg} alt="channel-icon"></img>
                <div>
                    <h3>Food & Drink</h3>
                    <p className="mob-hide">245K subscribed</p>
                    <p className="published-data">Published on 14 Jun 2019</p>
                    <p className="desctiption">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                    <Button
                        btnClass="btn-show"
                        btnName="Show more"
                    />
                </div>
            </div>
            <div>
                <Button
                    btnClass="btn-subscribe"
                />
            </div>
        </div>
    )
}