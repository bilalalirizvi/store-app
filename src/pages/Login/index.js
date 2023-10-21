import React from "react";
import { Button, Form, Input } from "antd";

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {};

  return (
    <div className="auth_container">
      <h1>Store's</h1>
      <div className="form_wrapper">
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <Form
          layout="vertical"
          form={form}
          //   fields={
          //     data
          //       ? [
          //           {
          //             name: "name",
          //             value: form.getFieldValue("name") || data?.name,
          //           },
          //           {
          //             name: "phoneNumber",
          //             value:
          //               form.getFieldValue("phoneNumber") || data?.phoneNumber,
          //           },
          //           {
          //             name: "email",
          //             value: form.getFieldValue("email") || data?.email,
          //           },
          //           {
          //             name: "address",
          //             value: form.getFieldValue("address") || data?.address,
          //           },
          //         ]
          //       : []
          //   }
          onFinish={onFinish}
          requiredMark={false}
          autoComplete="off"
          //   style={{ marginTop: "30px" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item> */}
          {/* <div className="create_user_modal_footer"> */}

          <Button
            className="button"
            type="primary"
            loading={false}
            htmlType="submit"
          >
            LOGIN
          </Button>
          {/* </div> */}
          {/* </Form.Item> */}
        </Form>
      </div>
    </div>
  );
};

export { Login };
