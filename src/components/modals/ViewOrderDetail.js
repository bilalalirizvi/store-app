import React, { useState } from "react";

import { Modal, App, Table } from "antd";
import moment from "moment";

const ViewOrderDetail = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { message } = App.useApp();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const columns = [
    {
      title: " ",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (text) => (
        <div className="users_image_box">
          <img
            src={text ? text : require("../../assets/images/user-icon.jpg")}
            alt="Order"
          />
        </div>
      ),
    },
    {
      title: "USER NAME",
      dataIndex: "name",
      key: "name",
      render: (_, obj) => (
        <p>{`${obj?.user?.firstName} ${obj?.user?.lastName}`}</p>
      ),
    },
    {
      title: "DATE",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => <p>{moment(date).format("ddd, DD-MM-YYYY")}</p>,
    },
    {
      title: "NUM OF ORDER",
      dataIndex: "product",
      key: "product",
      render: (_, obj) => <p>{obj?.product?.length}</p>,
    },
    {
      title: "NET TOTAL",
      dataIndex: "netTotal",
      key: "netTotal",
      render: (text) => (
        <p>{text ? <>{`Rs.${text?.toLocaleString()}`}</> : "-"}</p>
      ),
    },
    // {
    //   title: "ACTIONS",
    //   dataIndex: "imageUrl",
    //   key: "imageUrl",
    //   render: (_, obj) => (
    //     <div className="icon_box">
    //       <CreateProduct isEdit data={obj} />
    //       <DeleteModal type={"order"} data={obj} />
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
      <p className="view_text" onClick={showModal}>
        View
      </p>
      <Modal
        forceRender
        name="create-user-form"
        title={""}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        className="view_order_detail_modal"
        centered
        style={{ width: "1000px" }}
      >
        <Table
          columns={columns}
          dataSource={data}
          rowKey={(record) => record._id}
          scroll={{ x: 900 }}
          pagination={false}
        />
      </Modal>
    </>
  );
};
export { ViewOrderDetail };
