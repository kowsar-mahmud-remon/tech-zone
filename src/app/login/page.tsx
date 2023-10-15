import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Zone | Login",
};

const Login = () => {
  return (
    <>
      <LoginPage></LoginPage>
    </>
  );
};

export default Login;
