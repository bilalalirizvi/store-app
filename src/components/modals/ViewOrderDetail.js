import React, { useState } from "react";

import {
  Modal,
  // App,
  Table,
} from "antd";
// import moment from "moment";
import { BsEye } from "react-icons/bs";
import { DeleteModal } from "./DeleteModal";
import moment from "moment";

const ViewOrderDetail = ({ data }) => {
  console.log(
    "🚀 ~ file: ViewOrderDetail.js:13 ~ ViewOrderDetail ~ data:",
    data
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const { message } = App.useApp();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const columns = [
    {
      title: " ",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (text) => (
        <div
          className="users_image_box"
          style={{ borderRadius: 0, marginBlock: "5px" }}
        >
          <img
            src={text ? text : require("../../assets/images/cart.png")}
            alt="Order"
            style={{ borderRadius: 0 }}
          />
        </div>
      ),
    },
    {
      title: "PRODUCT NAME",
      dataIndex: "productId",
      key: "productId",
      render: (_, obj) => <p>{obj?.productId?.name}</p>,
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      render: (text) => <p>Rs.{text?.toLocaleString()}</p>,
    },
    {
      title: "QUANTITY",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "TOTAL",
      dataIndex: "total",
      key: "total",
      render: (_, obj) => (
        <p>
          {
            <>{`Rs.${(
              Number(obj.price) * Number(obj?.quantity)
            )?.toLocaleString()}`}</>
          }
        </p>
      ),
    },
    {
      title: " ",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (_, obj) => (
        <div className="icon_box">
          {/* <CreateProduct isEdit data={obj} /> */}
          <DeleteModal type={"order"} data={obj} />
        </div>
      ),
    },
  ];

  return (
    <>
      <BsEye className="icon" onClick={showModal} />
      <Modal
        forceRender
        name="create-user-form"
        title={""}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        className="view_order_detail_modal"
        centered
      >
        <div className="header">
          <div className="row">
            <p>User Name:</p>
            <h6>
              {data?.user?.firstName} {data?.user?.lastName}
            </h6>
          </div>
          <div className="row">
            <p>Email:</p>
            <h6>{data?.user?.email}</h6>
          </div>
          <div className="row">
            <p>Phone Number:</p>
            <h6>{data?.user?.phoneNumber}</h6>
          </div>
          <div className="row">
            <p>Date:</p>
            <h6>
              {moment(data?.user?.createdAt).format("ddd, DD-MM-YYYY hh:mm a")}
            </h6>
          </div>
        </div>
        <hr className="divider" />
        <Table
          columns={columns}
          dataSource={data?.product}
          rowKey={(record) => record._id}
          scroll={{ x: 900 }}
          pagination={false}
          summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell colSpan={3} index={0}></Table.Summary.Cell>
                <Table.Summary.Cell index={1}>Net Total</Table.Summary.Cell>
                <Table.Summary.Cell colSpan={2} index={2}>
                  Rs.{data?.netTotal?.toLocaleString()}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
      </Modal>
    </>
  );
};
export { ViewOrderDetail };
