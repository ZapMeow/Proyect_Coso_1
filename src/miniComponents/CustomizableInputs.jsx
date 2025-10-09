import '../css/customizableInputs.css'

function CustomizableInputs({ id, label, type, placeholder }) {
  return (
    
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">{label}</span>
      <input type={type} className="form-control" placeholder={placeholder} aria-label="Username" aria-describedby="basic-addon1" />
    </div>

  );

  
}
export default CustomizableInputs;