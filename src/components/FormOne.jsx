import React from "react";
import PTInput from "./common/PTInput";
import PTSelect from "./common/PTSelect";
import gender from "./jsons/gender.json";
import urgency from "./jsons/urgency.json";

function FormOne({
  formDataOne,
  handleOnChange,
  selectedTab,
  setSelectedTab,
  isValidate,
}) {
  return (
    <>
      <PTInput
        name="requisitionTitle"
        title="Requisition title"
        value={formDataOne.requisitionTitle}
        onChange={(e) => handleOnChange(e, "requisitionTitle")}
        isError={isValidate && !formDataOne.requisitionTitle}
      />
      <PTInput
        name="numberOfOpenings"
        title="Number of openings"
        value={formDataOne.openings}
        onChange={(e) => handleOnChange(e, "openings")}
        isError={isValidate && !formDataOne.openings}
      />
      <PTSelect
        name="gender"
        title="Gender"
        options={gender}
        value={formDataOne.gender}
        onChange={(e) => handleOnChange(e, "gender")}
        isError={isValidate && !formDataOne.gender}
      />
      <PTSelect
        name="urgency"
        title="urgency"
        options={urgency}
        value={formDataOne.urgency}
        onChange={(e) => handleOnChange(e, "urgency")}
        isError={isValidate && !formDataOne.urgency}
      />
    </>
  );
}

export default FormOne;
