import * as yup from "yup";

export const reviewSchema = yup.object().shape({
  review: yup.string().required("Review is required"),
  rating: yup
    .number()
    .oneOf([1, 2, 3, 4, 5], "Rating must be 1, 2, 3, 4, or 5")
    .required("Rating is required"),
});
