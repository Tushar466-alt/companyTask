import React from "react";
import PTInput from "./common/PTInput";

function FormTwo({ formDataTwo, handleOnChange }) {
  return (
    <>
      <PTInput
        name="jobTitle"
        title="Job TiTle"
        value={formDataTwo.jobTitle}
        onChange={(e) => handleOnChange(e, "jobTitle")}
      />
      <PTInput
        name="details"
        title="Job Details"
        value={formDataTwo.details}
        onChange={(e) => handleOnChange(e, "details")}
      />
      <PTInput
        name="location"
        title="Job Location"
        value={formDataTwo.location}
        onChange={(e) => handleOnChange(e, "location")}
      />
    </>
  );
}

export default FormTwo;
