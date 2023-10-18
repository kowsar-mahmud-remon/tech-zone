"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateUserMutation } from "@/redux/features/user/userApi";
import { userSchema } from "@/schemas/user";
import Link from "next/link";

type FormValues = {
  id: string;
  password: string;
};

const SignUpPage = () => {
  const [createUser] = useCreateUserMutation();
  const router = useRouter();

  // console.log(isLoggedIn());

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    message.loading("SignUp...");
    try {
      // console.log(data);

      const userData = {
        ...data,
        role: "user",
      };
      const res = await createUser(userData).unwrap();

      console.log("res", res);

      if (res?.token) {
        router.push("/profile");

        message.success("User Created Successful!");
      }

      storeUserInfo({ accessToken: res?.token });
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Create your account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(userSchema)}>
            <Row gutter={{ lg: 32 }}>
              <Col sm={24} md={24} lg={12}>
                <div
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <FormInput
                    name="name"
                    type="text"
                    size="large"
                    label="User Name *"
                  />
                </div>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <div
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <FormInput
                    name="imgUrl"
                    type="text"
                    size="large"
                    label="User ImgUrl *"
                  />
                </div>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <div
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <FormInput
                    name="email"
                    type="email"
                    size="large"
                    label="User Email *"
                  />
                </div>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <div
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    label="User Password *"
                  />
                </div>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <div
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <FormInput
                    name="contactNo"
                    type="text"
                    size="large"
                    label="User ContactNo *"
                  />
                </div>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <div
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <FormInput
                    name="address"
                    type="text"
                    size="large"
                    label="User Address *"
                  />
                </div>
              </Col>
            </Row>

            <Button type="primary" htmlType="submit">
              Create
            </Button>

            <p
              style={{
                margin: "10px 0",
              }}
            >
              Already have an account{" "}
              <Link
                href="/login"
                style={{
                  color: "primary",
                }}
              >
                Please Login
              </Link>
            </p>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignUpPage;
