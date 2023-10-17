"use client";

import Form from "@/components/Forms/Form";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import FormTextArea from "../Forms/FormTextArea";
import { useCreateFeedbackMutation } from "@/redux/features/feedback/feedbackApi";
import { feedbackSchema } from "@/schemas/feedback";

const CreateFeedback = ({ id }: any) => {
  const [createFeedback] = useCreateFeedbackMutation();

  const { _id } = getUserInfo() as any;

  const onSubmit = async (data: any) => {
    message.loading("Creating...");
    try {
      const feedbackData = {
        ...data,
        userId: _id,
        serviceId: id,
      };

      console.log({ feedbackData });

      const res: any = await createFeedback(feedbackData);

      console.log(res);

      if (res?.data?.success) {
        message.success("Feedback Added successfully");
      } else {
        message.error("Failed to add Feedback");
      }

      // console.log(feedbackData);
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
            fontSize: "22px",
            marginBottom: "15px",
            display: "flex",
            justifyContent: "center",
            padding: "10px 0",
          }}
        >
          Only Login User Add Feedback
        </p>
        <Form submitHandler={onSubmit} resolver={yupResolver(feedbackSchema)}>
          <Row gutter={{ lg: 32 }}>
            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                  fontSize: "18px",
                }}
              >
                <FormTextArea name="feedback" label="Feedback *" rows={4} />
              </div>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit">
            Add Feedback
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateFeedback;
