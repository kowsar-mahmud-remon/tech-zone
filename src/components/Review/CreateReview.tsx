"use client";

import Form from "@/components/Forms/Form";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import FormTextArea from "../Forms/FormTextArea";
import { useCreateReviewMutation } from "@/redux/features/review/reviewApi";
import { reviewSchema } from "@/schemas/review";
import FormInput from "../Forms/FormInput";

const CreateReview = ({ id }: any) => {
  const [createReview] = useCreateReviewMutation();

  const { _id } = getUserInfo() as any;

  const onSubmit = async (data: any) => {
    message.loading("Creating...");
    try {
      const reviewData = {
        ...data,
        userId: _id,
        serviceId: id,
      };

      const res: any = await createReview(reviewData);

      if (res?.data?.success) {
        message.success("Review Added successfully");
      } else {
        message.error("Failed to add review");
      }

      // console.log(reviewData);
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          margin: "15px 0px",
        }}
      >
        <p
          style={{
            fontSize: "25px",
            marginBottom: "15px",
            display: "flex",
            justifyContent: "center",
            padding: "10px 0",
          }}
        >
          Create Review
        </p>
        <Form submitHandler={onSubmit} resolver={yupResolver(reviewSchema)}>
          <Row gutter={{ lg: 32 }}>
            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                  fontSize: "18px",
                }}
              >
                <FormTextArea name="review" label="Review *" rows={4} />
              </div>
            </Col>

            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                  fontSize: "18px",
                }}
              >
                <FormInput
                  name="rating"
                  type="number"
                  size="large"
                  label="Rating *"
                />
              </div>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit">
            Add Review
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateReview;
