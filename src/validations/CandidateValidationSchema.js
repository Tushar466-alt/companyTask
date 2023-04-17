import * as yup from "yup";

const candidateValidationSchema = yup.object({
  requisitionTitle: yup
    .string()
    .min(2)
    .required("Requisition title is required"),
  numberOfOpenings: yup.number().required("Please enter number of openings"),
  gender: yup.string().required("Please select gender"),
  urgency: yup.string().required("Please select urgency"),
});

export default candidateValidationSchema;
