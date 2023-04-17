import React from "react";
import PTSelect from "./common/PTSelect";
import gender from "./jsons/gender.json";
import urgency from "./jsons/urgency.json";
import formThree from "./jsons/formThree.json";

function FormThree({ formDataThree, handleOnChange }) {
  return (
    <>
      <PTSelect
        name="mode"
        title="Interview Mode"
        options={formThree.mode}
        value={formDataThree.mode}
        onChange={(e) => handleOnChange(e, "mode")}
      />
      <PTSelect
        name="duration"
        title="Interview Duration"
        options={formThree.duration}
        value={formDataThree.duration}
        onChange={(e) => handleOnChange(e, "duration")}
      />
      <PTSelect
        name="jobLocation"
        title="job Location"
        options={formThree.location}
        value={formDataThree.jobLocation}
        onChange={(e) => handleOnChange(e, "jobLocation")}
      />
    </>
  );
}

export default FormThree;
