import * as yup from "yup";

export const editAdminSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  imgUrl: yup.string().required("Img Url is required"),
  contactNo: yup.string().required("ContactNo is required"),
  address: yup.string().required("Address is required"),
});
