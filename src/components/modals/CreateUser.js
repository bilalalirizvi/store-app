import React, { useEffect, useState } from "react";

import { Button, Modal, Form, Input, App } from "antd";

import { CiEdit } from "react-icons/ci";
import { createUser, updateUser } from "../../store/services/users";
import { useSelector } from "react-redux";

const CreateUser = ({ isEdit, data }) => {
  const { buttonLoading } = useSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const { message } = App.useApp();

  const showModal = () => setIsModalOpen(true);

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    const response = isEdit
      ? await updateUser({ ...values, _id: data?._id })
      : await createUser(values);
    if (response) {
      handleCancel();
      message.success(response);
    }
  };

  return (
    <>
      {isEdit ? (
        <CiEdit className="icon" onClick={showModal} />
      ) : (
        <Button className="button" type="primary" onClick={showModal}>
          Create User
        </Button>
      )}
      <Modal
        forceRender
        name="create-user-form"
        title={isEdit ? "Edit User" : "Create User"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        className="create_user_modal"
        centered
      >
        <Form
          layout="vertical"
          form={form}
          fields={
            data
              ? [
                  {
                    name: "firstName",
                    value: form.getFieldValue("firstName") || data?.firstName,
                  },
                  {
                    name: "lastName",
                    value: form.getFieldValue("lastName") || data?.lastName,
                  },
                  {
                    name: "phoneNumber",
                    value:
                      form.getFieldValue("phoneNumber") || data?.phoneNumber,
                  },
                  {
                    name: "email",
                    value: form.getFieldValue("email") || data?.email,
                  },
                ]
              : []
          }
          onFinish={onFinish}
          requiredMark={false}
          autoComplete="off"
          style={{ marginTop: "30px" }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
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
          <Form.Item>
            <div className="create_user_modal_footer">
              <Button className="buttonOutlined" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                className="button"
                type="primary"
                loading={buttonLoading}
                htmlType="submit"
              >
                {isEdit ? "Update" : "Create"}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export { CreateUser };
