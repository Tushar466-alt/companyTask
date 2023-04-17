import React from "react";

function PTInput(
  {
    type = "text",
    value,
    onChange,
    placeholder,
    style,
    isError,
    errorMessage,
    title,
    className,
    name,
  },
  ...rest
) {
  return (
    <>
      <p htmlFor="" className="mb-[12px]">
        {title}
      </p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        className={className}
        name={name}
        {...rest}
      />

      {isError && (
        <p className="text-[1rem] text-red-600 font-medium mt-[-12px] mb-4">
          {errorMessage || "This field is required"}
        </p>
      )}
    </>
  );
}

export default PTInput;
