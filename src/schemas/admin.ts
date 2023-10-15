import * as yup from "yup";

export const adminSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required(),
  imgUrl: yup.string().required("Img Url is required"),
  contactNo: yup.string().required("ContactNo is required"),
  address: yup.string().required("Address is required"),
});
