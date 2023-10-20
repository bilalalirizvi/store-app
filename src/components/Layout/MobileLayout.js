import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SiderDrawer from "./SiderDrawer";

const { Content } = Layout;

const MobileLayout = () => {
  return (
    <Layout className="m-layout">
      <SiderDrawer />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MobileLayout;
