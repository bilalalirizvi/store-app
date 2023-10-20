import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { BiArrowBack } from "react-icons/bi";

import SiderMenu from "./SiderMenu";

const SiderDrawer = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <div className="m-header">
        <Button onClick={showDrawer}>
          <MenuOutlined
            style={{
              color: "var(--white)",
              opacity: 0.5,
            }}
          />
        </Button>
      </div>
      <Drawer
        className="mobile-menu-drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
      >
        {/* <div>
          <div className="m-drawer">
            <BiArrowBack
              onClick={() => setVisible(false)}
              className="back-arrow"
            />
          </div>
        </div> */}
        <SiderMenu visible={visible} setVisible={setVisible} />
      </Drawer>
    </>
  );
};

export default SiderDrawer;
