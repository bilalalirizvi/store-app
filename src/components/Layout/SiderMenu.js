import React, { useState } from "react";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const SiderMenu = ({ visible, setVisible }) => {
  const headerHeight = 64;
  const footerHeight = 64;
  const { pathname } = useLocation();
  const getActiveKey = () => {
    switch (pathname) {
      case "/": {
        return ["1"];
      }
      case "/store": {
        return ["2"];
      }
      case "/product": {
        return ["3"];
      }
      default:
        return ["1"];
    }
  };
  const [active, setActive] = useState(getActiveKey);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    if (visible) setVisible(false);
    switch (event.key) {
      case "1":
        setActive(["1"]);
        navigate("/");
        break;
      case "2":
        setActive(["2"]);
        navigate("/store");
        break;
      case "3":
        setActive(["3"]);
        navigate("/product");
        break;
      default:
        setActive(["1"]);
        navigate("/");
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: `${headerHeight}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#fff" }}>Store's</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={active}
        onClick={handleMenu}
        style={{
          height: `calc(100vh - (${headerHeight + footerHeight}px))`,
        }}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "User",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "Store",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Product",
          },
        ]}
      />
      <div style={{ width: "100%", height: `${footerHeight}px` }}></div>
    </>
  );
};

export default SiderMenu;
