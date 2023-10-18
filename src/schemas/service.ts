import * as yup from "yup";

export const serviceSchema = yup.object().shape({
  name: yup.string().required("Service Name is required"),
  imgUrl: yup
    .string()
    .required("Img Url is required")
    .url("Invalid URL format")
    .matches(/(https?:\/\/.*\.(?:png|jpe?g|gif))/, "Invalid image URL"),
  price: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
});
