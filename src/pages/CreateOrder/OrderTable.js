import { Table } from "antd";
import moment from "moment";
import React from "react";

const OrderTable = () => {
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
      render: (date) => <p>{moment(date).format("ddd, DD-MM-YYYY hh:mm a")}</p>,
    },
    {
      title: "NUM OF PRODUCT",
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
    {
      title: "ACTIONS",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (_, obj) => (
        <div className="icon_box">
          <ViewOrderDetail data={obj} />
          <CreateProduct isEdit data={obj} />
          <DeleteModal type={"order"} data={obj} />
        </div>
      ),
    },
  ];

  return (
    <Table
      // loading={isLoading}
      columns={columns}
      dataSource={[]}
      rowKey={(record) => record._id}
      scroll={{ x: 900 }}
      pagination={false}
    />
  );
};

export default OrderTable;
