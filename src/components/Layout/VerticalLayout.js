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
        <Header>
          <div className="layout_header">
            {/* <h3></h3> */}
            <div className="user_detail">
              <h4>Imtiaz's Store</h4>
              <div className="users_image_box">
                <img
                  src={require("../../assets/images/user-icon.jpg")}
                  alt="Icon"
                />
              </div>
            </div>
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Store's ©2023 Created by Bilal Ali</Footer>
      </Layout>
    </Layout>
  );
};

export default VerticalLayout;
