import React, { useState } from "react";

import { Button, Modal, Form, Input, App } from "antd";

import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";
import { createStore, updateStore } from "../../store/services/stores";

const CreateStore = ({ isEdit, data }) => {
  const { buttonLoading } = useSelector((state) => state.stores);
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
      ? await updateStore({ ...values, _id: data?._id })
      : await createStore(values);
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
          Create Store
        </Button>
      )}
      <Modal
        forceRender
        name="create-user-form"
        title={isEdit ? "Edit Store" : "Create Store"}
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
                    name: "name",
                    value: form.getFieldValue("name") || data?.name,
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
                  {
                    name: "address",
                    value: form.getFieldValue("address") || data?.address,
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
            label="Name"
            name="name"
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
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input />
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
export { CreateStore };
