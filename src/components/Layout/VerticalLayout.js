import React from "react";

import { Layout } from "antd";

import { Outlet } from "react-router-dom";
import SiderMenu from "./SiderMenu";

const { Header, Sider, Content, Footer } = Layout;

const VerticalLayout = () => {
  return (
    <Layout style={{ height: "100vh" }} className="v-layout">
      <Sider trigger={null}>
        <SiderMenu />
      </Sider>
      <Layout>
        <Header></Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Store's ©2023 Created by Bilal Ali</Footer>
      </Layout>
    </Layout>
  );
};

export default VerticalLayout;
