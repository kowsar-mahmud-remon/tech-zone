import * as yup from "yup";

export const editServiceSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  imgUrl: yup
    .string()
    .required("Img Url is required")
    .url("Invalid URL format")
    .matches(/(https?:\/\/.*\.(?:png|jpe?g|gif))/, "Invalid image URL"),
  price: yup.number().required("Img Url is required"),
  description: yup.string().required("Description is required"),
});
