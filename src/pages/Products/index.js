import React, { useEffect, useState } from "react";

import { Table } from "antd";

import { useSelector } from "react-redux";

import { getAllProduct } from "../../store/services/products";

import { CreateProduct, DeleteModal } from "../../components";

const Products = () => {
  const { isLoading, data, count } = useSelector((state) => state.products);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    window.scrollTo(0, 0);
    await getAllProduct({
      search: "",
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
      render: (v) => (
        <div className="users_image_box">
          <img
            src={v ? v : require("../../assets/images/user-icon.jpg")}
            alt="Image"
          />
        </div>
      ),
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text ? text : "-"}</p>,
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      render: (text) => <p>{text ? text : "-"}</p>,
    },
    {
      title: "STOCK",
      dataIndex: "stock",
      key: "stock",
      render: (text) => <p>{text ? text : "-"}</p>,
    },
    {
      title: "ACTIONS",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (_, obj) => (
        <div className="icon_box">
          <CreateProduct isEdit data={obj} />
          <DeleteModal type={"product"} data={obj} />
        </div>
      ),
    },
  ];

  return (
    <div className="users_container">
      <div className="content_header">
        <h2>Products</h2>
        <CreateProduct />
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

export { Products };
