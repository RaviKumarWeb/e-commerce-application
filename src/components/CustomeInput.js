import React from "react";

const CustomeInput = (props) => {
  const { type, name, placeholder, className } = props;
  return (
    <div className="">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${className}`}
      />
    </div>
  );
};

export default CustomeInput;
