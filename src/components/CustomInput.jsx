import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function CustomInput({ label, type = 'text', value, onChange, placeholder }) {
  return(
    <>
        <div class="input-group">
            <span class="input-group-text" id="visible-addon">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="visible-addon" />
            <input type="text" class="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon" />
        </div>
    </>
  );
}
export default CustomInput;