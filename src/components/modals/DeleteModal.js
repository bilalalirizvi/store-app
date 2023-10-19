import React, { useState } from "react";

import { Modal, App, Button } from "antd";

import { CiTrash } from "react-icons/ci";
import { PiWarningCircleLight } from "react-icons/pi";
import { deleteUser } from "../../store/services/users";
import { deleteStore } from "../../store/services/stores";
import { deleteProduct } from "../../store/services/products";

const DeleteModal = ({ data, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { message } = App.useApp();

  const showModal = () => setIsModalOpen(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const res =
      type === "user"
        ? await deleteUser(data?._id)
        : type === "store"
        ? await deleteStore(data?._id)
        : type === "product"
        ? await deleteProduct(data?._id)
        : "";
    if (res) {
      message.success(res);
      handleCancel();
    }
    setIsLoading(false);
  };

  return (
    <>
      <CiTrash className="icon" onClick={showModal} />
      <Modal
        forceRender
        name="delete-modal"
        title={" "}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        className="delete_modal"
        centered
      >
        <div className="delete_modal_wrapper">
          <PiWarningCircleLight size={60} color={"orange"} />
          <h2>Are You Sure?</h2>
          <div className="delete_modal_footer">
            <Button className="buttonOutlined" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              className="button"
              type="primary"
              loading={isLoading}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export { DeleteModal };
