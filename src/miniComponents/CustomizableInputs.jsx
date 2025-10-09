import React from "react";

function CustomizableInputs({ id, label, type, placeholder }) {
  return (
    <div className="customizable-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
}
export default CustomizableInputs;