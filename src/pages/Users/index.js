import React, { useEffect, useState } from "react";

import { Table, Input } from "antd";

import { useSelector } from "react-redux";

import { getAllUsers } from "../../store/services/users";

import { CreateUser } from "../../components/modals/CreateUser";
import { DeleteModal } from "../../components";
const { Search } = Input;

const Users = () => {
  const { isLoading, data, count } = useSelector((state) => state.users);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [page]);

  const getData = async () => {
    await getAllUsers({
      search: search,
      page,
      perPage: 10,
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
      dataIndex: "firstName",
      key: "firstName",
      render: (_, obj) => (
        <p>
          {obj?.firstName} {obj?.lastName}
        </p>
      ),
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text) => <p>{text ? text : "-"}</p>,
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text ? text : "-"}</p>,
    },
    {
      title: "ACTIONS",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (_, obj) => (
        <div className="icon_box">
          <CreateUser isEdit data={obj} />
          <DeleteModal type={"store"} data={obj} />
        </div>
      ),
    },
  ];

  return (
    <div className="users_container">
      <div className="content_header">
        <h2>Users</h2>
        <CreateUser />
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

export { Users };
