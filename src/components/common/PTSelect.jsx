import { Select } from "antd";
import React from "react";

function PTSelect({
  isMultiple,
  onChange,
  options,
  value,
  title,
  isError,
  errorMessage,
  name,
}) {
  return (
    <>
      <p htmlFor="" className="mb-[12px]">
        {title}
      </p>
      <Select
        mode={isMultiple && "multiple"}
        style={{
          width: "100%",
        }}
        value={value}
        onChange={onChange}
        options={options}
        name={name}
      />

      {isError && (
        <p className="text-[1rem] text-red-600 font-medium mt-[-12px] mb-4">
          {errorMessage || "This field is required"}
        </p>
      )}
    </>
  );
}

export default PTSelect;
