import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import PTInput from "../components/common/PTInput";
import PTSelect from "../components/common/PTSelect";
import PTCard from "../components/common/PTCard";
import { useFormik } from "formik";
import candidateValidationSchema from "../validations/CandidateValidationSchema";
import tabs from "../components/jsons/tabs.json";
import Tabs from "../components/Tabs";
import gender from "../components/jsons/gender.json";
import urgency from "../components/jsons/urgency.json";
import FormOne from "../components/FormOne";
import FormTwo from "../components/FormTwo";
import FormThree from "../components/FormThree";

function CandidateRequisition() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isValidate, setIsValidate] = useState(false);
  const [formDataOne, setFormDataOne] = useState({
    requisitionTitle: "",
    openings: 0,
    gender: "male",
    urgency: "immediateJoining",
  });

  const [formDataTwo, setFormDataTwo] = useState({
    jobTitle: "",
    details: "",
    location: "",
  });

  const [formDataThree, setFormDataThree] = useState({
    mode: "",
    duration: "",
    jobLocation: "",
  });

  const handleOnChange = (event, name) => {
    if (name === "gender" || name === "urgency") {
      setFormDataOne({ ...formDataOne, [name]: event });
    } else {
      setFormDataOne({ ...formDataOne, [name]: event.target.value });
    }
  };

  const handleOnChangeTwo = (event, name) => {
    setFormDataTwo({ ...formDataTwo, [name]: event.target.value });
  };

  const handleOnChangeThree = (event, name) => {
    setFormDataThree({ ...formDataThree, [name]: event });
  };

  const showLayout = () => {
    switch (selectedTab) {
      case 0:
        return (
          <FormOne
            formDataOne={formDataOne}
            handleOnChange={handleOnChange}
            isValidate={isValidate}
          />
        );
      case 1:
        return (
          <FormTwo
            formDataTwo={formDataTwo}
            handleOnChange={handleOnChangeTwo}
            isValidate={isValidate}
          />
        );
      case 2:
        return (
          <FormThree
            formDataThree={formDataThree}
            handleOnChange={handleOnChangeThree}
            isValidate={isValidate}
          />
        );
      default:
        return (
          <FormOne
            formDataOne={formDataOne}
            handleOnChange={handleOnChange}
            isValidate={isValidate}
          />
        );
    }
  };

  const checkValidation = () => {
    const { gender, openings, requisitionTitle, urgency } = formDataOne;
    const { details, jobTitle, location } = formDataTwo;
    const { duration, jobLocation, mode } = formDataThree;
    if (selectedTab === 0) {
      if (gender || !openings || !requisitionTitle || !urgency) {
        setIsValidate(true);
      } else {
        setIsValidate(true);
      }
    }
    if (selectedTab === 1) {
      if (!details || !jobTitle || !location) {
        setIsValidate(true);
      } else {
        setIsValidate(true);
      }
    }
    if (selectedTab === 2) {
      if (!duration || !jobLocation || !mode) {
        setIsValidate(true);
      } else {
        setIsValidate(true);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="text-black text-2xl font-bold">
        Create Candidate Requisition
      </h1>

      <Tabs setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

      <div>
        <div className="grid grid-cols-5 gap-12 mx-2 my-4">
          <div className="col-span-3">
            {showLayout()}
            <div className="flex items-center justify-end mt-4">
              {selectedTab > 0 && (
                <button
                  className="bg-slate-400 text-black px-6 py-2 mr-2"
                  onClick={() => {
                    if (selectedTab !== 0) {
                      setSelectedTab(selectedTab - 1);
                    }
                  }}
                >
                  Previous
                </button>
              )}
              {selectedTab !== 2 && (
                <button
                  className="bg-red-500 text-white px-6 py-2"
                  onClick={() => {
                    if (selectedTab !== 2) {
                      setSelectedTab(selectedTab + 1);
                    }
                  }}
                >
                  Next
                </button>
              )}
              {selectedTab === 2 && (
                <button
                  className="bg-red-500 text-white px-6 py-2"
                  onClick={() => {
                    console.log(
                      JSON.stringify(formDataOne),
                      JSON.stringify(formDataTwo),
                      JSON.stringify(formDataThree)
                    );
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
          <div className="col-span-2 bg-blue-100 rounded-lg min-h-[300px] overflow-hidden">
            <div className=" flex justify-between items-center">
              <h4 className="font-semibold text-lg pl-[1rem]">Draft</h4>
              <button className="bg-red-500 text-white px-6 py-2">
                Preview
              </button>
            </div>

            <div className="p-[1rem]">
              <div className="bg-violet-800 text-white p-4 rounded-lg flex justify-between items-center">
                <p>{formDataOne.requisitionTitle}</p>
                <p>OPENINGS {formDataOne.openings}</p>
              </div>
            </div>

            <PTCard style={{ margin: "1rem" }}>
              <h4 className="text-lg font-bold">Requisition Details</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 text-slate-500">Urgency</div>
                <div className="col-span-1 text-slate-500">Gender</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col-span-1">{formDataOne.urgency}</div>
                <div className="col-span-1">{formDataOne.gender}</div>
              </div>
            </PTCard>

            <PTCard style={{ margin: "1rem" }}>
              <h4 className="text-lg font-bold">Job Details</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 text-slate-500">job Title</div>
                <div className="col-span-1 text-slate-500">job Details</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col-span-1">{formDataTwo.jobTitle}</div>
                <div className="col-span-1">{formDataTwo.details}</div>
              </div>
              <div className="grid grid-cols-1 mt-4">
                <div className="col-span-1">Location</div>
              </div>
              <div className="grid grid-cols-1">
                <div className="col-span-1">{formDataTwo.location}</div>
              </div>
            </PTCard>

            <PTCard style={{ margin: "1rem" }}>
              <h4 className="text-lg font-bold">Job Details</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 text-slate-500">Interview Mode</div>
                <div className="col-span-1 text-slate-500">
                  Interview Duration
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col-span-1">{formDataThree.mode}</div>
                <div className="col-span-1">{formDataThree.duration}</div>
              </div>
              <div className="grid grid-cols-1 mt-4">
                <div className="col-span-1">Job Location</div>
              </div>
              <div className="grid grid-cols-1">
                <div className="col-span-1">{formDataThree.jobLocation}</div>
              </div>
            </PTCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CandidateRequisition);
