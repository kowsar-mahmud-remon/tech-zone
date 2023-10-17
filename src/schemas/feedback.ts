import * as yup from "yup";

export const feedbackSchema = yup.object().shape({
  feedback: yup.string().required("Feedback is required"),
});
