import React, { useEffect, useState } from "react";

import { Table, Input, Button } from "antd";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAllOrder } from "../../store/services/orders";

import { CreateProduct, DeleteModal, ViewOrderDetail } from "../../components";

import moment from "moment";

const { Search } = Input;

const Orders = () => {
  const { isLoading, data, count } = useSelector((state) => state.orders);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getData = async () => {
    await getAllOrder({
      search,
      page,
      perPage: 10,
      store: localStorage.getItem("storeId"),
    });
  };

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
    <div className="users_container">
      <div className="content_header">
        <h2>Orders</h2>
        <Button
          className="button"
          type="primary"
          onClick={() => navigate("/create-order")}
        >
          Create Order
        </Button>
      </div>

      <div className="search_input_box">
        <Search
          placeholder="Search..."
          onSearch={() => getData()}
          enterButton
          allowClear
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={data}
        rowKey={(record) => record._id}
        scroll={{ x: 900 }}
        pagination={{
          current: page,
          total: count,
          onChange: (val) => {
            setPage(val);
          },
        }}
      />
    </div>
  );
};

export { Orders };
