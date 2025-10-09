import '../css/customizableInputs.css'

function CustomizableInputs({ id, label, spanText, type, placeholder }) {
  return (
    <div className="input-group mb-3">
      <label htmlFor={id}>{label}</label>
      <span className="input-group-text" id="basic-addon1">{spanText}</span>
      <input id={id} type={type} className="form-control" placeholder={placeholder} aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  );
}
export default CustomizableInputs;