import "./Button.css"

function Button({text, prop}) {
    return (
        <button onClick={prop} className="button">{text}</button>
    )
}

export default Button