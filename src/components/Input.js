import "./Input.css";

function Input({ m1, m2, type = "text", onChange, value}) {
  return (
    <div className="input-body">
      <img src={m1} />
      <input className="input" type={type} id="input" onChange={onChange} value={value}required />
      <img src={m2} />
    </div>
  );
}

export default Input;
