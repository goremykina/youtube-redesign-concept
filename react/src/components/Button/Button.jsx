import "./style.css"

export default function Button({ btnClass, btnName, btnAlt, btnImg }) {
    console.log(btnAlt, btnImg)
    return (
        <button className={btnClass}>
            {btnImg
                ? <img src={btnImg} alt={btnAlt}></img>
                : btnName}
        </button>
    )
}