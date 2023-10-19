import React, { useState } from "react";

import { Button, Modal, Form, Input, App } from "antd";

import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";
import { createProduct, updateProduct } from "../../store/services/products";

const CreateProduct = ({ isEdit, data }) => {
  const { buttonLoading } = useSelector((state) => state.products);
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
      ? await updateProduct({
          ...values,
          price: Number(values?.price),
          stock: Number(values?.stock),
          _id: data?._id,
          store: localStorage.getItem("storeId"),
        })
      : await createProduct({
          ...values,
          price: Number(values?.price),
          stock: Number(values?.stock),
          store: localStorage.getItem("storeId"),
        });
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
          Create Product
        </Button>
      )}
      <Modal
        forceRender
        name="create-user-form"
        title={isEdit ? "Edit Product" : "Create Product"}
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
                    name: "price",
                    value: form.getFieldValue("price") || data?.price,
                  },
                  {
                    name: "stock",
                    value: form.getFieldValue("stock") || data?.stock,
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
            label="Price"
            name="price"
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
            label="Stock"
            name="stock"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input type="number" />
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
export { CreateProduct };
