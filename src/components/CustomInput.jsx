import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/CustomInput.css';

function CustomInput({id, label, span, type, placeholder }) {
  return(
    <>
        <div className="input-group custom-input-group">
          <div>
            <label htmlFor={id} className="form-label">{label}</label>
          </div>
          <div className='custom-input'>
            <span className="input-group-text" id="visible-addon">{span}</span>
            <input id={id} type={type} className="form-control" placeholder={placeholder} aria-label={label} aria-describedby="visible-addon" />
          </div>
        </div>
    </>
  );
}
export default CustomInput;