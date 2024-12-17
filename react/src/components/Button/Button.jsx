import "./style.css"

export default function Button({ btnClass, btnName }) {
    return (
        <button className={btnClass}>{btnName}</button>
    )
}