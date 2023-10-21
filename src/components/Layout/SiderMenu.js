import React, { useState } from "react";

import {
  UserOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { Button, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const SiderMenu = ({ visible, setVisible }) => {
  const headerHeight = 70;
  const footerHeight = 70;
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
      case "/order": {
        return ["4"];
      }
      default:
        return ["1"];
    }
  };
  const [active] = useState(getActiveKey);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    if (visible) setVisible(false);
    switch (event.key) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/store");
        break;
      case "3":
        navigate("/product");
        break;
      case "4":
        navigate("/order");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <div className="sider_top" style={{ height: `${headerHeight}px` }}>
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
            icon: <ShopOutlined />,
            label: "Store",
          },
          {
            key: "3",
            icon: <ShoppingCartOutlined />,
            label: "Product",
          },
          {
            key: "4",
            icon: <ShoppingCartOutlined />,
            label: "Order",
          },
        ]}
      />
      <div className="sider_bottom" style={{ height: `${footerHeight}px` }}>
        <Button
          type="primary"
          style={{ width: "100%" }}
          icon={<LogoutOutlined />}
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default SiderMenu;
